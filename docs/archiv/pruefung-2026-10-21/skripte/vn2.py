import json,subprocess,html,re
R='/home/user/deutsch-trainer'
new=json.load(open(R+'/lektionen/lektionen.json',encoding='utf-8'))
old=json.loads(subprocess.check_output(['git','-C',R,'show','origin/main:lektionen/lektionen.json']))
O={t['id']:t for t in old}
E=html.escape
def ex_html(e):
    t=e['t']; parts=[]
    q=e.get('q') or e.get('de') or ''
    if t=='ord': parts.append(E(e.get('de',''))); parts.append('<span class="w">'+' · '.join(map(E,e['w']))+'</span>')
    elif t=='mc': parts.append(E(q)); parts.append('<span class="w">'+' | '.join(map(E,e['o']))+'</span>')
    elif t in('les','luk'):
        parts.append(E(q)); tx=e.get('txt',''); tx=' / '.join(tx) if isinstance(tx,list) else tx; parts.append('<span class="w">'+E(tx)[:600]+'</span>')
        parts.append('') if not e.get('qs') else parts.append('<span class="w">'+' | '.join(E(x['q'])+' → '+E(x['o'][x['a']]) for x in e['qs'])+'</span>')
    elif t=='zuo': parts.append(E(q)); parts.append('<span class="w">'+'; '.join(E(' → '.join(p)) for p in e['p'])+'</span>')
    elif t in('tab','dlg'): parts.append(E(q)); parts.append('<span class="w">'+E(json.dumps(([e['head']] if e.get('head') else [])+e.get('r',[]),ensure_ascii=False))[:900]+'</span>')
    else: parts.append(E(q))
    a=e.get('a')
    if t=='mc' and isinstance(a,int): a=e['o'][a]
    if a is not None:
        a=a if isinstance(a,list) else [a]
        parts.append('<span class="a">✓ '+' / '.join(E(str(x)) for x in a)+'</span>')
    if e.get('h'): parts.append('<span class="h">Hinweis: '+E(e['h'])+'</span>')
    return '<li><span class="fmt">'+E(t)+'</span> '+'<br>'.join(parts)+'</li>'
def secs(th):
    p=re.split(r'(?=<h3[\s>])',th); return p
def steps_html(t):
    return '<ol class="st">'+''.join(f"<li><b>{E(s['t'])}</b> – Abschnitte {', '.join(map(str,s.get('sec',[]))) or '–'} · {len(s['ex'])} Übungen</li>" for s in t.get('steps',[]))+'</ol>'
nav=[];body=[];tot={'neu':0,'aus':0,'v':0}
for t in new:
    o=O.get(t['id'])
    if not o:
        tid=t['id']; nav.append(f'<a href="#{tid}">{tid} NEU</a>'); tot['neu']+=len(t['ex']); tot['v']+=len(t['v'])
        body.append(f'<section id="{tid}"><h2><span class="tid">{tid}</span> {E(t["title"])} <small>(neues Thema)</small></h2><p class="meta">{E(t["fi"])} · Niveau {E(t.get("lvl",""))} · baut auf: {", ".join(t["req"])} · {len(t["ex"])} Übungen</p><div class="cmp"><div class="col new"><div class="lab">Theorie</div><div class="theory">'+t['th']+'</div></div><div class="col new"><div class="lab">Lernschritte</div>'+steps_html(t)+'</div></div><details open><summary>Alle Übungen ('+str(len(t['ex']))+')</summary><ul class="ex">'+''.join(ex_html(e) for e in t['ex'])+'</ul></details></section>')
        continue
    ch_th=o['th']!=t['th']; nn=len(t['ex'])-len(o['ex'])
    neu=[(i,e) for i,e in enumerate(t['ex']) if i>=len(o['ex']) and not e.get('aus')]
    aus=[i for i,e in enumerate(t['ex']) if e.get('aus') and (i>=len(o['ex']) or not o['ex'][i].get('aus'))]
    nv=t['v'][len(o['v']):] if len(t['v'])>len(o['v']) else []
    ch_st=o.get('steps')!=t.get('steps')
    if not(ch_th or neu or aus or nv or ch_st): continue
    tot['neu']+=len(neu);tot['aus']+=len(aus);tot['v']+=len(nv)
    tid=t['id']; nav.append(f'<a href="#{tid}">{tid}</a>')
    info=[]
    if neu: info.append(f'{len(neu)} neue Übungen')
    if aus: info.append(f'{len(aus)} ersetzt/ausgeblendet')
    if nv: info.append(f'{len(nv)} neue Wortkarten')
    if ch_st: info.append('Lernschritte angepasst')
    if o['title']!=t['title']: info.append('Titel: „'+E(o['title'])+'“ → „'+E(t['title'])+'“')
    nr=[r for r in t['req'] if r not in o['req']]
    if nr: info.append('baut neu auf: '+', '.join(nr))
    ch_th=ch_th or o['title']!=t['title'] or bool(nr)
    b=[f'<section id="{tid}"><h2><span class="tid">{tid}</span> {E(t["title"])}</h2><p class="meta">{" · ".join(info) or "nur Theorie"}</p>']
    if o['th']!=t['th']:
        b.append('<div class="cmp"><div class="col old"><div class="lab">Vorher (live)</div><div class="theory">'+o['th']+'</div></div><div class="col new"><div class="lab">Nachher</div><div class="theory">'+t['th']+'</div></div></div>')
    if ch_st:
        b.append('<details><summary>Lernschritte vorher / nachher</summary><div class="two"><div><div class="lab">Vorher</div>'+steps_html(o)+'</div><div><div class="lab">Nachher</div>'+steps_html(t)+'</div></div></details>')
    if neu: b.append(f'<details><summary>Neue Übungen ({len(neu)})</summary><ul class="ex">'+''.join(ex_html(e) for i,e in neu)+'</ul></details>')
    if nv: b.append(f'<details><summary>Neue Wortkarten ({len(nv)})</summary><ul class="ex">'+''.join('<li>'+E(json.dumps(v,ensure_ascii=False))+'</li>' for v in nv)+'</ul></details>')
    b.append('</section>'); body.append(''.join(b))
tpl=open(__file__.rsplit('/',1)[0]+'/vn-tpl.html',encoding='utf-8').read()
out=tpl.replace('{{NAV}}',''.join(nav)).replace('{{BODY}}',''.join(body)).replace('{{N}}',str(len(nav))).replace('{{NEU}}',str(tot['neu'])).replace('{{AUS}}',str(tot['aus'])).replace('{{V}}',str(tot['v']))
open('vorher-nachher.html','w',encoding='utf-8').write(out)
print(len(nav),tot,len(out))
