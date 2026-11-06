/* mobile menu */
const links=document.getElementById('links');
document.getElementById('menu').onclick=()=>links.classList.toggle('open');
links.querySelectorAll('a').forEach(a=>a.onclick=()=>links.classList.remove('open'));

/* skill bars + counters animate jab screen par aayein */
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return; io.unobserve(e.target);
  const el=e.target;
  if(el.dataset.level) el.style.width=el.dataset.level+'%';
  if(el.dataset.count){
    const end=+el.dataset.count,suf=el.dataset.suffix||'';let n=0;
    const t=setInterval(()=>{n+=Math.max(1,Math.ceil(end/40));if(n>=end){n=end;clearInterval(t)}el.textContent=n+suf},30);
  }
}),{threshold:.4});
document.querySelectorAll('[data-level],[data-count]').forEach(el=>io.observe(el));

/* navbar active link on scroll */
const secs=[...document.querySelectorAll('section[id]')],navA=[...links.querySelectorAll('a')];
addEventListener('scroll',()=>{
  const y=scrollY+120;let cur=secs[0].id;
  secs.forEach(s=>{if(s.offsetTop<=y)cur=s.id});
  navA.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur));
},{passive:true});