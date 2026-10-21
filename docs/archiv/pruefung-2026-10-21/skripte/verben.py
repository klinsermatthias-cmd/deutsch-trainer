import json,re,html,sys
P='/home/user/deutsch-trainer/lektionen/lektionen.json'
L=json.load(open(P,encoding='utf-8'))
PR=['ich','du','er/sie/es','wir','ihr','sie/Sie']
RA=['mich','dich','sich','uns','euch','sich']; RD=['mir','dir','sich','uns','euch','sich']
HAT=['habe','hast','hat','haben','habt','haben']; IST=['bin','bist','ist','sind','seid','sind']
def table(lemma,cap):
    s=open(f'dw/flexion-{lemma}.html',encoding='utf-8').read()
    i=s.find(f'{lemma}: {cap}, Indikativ')
    if i<0: return None
    body=s[i:s.find('</table>',i)]
    cells=re.findall(r'<td>(.*?)</td>',body,re.S)
    first=[html.unescape(re.sub(r'<[^>]+>','',c.split('<br/>')[0])).strip() for c in cells]
    allv=[[html.unescape(re.sub(r'<[^>]+>','',x)).strip() for x in c.split('<br/>')] for c in cells]
    order=[0,2,4,1,3,5]  # ich du er wir ihr sie
    return [first[k] for k in order],[allv[k] for k in order]
def part2(lemma):
    s=open(f'dw/flexion-{lemma}.html',encoding='utf-8').read()
    m=re.search(r'Partizip II ([^;"]+?)[;"]',s)
    return m.group(1).strip().split(',')[0].strip() if m else None
def strip_pron(x): return re.sub(r'^(er/sie/es|ich|du)\s+','',x)
MODAL={'dürfen','sollen','wollen','können','müssen','mögen'}
GEBRAUCH={'helfen':'+ Dativ: Ich helfe dir.','danken':'+ Dativ: Ich danke Ihnen.','gratulieren':'+ Dativ: Wir gratulieren dir.',
'gehören':'+ Dativ: Das gehört mir.','gefallen':'+ Dativ: Das gefällt mir.','passen':'+ Dativ: Die Schuhe passen mir.',
'schmecken':'+ Dativ: Der Kuchen schmeckt mir.','antworten':'+ Dativ: Ich antworte dir.','zuhören':'+ Dativ: Ich höre dir zu.',
'wehtun':'+ Dativ: Der Kopf tut mir weh.','geben':'jemandem (Dativ) etwas (Akkusativ): Ich gebe dem Kind den Ball.',
'schenken':'jemandem (Dativ) etwas (Akkusativ): Ich schenke meiner Mutter Blumen.','zeigen':'jemandem (Dativ) etwas (Akkusativ): Ich zeige dir die Wohnung.',
'schicken':'jemandem (Dativ) etwas (Akkusativ): Ich schicke dir eine Nachricht.','leihen':'jemandem (Dativ) etwas (Akkusativ): Ich leihe dir mein Rad.',
'überreichen':'jemandem (Dativ) etwas (Akkusativ): Wir überreichen der Chefin die Blumen.','fragen':'+ Akkusativ: Ich frage dich.',
'besuchen':'+ Akkusativ: Ich besuche meine Mutter.','bewerben':'sich bewerben um eine Stelle / bei einer Firma: Ich bewerbe mich bei der Firma.'}
out={}; probleme=[]
for t in L:
    for i,v in enumerate(t['v']):
        if not(len(v)>2 and isinstance(v[2],dict) and v[2].get('f')): continue
        w=v[0]; old=v[2]['f']; toks=w.split()
        refl=toks[0]=='sich'; rest=toks[1:] if refl else toks
        lemma=rest[-1]; comp=' '.join(rest[:-1])
        dat=refl and bool(comp)
        pr,prA=table(lemma,'Präsens'); pt,ptA=table(lemma,'Präteritum'); pp=part2(lemma)
        if lemma=='hängen' and comp:  # transitiv: hängt, hängte, hat gehängt (DWDS wb hängen, 2. Eintrag)
            pt=['hängte','hängtest','hängte','hängten','hängtet','hängten']; ptA=[[x] for x in pt]
        # alte Zeilen: Präteritum/Perfekt er-Form, aux, Notiz
        oPt=strip_pron(re.sub(r'^Präteritum:\s*','',old[1])); oPf=strip_pron(re.sub(r'^Perfekt:\s*','',old[2]))
        note=' '.join(re.findall(r'\(.*\)$',oPf)); oPf0=re.sub(r'\s*\(.*\)$','',oPf)
        aux=oPf0.split()[0]; 
        # Präteritum-Variante wählen, die zur alten er-Form passt
        fin_old=oPt.split()[0]
        if pt[2].split()[0]!=fin_old:
            alt=[k for k,x in enumerate(ptA[2]) if x.split()[0]==fin_old]
            if alt: pt=[ptA[j][alt[0]] if len(ptA[j])>alt[0] else pt[j] for j in range(6)]
            else: probleme.append(f'{t["id"]}-{i} {w}: Präteritum alt {fin_old} ≠ DWDS {ptA[2]}')
        part_old=oPf0.split()[-1]
        if pp!=part_old and part_old!='gehängt': probleme.append(f'{t["id"]}-{i} {w}: Partizip alt {part_old} ≠ DWDS {pp}')
        if lemma=='hängen' and comp: pp='gehängt'
        else: pp=part_old if pp!=part_old else pp
        def comp_line(forms):
            res=[]
            for j,f in enumerate(forms):
                ft=f.split(); fin,partc=ft[0],' '.join(ft[1:])
                bits=[PR[j],fin]+([ (RD if dat else RA)[j] ] if refl else [])+([comp] if comp else [])+([partc] if partc else [])
                res.append(' '.join(bits))
            return ' · '.join(res)
        A=HAT if aux=='hat' else IST
        perf=' · '.join(' '.join([PR[j],A[j]]+([(RD if dat else RA)[j]] if refl else [])+([comp] if comp else [])+[pp]) for j in range(6))
        sep=len(pr[2].split())>1
        lem_stem=lemma
        if sep: lem_stem=lemma[len(pr[2].split()[1]):]
        st=re.sub(r'(e?n)$','',lem_stem) if not lem_stem.endswith(('eln','ern')) else lem_stem[:-1]
        fin3=pt[2].split()[0]
        regel=(fin3 in (st+'te',st+'ete')) and pp.endswith('t') and lemma not in MODAL and lemma not in ('haben','wissen','kennen')
        k=['regelmäßig' if regel else 'unregelmäßig']
        if sep: k.append('trennbar')
        if refl: k.append('reflexiv')
        if lemma in MODAL: k.append('Modalverb')
        er_pr=comp_line(pr).split(' · ')[2][len('er/sie/es '):]; er_pt=comp_line(pt).split(' · ')[2][len('er/sie/es '):]
        er_pf=perf.split(' · ')[2][len('er/sie/es '):]
        s=f'{er_pr} · {er_pt} · {er_pf}'+(f' {note}' if note else '')
        new={'k':' · '.join(k),'s':s,'f':['Präsens: '+comp_line(pr),'Präteritum: '+comp_line(pt),'Perfekt: '+perf]}
        if lemma in GEBRAUCH: new['g']=GEBRAUCH[lemma]
        # Abgleich Präsens er-Form
        oPr=re.sub(r'^Präsens:\s*','',old[0]).split(' · ')[-1]; oPr=strip_pron(oPr)
        if oPr.replace(' ','')!=er_pr.replace(' ','') : probleme.append(f'{t["id"]}-{i} {w}: Präsens alt „{oPr}“ neu „{er_pr}“')
        out[f'{t["id"]}-{i}']=new
json.dump(out,open('verben-neu.json','w',encoding='utf-8'),ensure_ascii=False,indent=1)
print(len(out),'Verben;',len(probleme),'Abweichungen'); print('\n'.join(probleme))
