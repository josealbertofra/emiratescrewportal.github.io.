
document.addEventListener('DOMContentLoaded',async()=>{
 const r=document.getElementById('roster');
 if(r){
  const flights=await fetch('data/october.json').then(x=>x.json());
  flights.forEach(f=>{
   r.insertAdjacentHTML('beforeend',`
    <div class="flight">
      <div class="bar"></div>
      <div class="left">${f.day}<br>${f.date}</div>
      <div style="flex:1">
        <div class="code">${f.flight}</div>
        <div class="route">${f.from} → ${f.to}</div>
        <div class="meta"><span>${f.aircraft}</span><span>Block ${f.block}<br>Duty ${f.duty}</span></div>
      </div>
      <div class="arrow">›</div>
    </div>`);
  });
 }
});
