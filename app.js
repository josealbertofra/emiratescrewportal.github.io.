
async function loadRoster(){
 const el=document.getElementById('roster');
 if(!el) return;
 const flights=await fetch('data/october.json').then(r=>r.json());
 flights.forEach(f=>{
  el.insertAdjacentHTML('beforeend',`
   <div class="flight">
    <div class="bar"></div>
    <div class="day">${f.day}<br>${f.date}</div>
    <div style="flex:1">
      <div class="code">${f.flight}</div>
      <div class="route">${f.from} → ${f.to}</div>
      <div class="meta"><span>${f.aircraft}</span><span>Block ${f.block}<br>Duty ${f.duty}</span></div>
    </div>
    <div class="arrow">›</div>
   </div>`);
 });
}
document.addEventListener('DOMContentLoaded',loadRoster);
