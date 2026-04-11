const res=document.getElementById('res');
function run(){
let txt=(document.getElementById('input').value||'').toLowerCase();
let val=document.getElementById('value').value;
let out='Analysis:\n';

if(txt.includes('malloc')||txt.includes('free')) out+='- Memory allocation via libc\n';
if(txt.includes('printf')||txt.includes('scanf')) out+='- IO function usage\n';
if(txt.includes('syscall')) out+='- Syscall wrapper layer\n';
if(txt.includes('musl')||txt.includes('glibc')) out+='- libc implementation comparison\n';

if(val){
  out+='- Metric: '+val+'\n';
}

out+='- Analyze libc usage, performance, and system interaction\n';

res.innerText=out;
}