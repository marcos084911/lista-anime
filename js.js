// ── TOP DATA ──
const TOP=[
  {n:"Made in Abyss",g:"Aventura · Dark Fantasy",c:"#e63946",up:0,img:"https://m.media-amazon.com/images/S/pv-target-images/acf77e7193251c237654b4ab7a3f83720d8703a416927e8d38a5c55ca0883898._SX1080_FMjpg_.jpg"},
  {n:"Seto no Hanayome",g:"Comédia · Romance",c:"#4cc9f0",up:0,img:"https://m.media-amazon.com/images/M/MV5BY2NmYjk1Y2EtMjNhZi00ZDVjLTg4YzAtZDA5MGY1NGYxMDIxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"},
  {n:"Vinland Saga",g:"Ação · Histórico",c:"#f4c542",up:0,img:"https://m.media-amazon.com/images/M/MV5BNDA3MGNmZTEtMzFiMy00ZmViLThhNmQtMjQ4ZDc5MDEyN2U1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"},
  {n:"Clannad: After Story",g:"Romance · Drama",c:"#ff7eb3",up:0,img:"https://m.media-amazon.com/images/I/81R8HeREVwL._AC_UF894,1000_QL80_.jpg"},
  {n:"Re:Zero",g:"Isekai · Fantasia",c:"#39ff14",up:0,img:"https://cdn.myanimelist.net/images/anime/11/79410.jpg"},
  {n:"Angel Beats!",g:"Drama · Sobrenatural",c:"#ff7eb3",up:0,img:"https://m.media-amazon.com/images/M/MV5BN2NlOWI5OTMtODRhZi00NjY3LTljZTUtYTQwZTMxOTBjNzE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"},
  {n:"Frieren: Beyond Journey's End",g:"Fantasia · Slice of Life",c:"#a07fff",up:0,img:"https://myanimelist.net/images/anime/1015/138006.jpg"},
  {n:"Shigatsu wa Kimi no Uso",g:"Música · Romance",c:"#ff7eb3",up:0,img:"https://myanimelist.net/images/anime/1405/143284.jpg"},
  {n:"Bocchi the Rock!",g:"Música · Slice of Life",c:"#39ff14",up:0,img:"https://m.media-amazon.com/images/I/81ScRXWN6DL._AC_UF1000,1000_QL80_.jpg"},
  {n:"Steins;Gate",g:"Sci-Fi · Thriller",c:"#f4c542",up:0,img:"https://m.media-amazon.com/images/M/MV5BZjI1YjZiMDUtZTI3MC00YTA5LWIzMmMtZmQ0NTZiYWM4NTYwXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"},
  {n:"Arknights: Perish in Frost",g:"Ação · Dark Fantasy",c:"#e63946",up:0,img:"https://myanimelist.net/images/anime/1644/128406.jpg"},
  {n:"Vivy: Fluorite Eye's Song",g:"Sci-Fi · Musical",c:"#4cc9f0",up:0,img:"https://m.media-amazon.com/images/M/MV5BNjA1MzlhOWEtYmQ1OC00MTUwLTliZDQtNGRlYmE4ZTVmMWQxXkEyXkFqcGc@._V1_.jpg"},
  {n:"Sayonara no Asa ni Yakusoku no Hana wo Kazarou",g:"Drama · Fantasia",c:"#4cc9f0",up:0,img:"https://myanimelist.net/images/anime/11/89556.jpg"},
  {n:"Dororo",g:"Ação · Histórico",c:"#e63946",up:0,img:"https://m.media-amazon.com/images/M/MV5BYzk2ODAyZjctNjExNS00ZDk0LWE1ZDMtZmIyNzI2NjNjNjllXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"},
  {n:"To Be Hero X",g:"Ação · Super-herói",c:"#f4c542",up:0,img:"https://preview.redd.it/to-be-hero-x-v0-mmibd27ecwue1.jpeg?auto=webp&s=bff6029e1f619c57ea605fdc23b0e7131188335a"},
  {n:"Hunter x Hunter",g:"Aventura · Combate",c:"#f4c542",up:0,img:"https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_QL75_UY281_CR4,0,190,281_.jpg"},
  {n:"Guimi Zhi Zhu",g:"Ação · Fantasia",c:"#a07fff",up:0,img:"https://m.media-amazon.com/images/M/MV5BMWE1ZWYwZGUtZjRmOS00NzUzLTlkZmUtMTEwMjNhNTVmNDIwXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"},
  {n:"Fate/Stay Night: Heaven's Feel",g:"Ação · Sobrenatural",c:"#a07fff",up:0,img:"https://upload.wikimedia.org/wikipedia/en/7/7c/Fate-stay_night_Heaven%27s_Feel_Trilogy_Poster.jpg"},
  {n:"Majo no Tabitabi",g:"Fantasia · Aventura",c:"#39ff14",up:0,img:"https://myanimelist.net/images/anime/1802/108501.jpg"},
  {n:"Uma Musume: Cinderella Gray",g:"Esportes · Drama",c:"#f4c542",up:0,img:"https://myanimelist.net/images/anime/1626/148097.jpg"},
  {n:"Maoujou de Oyasumi",g:"Comédia · Fantasia",c:"#ff7eb3",up:0,img:"https://static.wikia.nocookie.net/sleepy-princess/images/3/3b/Anime_Key_Visual.png/revision/latest/smart/width/250/height/250?cb=20200903041445"},
  {n:"Fullmetal Alchemist: Brotherhood",g:"Ação · Fantasia",c:"#e63946",up:0,img:"https://cdn.myanimelist.net/images/anime/1223/96541.jpg"},
  {n:"Somali to Mori no Kamisama",g:"Aventura · Slice of Life",c:"#39ff14",up:0,img:"https://m.media-amazon.com/images/M/MV5BMGI5NzcyYmItNjI1ZS00YWU4LWE1ODYtYmZhN2E1YmU1MTk4XkEyXkFqcGc@._V1_.jpg"},
  {n:"Tengen Toppa Gurren Lagann",g:"Mecha · Ação",c:"#e63946",up:0,img:"https://m.media-amazon.com/images/M/MV5BMGJlODA2ZmItOTRiZS00NWM5LWJlNTQtYzI5MTNiZjA2MGFjXkEyXkFqcGc@._V1_.jpg"},
  {n:"Fumetsu no Anata e",g:"Drama · Aventura",c:"#4cc9f0",up:0,img:"https://myanimelist.net/images/anime/1880/118484.jpg"},
  {n:"86 -Eighty Six-",g:"Sci-Fi · Guerra",c:"#e63946",up:0,img:"https://m.media-amazon.com/images/M/MV5BOWNmY2IzOGItMmQyNy00ZTM0LThiNjItODM3YzdkYjRlNWU1XkEyXkFqcGc@._V1_.jpg"},
  {n:"BNA: Brand New Animal",g:"Ação · Kemono",c:"#f4c542",up:0,img:"https://m.media-amazon.com/images/M/MV5BMzUxMzAxYTMtMmYzOS00YzYyLWE2ZDUtYmQxZDhiNWIxNDNiXkEyXkFqcGc@._V1_.jpg"},
  {n:"Engage Kiss",g:"Ação · Comédia",c:"#ff7eb3",up:0,img:"https://myanimelist.net/images/anime/1464/111943.jpg"},
  {n:"Grimgar of Fantasy and Ash",g:"Isekai · Drama",c:"#a07fff",up:0,img:"https://m.media-amazon.com/images/M/MV5BMmUyNzNmMDEtNjYzYi00ZDcwLTg4NTQtZTUzYzBiZTYwNzYyXkEyXkFqcGc@._V1_.jpg"},
  {n:"Akiba Meido Sensou",g:"Comédia · Ação",c:"#e63946",up:0,img:"https://m.media-amazon.com/images/M/MV5BYzA5YmZlNzMtYjdlZC00ZDg0LTgyMjEtNTZhYTFmYzJkNTg1XkEyXkFqcGc@._V1_.jpg"},
];

(function buildTop(){
  const l=document.getElementById('tlist');
  TOP.forEach((a,i)=>{
    const r=i+1,rc=r===1?'gold':r===2?'silver':r===3?'bronze':'';
    const d=document.createElement('div');
    d.className='ti';d.style.setProperty('--ic',a.c);
    d.innerHTML=`
    <img src="${a.img}" style="width:52px;height:70px;object-fit:cover;border-radius:4px;flex-shrink:0;border:1px solid rgba(255,255,255,.08)" loading="lazy">
    <div class="ti-rank ${rc}">${r}</div>
    <div class="ti-info">
      <div class="ti-name">${a.n}${a.up?'<span class="ti-up">⬆ Subindo</span>':''}</div>
      <div class="ti-genre">${a.g}</div>
    </div>
    <div class="ti-num">${String(r).padStart(2,'0')}</div>`;
    l.appendChild(d);
  });
})();

// ── TABS ──
function show(id,el){
  document.querySelectorAll('.tab').forEach(t=>{t.classList.remove('on');t.style.display='none'});
  document.querySelectorAll('.ntab').forEach(t=>t.classList.remove('on'));
  const t=document.getElementById('tab-'+id);
  t.style.display=(id==='inicio')?'flex':'block';
  requestAnimationFrame(()=>t.classList.add('on'));
  if(el)el.classList.add('on');
  window.scrollTo({top:0,behavior:'smooth'});
}

// ── SEARCH & FILTER ──
let activeChip='todos';

function doSearch(v){
  v=v.toLowerCase().trim();
  document.getElementById('srch').value=v;
  applyFilter(v,activeChip);
}
function clearSrch(){
  document.getElementById('srch').value='';
  applyFilter('',activeChip);
}
function filterChip(g,el){
  activeChip=g;
  document.querySelectorAll('.chip').forEach(c=>c.classList.remove('on'));
  el.classList.add('on');
  applyFilter(document.getElementById('srch').value.toLowerCase().trim(),g);
}
function applyFilter(txt,genre){
  let any=false;
  document.querySelectorAll('#gbox .gblock').forEach(block=>{
    const bg=block.dataset.g||'';
    const matchGenre=genre==='todos'||bg.includes(genre);
    let blockVisible=false;
    block.querySelectorAll('.ac').forEach(card=>{
      const name=(card.dataset.name||'').toLowerCase();
      const tags=(card.dataset.tags||'').toLowerCase();
      const matchTxt=!txt||name.includes(txt)||tags.includes(txt);
      const matchCardGenre=genre==='todos'||tags.includes(genre);
      const show=matchTxt&&matchCardGenre&&matchGenre;
      card.style.display=show?'':'none';
      if(show)blockVisible=true;
    });
    block.style.display=blockVisible?'':'none';
    if(blockVisible)any=true;
  });
  document.getElementById('no-res').style.display=any?'none':'block';
}

// ── MAL STATS ──
(async()=>{
  try{
    const r=await fetch('https://api.jikan.moe/v4/users/XxT0DDyxX/statistics');
    const d=await r.json();
    document.getElementById('hc').textContent=d.data.anime.completed.toLocaleString('pt-BR');
    document.getElementById('hw').textContent=d.data.anime.watching.toLocaleString('pt-BR');
  }catch(e){}
})();