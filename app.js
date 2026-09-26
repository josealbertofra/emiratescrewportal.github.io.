
async function roster(){
 const el=document.getElementById('roster'); if(!el)return;
 const fs=await fetch('data/october.json').then(r=>r.json());
 fs.forEach(f=>el.insertAdjacentHTML('beforeend',`<div class="flight" onclick="location.href='pages/flight.html'"><div class="bar ${f.off?'off':''}"></div><div style="flex:1"><div class="date">${f.day} · ${f.date}</div><div class="code">${f.flight}</div><div class="route">${f.from} → ${f.to}</div><div class="meta"><span>${f.aircraft}</span><span>Block ${f.block}<br>Duty ${f.duty}</span></div></div><div style="color:#666;font-size:22px;padding-top:18px">›</div></div>`));
}
document.addEventListener('DOMContentLoaded',roster);
