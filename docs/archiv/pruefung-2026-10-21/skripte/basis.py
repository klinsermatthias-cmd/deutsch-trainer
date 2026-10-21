import json,re,html,sys
exec(open('verben.py').read().split('out={}; probleme=[]')[0])
B=[('d01','machen','to make, to do','hat'),('d01','sein','to be','ist'),('d01','haben','to have','hat'),
('d02','sagen','to say, to tell','hat'),('d02','vereinbaren','to arrange, to agree on','hat'),('d02','verschieben','to postpone, to move','hat'),
('d03b','gehen','to go, to walk','ist'),('d03b','decken','to cover (den Tisch decken = to set the table)','hat'),('d03b','waschen','to wash','hat'),
('w03','brechen','to break','hat'),('w06','fahren','to go (by car, train, bike …), to drive','ist')]
out=[]
for tid,lem,en,aux in B:
    pr,_=table(lem,'Präsens'); pt,_=table(lem,'Präteritum'); pp=part2(lem)
    A=HAT if aux=='hat' else IST
    line=lambda fs:' · '.join(f'{PR[j]} {fs[j]}' for j in range(6))
    perf=' · '.join(f'{PR[j]} {A[j]} {pp}' for j in range(6))
    st=re.sub(r'(e?n)$','',lem)
    regel=pt[2] in (st+'te',st+'ete') and pp.endswith('t') and lem not in ('haben',)
    k='regelmäßig' if regel else 'unregelmäßig'
    s=f'{pr[2]} · {pt[2]} · {aux} {pp}'
    d={'k':k,'s':s,'f':['Präsens: '+line(pr),'Präteritum: '+line(pt),'Perfekt: '+perf]}
    if lem=='fahren': d['g']='ist gefahren (mit Auto, Zug, Rad …); hat … gefahren, wenn man ein Auto lenkt: Ich habe das Auto gefahren.'
    out.append((tid,[lem,en,d]))
    print(tid,lem,k,'|',s,'|',d['f'][0][:60])
json.dump(out,open('basis-neu.json','w'),ensure_ascii=False,indent=1)
