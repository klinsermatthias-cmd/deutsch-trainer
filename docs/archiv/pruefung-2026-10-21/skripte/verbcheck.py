import json,re,html,os,subprocess,time,urllib.parse,sys
P='/home/user/deutsch-trainer/lektionen/lektionen.json'
DW='dw'  # DWDS-Cache im aktuellen Ordner, fehlende Seiten werden geholt
L=json.load(open(P,encoding='utf-8'))
PR=['ich','du','er/sie/es','wir','ihr','sie/Sie']
REFL={'mich','dich','sich','uns','euch','mir','dir'}
AT={'sitzen','stehen','liegen','hängen','knien','hocken','schweben','schwimmen'}
def fetch(lemma):
    f=f'{DW}/flexion-{lemma}.html'
    if os.path.exists(f) and os.path.getsize(f)>8000: return f
    url='https://www.dwds.de/lemma/flexion/'+urllib.parse.quote(lemma)
    r=subprocess.run(['curl','-sL','--max-time','30','-A','Mozilla/5.0','-o',f,'-w','%{http_code}',url],capture_output=True,text=True)
    time.sleep(1.2)
    print('FETCH',lemma,r.stdout,file=sys.stderr)
    return f if r.stdout=='200' else None
def table(s,lemma,cap):
    i=s.find(f'{lemma}: {cap}, Indikativ')
    if i<0: return None
    body=s[i:s.find('</table>',i)]
    cells=re.findall(r'<td>(.*?)</td>',body,re.S)
    allv=[[html.unescape(re.sub(r'<[^>]+>','',x)).replace('(ugs.)','').strip() for x in c.split('<br/>')] for c in cells]
    order=[0,2,4,1,3,5]
    return [set(re.sub(r'\s+',' ',y.strip()) for x in allv[k] for y in x.split(', ') if y.strip()) for k in order]
def norm(form):
    form=re.sub(r'\(.*?\)','',form).strip()
    toks=[t for t in form.split() if t not in REFL]
    return ' '.join(toks)
out=[]
for t in L:
  for i,v in enumerate(t['v']):
    d=v[2] if len(v)>2 and isinstance(v[2],dict) else {}
    if 'f' not in d: continue
    w=v[0]; toks=w.split(); refl=toks[0]=='sich'; rest=toks[1:] if refl else toks
    lemma=rest[-1]; obj=rest[:-1]
    f=fetch(lemma)
    tag=f'{t["id"]}-{i} {w}'
    if not f: out.append(f'{tag}: DWDS nicht abrufbar'); continue
    s=open(f,encoding='utf-8').read()
    caps=[('Präsens','Präsens'),('Präteritum','Präteritum'),('Perfekt','Präsensperfekt (Perfekt)')]
    if len(d['f'])!=3: out.append(f'{tag}: {len(d["f"])} Zeilen statt 3')
    for li,(lab,cap) in enumerate(caps):
        tb=table(s,lemma,cap)
        if tb is None: out.append(f'{tag}: Tabelle {cap} fehlt bei DWDS'); continue
        line=d['f'][li] if li<len(d['f']) else ''
        if not line.startswith(lab+':'): out.append(f'{tag}: Zeile {li} beginnt nicht mit {lab}'); continue
        parts=[p.strip() for p in line[len(lab)+1:].split(' · ')]
        if len(parts)!=6: out.append(f'{tag}: {lab} hat {len(parts)} Personen'); continue
        for j,p in enumerate(parts):
            if not p.startswith(PR[j]+' '): out.append(f'{tag}: {lab} Person {j} Pronomen „{p}“'); continue
            fx=p[len(PR[j])+1:]
            variants=[norm(x) for x in fx.split(', ')]
            # variants after the first may omit pronoun parts; compare each
            for vv in variants:
                # strip object words (e.g. Wendung objects)
                vt=[x for x in vv.split() if x not in obj]
                vv2=' '.join(vt)
                ok=vv2 in tb[j]
                if lab=='Perfekt' and not ok:
                    m2=re.search(r'Perfekt mit (haben oder sein|sein oder haben|haben|sein)',s); hv=m2.group(1) if m2 else 'haben'
                    a0,rest0=(vv2.split(' ',1)+[''])[:2]
                    tbp={ (x.split(' ',1)+[''])[1] for x in tb[j]}
                    auxs={'bin','bist','ist','sind','seid'} if 'sein' in hv else set()
                    if 'haben' in hv: auxs|={'habe','hast','hat','haben','habt'}
                    if rest0 in tbp and a0 in auxs: ok=True
                if not ok and lab=='Perfekt':
                    # Austrian sein for sitzen etc.
                    alt=re.sub(r'^(bin|bist|ist|sind|seid)\b',lambda m:{'bin':'habe','bist':'hast','ist':'hat','sind':'haben','seid':'habt'}[m.group(1)],vv2)
                    if lemma in AT and alt in tb[j]: ok='AT'
                if not ok: out.append(f'{tag}: {lab} {PR[j]}: Karte „{vv}“ ≠ DWDS {sorted(tb[j])}')
        # s-field consistency
    sf=d.get('s','')
    sp=[x.strip() for x in re.sub(r'\(.*?\)','',sf).split(' · ')]
    try:
        er=[re.sub(r'^er/sie/es ','',[p for p in d['f'][k].split(': ',1)[1].split(' · ')][2]).split(', ')[0] for k in range(3)]
        er=[' '.join(x for x in e.split() if x not in REFL) for e in er]
        spn=[' '.join(x for x in e.split() if x not in REFL) for e in sp]
        if spn!=er: out.append(f'{tag}: s „{sf}“ ≠ er-Formen {er}')
    except Exception as e: out.append(f'{tag}: s/f nicht lesbar {e}')
    k=d.get('k','')
    # regular?
    pt=table(s,lemma,'Präteritum'); 
    m=re.search(r'Partizip II ([^;"]+?)[;"]',s); p2=m.group(1).split(',')[0].strip() if m else ''
    er_pt=sorted(pt[2])[0] if pt else ''
    sep=len(er_pt.split())>1
    base=lemma[len(er_pt.split()[1]):] if sep else lemma
    stem=base[:-1] if base.endswith(('eln','ern')) else re.sub(r'e?n$','',base)
    fin=er_pt.split()[0] if er_pt else ''
    reg=fin in (stem+'te',stem+'ete') and p2.endswith('t')
    kk=k.split(' · ')
    if lemma in ('dürfen','sollen','wollen','können','müssen','mögen'): pass
    elif ('regelmäßig' in kk) != reg: out.append(f'{tag}: k „{k}“, aber DWDS Prät {fin}, Part {p2} → {"regelmäßig" if reg else "unregelmäßig"}')
    if ('trennbar' in kk)!=sep: out.append(f'{tag}: k „{k}“ trennbar? DWDS {er_pt}')
    if ('reflexiv' in kk)!=refl: out.append(f'{tag}: k „{k}“ reflexiv? Karte {w}')
print('\n'.join(out)); print('Verben geprüft, Funde:',len(out),file=sys.stderr)
