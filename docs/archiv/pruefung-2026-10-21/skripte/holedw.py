import os,subprocess,time,urllib.parse,sys
words=open(sys.argv[1]).read().split(); kind=sys.argv[2]  # flexion | wb
os.makedirs('dw',exist_ok=True)
for w in words:
    f=f'dw/{kind}-{w}.html'
    if os.path.exists(f) and os.path.getsize(f)>8000: continue
    url=('https://www.dwds.de/lemma/flexion/' if kind=='flexion' else 'https://www.dwds.de/wb/')+urllib.parse.quote(w)
    r=subprocess.run(['curl','-sL','--max-time','30','-A','Mozilla/5.0 (Lernapp-Pruefung)','-o',f,'-w','%{http_code}',url],capture_output=True,text=True)
    if r.stdout!='200': print(w,r.stdout,flush=True)
    time.sleep(1.2)
