async function loadRoster(){
  const res=await fetch('data/october.json');
  const flights=await res.json();
  const roster=document.getElementById('roster');
  roster.innerHTML='';
  flights.forEach(f=>{
    roster.innerHTML+=`
    <div class="card">
      <div class="flight">
        <div class="bar"></div>
        <div>
          <div class="date">${f.date}</div>
          <div class="route">${f.flight} ${f.route}</div>
          <div class="aircraft">${f.aircraft}</div>
        </div>
        <div class="arrow">›</div>
      </div>
    </div>`;
  });
}
document.querySelectorAll('.tabs button').forEach(btn=>{
  btn.onclick=()=>{
    document.querySelectorAll('.tabs button').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.page).classList.add('active');
  };
});
loadRoster();
