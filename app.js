
async function loadRoster(){
 const el=document.getElementById('roster');
 if(!el) return;
 const flights=await fetch('data/october.json').then(r=>r.json());
 flights.forEach(f=>{
  el.insertAdjacentHTML('beforeend',`<div class="flight"><div class="bar"></div><div class="info"><div class="date">${f.date}</div><div class="code">${f.flight}</div><div class="route">${f.from} → ${f.to}</div><div class="meta"><span>${f.aircraft}</span><span>Block ${f.block}</span></div></div></div>`);
 });
}
document.addEventListener('DOMContentLoaded',loadRoster);
