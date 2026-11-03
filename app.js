"use strict";
const projects = [
  {
    "id": "vans",
    "name": "Vans — Comercial",
    "poster": "assets/thumb-vans.jpg",
    "video": "videos/Vans terminado.mp4",
    "tag": "Comercial",
    "tc": "",
    "g": "g3",
    "role": "Diseñador Multimedia",
    "year": "—",
    "type": "Comercial conceptual (no oficial)",
    "desc": "Pieza audiovisual conceptual, no encargada por Vans. Exploración de ritmo, montaje e identidad visual aplicada a contenido de producto.",
    "tags": [
      "Video",
      "Edición audiovisual",
      "Diseño multimedia"
    ],
    "categories": [
      "motion",
      "editing"
    ],
    "client": false,
    "label": "Ejercicio conceptual"
  },
  {
    "id": "airmax-v1",
    "name": "Air Max — Animación",
    "video": "videos/Airmax v1.mp4",
    "tag": "Motion",
    "tc": "",
    "g": "g2",
    "role": "Diseñador Multimedia",
    "year": "2026",
    "type": "Animación de producto conceptual",
    "desc": "Ejercicio audiovisual de animación de producto inspirado en Air Max. Proyecto conceptual no oficial.",
    "tags": [
      "Motion Graphics",
      "Animación de producto",
      "Diseño multimedia"
    ],
    "categories": [
      "motion"
    ],
    "client": false,
    "label": "Ejercicio conceptual",
    "poster": "assets/thumb-airmax-v1.jpg"
  },
  {
    "id": "mojito",
    "name": "Hardrockexpert — Mojito",
    "video": "videos/Mojito v3.mp4",
    "poster": "assets/thumb-mojito.jpg",
    "tag": "Cliente",
    "client": true,
    "categories": [
      "clients",
      "editing"
    ],
    "label": "Trabajo para cliente",
    "type": "Contenido publicitario",
    "desc": "Pieza publicitaria para promocionar el cóctel Mojito en lata de Hardrockexpert Cocktails.",
    "role": "Edición audiovisual · Diseño visual",
    "year": "2023",
    "tags": [
      "Edición audiovisual",
      "Diseño visual",
      "Premiere Pro",
      "After Effects"
    ]
  },
  {
    "id": "compromiso",
    "name": "MasHumanos — Compromiso",
    "video": "videos/Compromiso comp.mp4",
    "poster": "assets/thumb-compromiso.jpg",
    "tag": "Cliente",
    "client": true,
    "categories": [
      "clients",
      "editing"
    ],
    "label": "Trabajo para cliente",
    "type": "Comunicación interna",
    "desc": "Edición y diseño visual para comunicación interna de MasHumanos.",
    "role": "Edición audiovisual · Diseño visual",
    "year": "2022–2024",
    "tags": [
      "Edición audiovisual",
      "Diseño visual",
      "Premiere Pro",
      "After Effects"
    ]
  },
  {
    "id": "sonora",
    "name": "AirPods — Motion",
    "poster": "assets/thumb-sonora.jpg",
    "video": "videos/airpods.mp4",
    "tag": "Video",
    "tc": "00:00:06:20",
    "g": "g2",
    "role": "Diseñador Multimedia",
    "year": "—",
    "type": "Video conceptual",
    "desc": "Ejercicio conceptual AirPods. Realizado en After Effects.",
    "tags": [
      "Video",
      "After Effects"
    ],
    "categories": [
      "motion"
    ],
    "client": false,
    "label": "Ejercicio conceptual"
  },
  {
    "id": "open-deportes",
    "name": "Open Deportes — Animación",
    "video": "videos/Open Deportes.mp4",
    "tag": "Motion",
    "tc": "",
    "g": "g5",
    "role": "Diseñador Multimedia",
    "year": "2026",
    "type": "Animación deportiva",
    "desc": "Pieza de apertura deportiva con animación y edición audiovisual.",
    "tags": [
      "Motion Graphics",
      "Animación",
      "Edición audiovisual"
    ],
    "categories": [
      "motion",
      "editing"
    ],
    "client": false,
    "label": "Proyecto personal",
    "poster": "assets/thumb-open-deportes.jpg"
  },
  {
    "id": "reel",
    "name": "Amazon — Motion",
    "poster": "assets/thumb-reel.jpg",
    "video": "videos/amazon-video.mp4",
    "tag": "Motion",
    "tc": "00:00:12:04",
    "g": "g5",
    "role": "Motion Designer",
    "year": "2025",
    "type": "Motion graphics conceptual",
    "desc": "Ejercicio conceptual de motion graphics realizado en After Effects.",
    "tags": [
      "Motion",
      "After Effects"
    ],
    "categories": [
      "motion"
    ],
    "client": false,
    "label": "Ejercicio conceptual"
  },
  {
    "id": "einstein",
    "name": "Einstein — Documental",
    "video": "videos/Documental Einstein final.mp4",
    "tag": "Documental",
    "tc": "",
    "g": "g6",
    "role": "Diseñador Multimedia",
    "year": "—",
    "type": "Documental audiovisual",
    "desc": "Documental audiovisual sobre Albert Einstein. Proyecto de edición y narrativa documental.",
    "tags": [
      "Documental",
      "Edición audiovisual",
      "Diseño multimedia"
    ],
    "categories": [
      "editing"
    ],
    "client": false,
    "label": "Proyecto personal",
    "poster": "assets/thumb-einstein.jpg"
  },
  {
    "id": "briefly",
    "name": "Nike — Comercial",
    "poster": "assets/thumb-briefly.jpg",
    "video": "videos/nike-comercial.mp4",
    "tag": "Comercial",
    "tc": "00:00:05:08",
    "g": "g1",
    "role": "Diseñador Multimedia",
    "year": "—",
    "type": "Comercial conceptual",
    "desc": "Ejercicio conceptual Nike. Realizado en After Effects.",
    "tags": [
      "Comercial",
      "After Effects"
    ],
    "categories": [
      "motion",
      "editing"
    ],
    "client": false,
    "label": "Ejercicio conceptual"
  },
  {
    "id": "audiovisual",
    "name": "Pablo Escobar — Documental",
    "poster": "assets/thumb-audiovisual.jpg",
    "video": "videos/pablo-escobar-documental.mp4",
    "tag": "Documental",
    "tc": "00:00:20:13",
    "g": "g6",
    "role": "Diseñador Multimedia",
    "year": "—",
    "type": "Documental",
    "desc": "Proyecto documental sobre Pablo Escobar. Edición y diseño audiovisual realizados en After Effects.",
    "tags": [
      "Documental",
      "After Effects"
    ],
    "categories": [
      "editing"
    ],
    "client": false,
    "label": "Proyecto personal"
  },
  {
    "id": "passion",
    "name": "Hardrockexpert — Passion Fruit",
    "video": "videos/Passion fruit.mp4",
    "poster": "assets/thumb-passion.jpg",
    "tag": "Cliente",
    "client": true,
    "categories": [
      "clients",
      "editing"
    ],
    "label": "Trabajo para cliente",
    "type": "Contenido publicitario",
    "desc": "Edición y diseño visual de contenido publicitario para Hardrockexpert Cocktails.",
    "role": "Edición audiovisual · Diseño visual",
    "year": "2023",
    "tags": [
      "Edición audiovisual",
      "Diseño visual",
      "Premiere Pro",
      "After Effects"
    ]
  },
  {
    "id": "colada",
    "name": "Hardrockexpert — Piña Colada",
    "video": "videos/Piña colada .mp4",
    "poster": "assets/thumb-colada.jpg",
    "tag": "Cliente",
    "client": true,
    "categories": [
      "clients",
      "editing"
    ],
    "label": "Trabajo para cliente",
    "type": "Contenido publicitario",
    "desc": "Pieza audiovisual para promocionar Piña Colada de Hardrockexpert Cocktails.",
    "role": "Edición audiovisual · Diseño visual",
    "year": "2023",
    "tags": [
      "Edición audiovisual",
      "Diseño visual",
      "Premiere Pro",
      "After Effects"
    ]
  }
];
// Curated order: product motion, concept films and commissioned work.
const editorialOrder = ['airmax-v1','vans','mojito','compromiso','sonora','open-deportes','reel','einstein','briefly','audiovisual','passion','colada'];
projects.sort((a,b) => editorialOrder.indexOf(a.id)-editorialOrder.indexOf(b.id));
const $ = (id) => document.getElementById(id);
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
const saveData = navigator.connection?.saveData || false;
const mediaPath = (path) => path.split('/').map(encodeURIComponent).join('/');
const grid = $('project-grid');
const dialog = $('project-dialog');
const player = $('project-player');
const heroVideo = $('hero-video');
let filter = 'all', expanded = false, activeId = 'vans', dialogId = null, previousFocus = null;
let heroPlaying = false, heroShouldResume = false;
const filtered = () => projects.filter(p => filter === 'all' || p.categories.includes(filter));
const stopCardVideos = () => grid.querySelectorAll('.hover-preview').forEach(v => { v.pause(); v.removeAttribute('src'); v.load(); v.remove(); });
function renderProjects() {
  stopCardVideos();
  const list = filtered();
  const visible = expanded ? list : list.slice(0, 6);
  grid.replaceChildren(...visible.map((p, i) => {
    const article = document.createElement('article');
    article.className = 'project-card';
    article.style.animationDelay = `${Math.min(i, 5) * 35}ms`;
    const button = document.createElement('button');
    button.className = 'project-button';
    button.dataset.project = p.id;
    button.setAttribute('aria-label', `Ver ${p.name}`);
    // Project data is maintained locally; names and paths never come from visitor input.
    button.innerHTML = `<div class="project-visual"><div class="thumbnail-fallback" aria-hidden="true"><span>${p.client ? 'CLIENT WORK' : 'MOTION / AUDIOVISUAL'}</span>${p.name.split(' — ')[0]}</div><img src="${mediaPath(p.poster)}" alt="${p.name}" loading="lazy" width="960" height="580"><span class="project-badge">${p.label.toUpperCase()}</span><span class="project-action" aria-hidden="true">↗</span></div><div class="project-meta"><div><h3>${p.name}</h3><p>${p.client ? p.type : p.tag === 'Documental' ? 'Documental · Edición audiovisual' : 'Motion graphics · Edición'}</p></div><span>${String(i+1).padStart(2,'0')}</span></div>`;
    button.querySelector('img').addEventListener('error', e => { e.currentTarget.hidden = true; });
    if (finePointer.matches && !reducedMotion.matches && !saveData) {
      let hoverTimer = null;
      const visual = button.querySelector('.project-visual');
      button.addEventListener('pointerenter', () => {
        hoverTimer = setTimeout(() => {
          if (dialog.open || visual.querySelector('video')) return;
          const v = document.createElement('video');
          v.className = 'hover-preview'; v.muted = true; v.loop = true; v.playsInline = true;
          v.setAttribute('aria-hidden','true'); v.tabIndex = -1; v.src = mediaPath(p.video);
          v.addEventListener('playing', () => v.classList.add('ready'), {once:true});
          visual.append(v); v.play().catch(() => v.remove());
        }, 220);
      });
      button.addEventListener('pointerleave', () => {
        clearTimeout(hoverTimer);
        const v = visual.querySelector('video');
        if (v) { v.pause(); v.removeAttribute('src'); v.load(); v.remove(); }
      });
    }
    article.append(button);
    const notes = document.createElement('details');
    notes.className = 'project-notes';
    notes.innerHTML = `<summary><span>Sobre este proyecto</span><span class="detail-icon" aria-hidden="true">＋</span></summary><div class="project-note-content"><p>${p.desc}</p><dl><div><dt>MI ROL</dt><dd>${p.role}</dd></div><div><dt>DISCIPLINAS</dt><dd>${p.tags.join(' · ')}</dd></div></dl><button data-project="${p.id}" class="note-watch">Ver película <span aria-hidden="true">↗</span></button></div>`;
    article.append(notes);
    return article;
  }));
  $('project-count').textContent = `${list.length} PROYECTO${list.length === 1 ? '' : 'S'}`;
  $('shown-count').textContent = `${String(visible.length).padStart(2,'0')} / ${String(list.length).padStart(2,'0')}`;
  $('show-more').hidden = list.length <= 6;
  $('show-more').innerHTML = expanded ? 'Mostrar menos <span aria-hidden="true">−</span>' : 'Ver todos los proyectos <span aria-hidden="true">＋</span>';
}
document.querySelectorAll('[data-filter]').forEach(b => b.addEventListener('click', () => {
  filter = b.dataset.filter; expanded = false;
  document.querySelectorAll('[data-filter]').forEach(x => { const active = x === b; x.classList.toggle('active',active); x.setAttribute('aria-pressed',String(active)); });
  renderProjects();
}));
$('show-more').addEventListener('click', () => {
  expanded = !expanded; renderProjects();
  if (!expanded) $('proyectos').scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth'});
});
function setHeroState(playing) {
  heroPlaying = playing;
  $('preview-toggle').innerHTML = playing ? 'Pausar <span aria-hidden="true">Ⅱ</span>' : 'Reproducir <span aria-hidden="true">▶</span>';
  $('preview-toggle').setAttribute('aria-label',playing?'Pausar vista previa':'Reproducir vista previa');
  $('preview-toggle').setAttribute('aria-pressed',String(playing));
}
async function playHero() {
  try { await heroVideo.play(); setHeroState(true); } catch { setHeroState(false); }
}
function pauseHero() { heroVideo.pause(); setHeroState(false); }
function selectHero(id) {
  const p = projects.find(p => p.id === id); if (!p) return;
  const resume = heroPlaying;
  activeId = id; pauseHero();
  heroVideo.src = mediaPath(p.video); heroVideo.poster = mediaPath(p.poster);
  heroVideo.setAttribute('aria-label',`Vista previa del proyecto ${p.name}`);
  const choices = ['vans','sonora','reel'];
  $('hero-number').textContent = `0${choices.indexOf(id)+1} / 03`;
  $('hero-title').textContent = p.name.split(' — ')[0];
  $('hero-kind').textContent = p.type.replace(' (no oficial)','');
  $('hero-open').setAttribute('aria-label',`Ver proyecto ${p.name} con sonido`);
  document.querySelectorAll('[data-hero]').forEach(b => { const selected = b.dataset.hero === id; b.classList.toggle('selected',selected); b.setAttribute('aria-pressed',String(selected)); });
  if (resume && !reducedMotion.matches) playHero();
}
document.querySelectorAll('[data-hero]').forEach(b => b.addEventListener('click', () => selectHero(b.dataset.hero)));
$('preview-toggle').addEventListener('click', () => heroPlaying ? pauseHero() : playHero());
heroVideo.addEventListener('pause', () => setHeroState(false));
heroVideo.addEventListener('play', () => setHeroState(true));
function openProject(id) {
  const p = projects.find(p => p.id === id); if (!p) return;
  if (!dialog.open) { previousFocus = document.activeElement; heroShouldResume = heroPlaying; pauseHero(); dialog.showModal(); document.body.classList.add('modal-open'); }
  stopCardVideos(); dialogId = id;
  player.pause(); player.removeAttribute('src');
  player.poster = mediaPath(p.poster); player.src = mediaPath(p.video);
  player.setAttribute('aria-label',p.name); player.load();
  $('video-error').hidden = true; $('video-direct').href = mediaPath(p.video);
  $('modal-category').textContent = p.client ? 'TRABAJO PARA CLIENTE' : p.label.toUpperCase();
  $('modal-label').textContent = p.year === '—' ? 'PORTFOLIO AUDIOVISUAL' : `PORTFOLIO / ${p.year}`;
  $('modal-title').textContent = p.name; $('modal-description').textContent = p.desc;
  $('modal-role').textContent = p.role; $('modal-type').textContent = p.type;
  $('modal-tags').replaceChildren(...p.tags.map(t => { const span = document.createElement('span'); span.textContent = t; return span; }));
  const list = filtered(), position = list.findIndex(p => p.id === id);
  $('modal-position').textContent = `${String((position < 0 ? projects.findIndex(p=>p.id===id) : position)+1).padStart(2,'0')} / ${String(position < 0 ? projects.length : list.length).padStart(2,'0')}`;
  player.play().catch(() => {});
}
player.addEventListener('error', () => { $('video-error').hidden = !player.getAttribute('src'); });
document.addEventListener('click', e => { const b = e.target.closest('[data-project]'); if (b) openProject(b.dataset.project); });
$('hero-open').addEventListener('click', () => openProject(activeId));
$('close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) { const r=dialog.getBoundingClientRect(); if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom) dialog.close(); } });
dialog.addEventListener('close', () => {
  player.pause(); player.removeAttribute('src'); player.load(); document.body.classList.remove('modal-open'); dialogId = null;
  previousFocus?.focus({preventScroll:true});
  if (heroShouldResume && !document.hidden && heroInView) playHero();
  else if (heroShouldResume) resumeOnView = true;
});
function navigateProject(direction) {
  let list = filtered(); if (!list.some(p => p.id === dialogId)) list = projects;
  const i = list.findIndex(p => p.id === dialogId);
  openProject(list[(i+direction+list.length)%list.length].id);
}
$('previous-project').addEventListener('click', () => navigateProject(-1));
$('next-project').addEventListener('click', () => navigateProject(1));
dialog.addEventListener('keydown', e => { if (e.target === player) return; if(e.key==='ArrowRight'){e.preventDefault();navigateProject(1)}if(e.key==='ArrowLeft'){e.preventDefault();navigateProject(-1)} });
$('copy-email').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText('pablo.perezpetit@gmail.com'); $('copy-status').textContent='Mail copiado. ¡Hablemos!'; }
  catch { $('copy-status').textContent='Podés escribir a pablo.perezpetit@gmail.com o tocar el enlace.'; }
});
function updateClock() { $('local-time').textContent = new Intl.DateTimeFormat('es-AR',{timeZone:'America/Argentina/Buenos_Aires',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date()); }
updateClock(); setInterval(updateClock,60000); $('year').textContent = new Date().getFullYear();
let scrollTick = false;
window.addEventListener('scroll', () => { if(scrollTick)return; scrollTick=true;requestAnimationFrame(()=>{const d=document.documentElement;const max=d.scrollHeight-d.clientHeight;document.querySelector('.reading-progress').style.width=`${max>0?d.scrollTop/max*100:0}%`;scrollTick=false;}); },{passive:true});
new IntersectionObserver(entries => { entries.forEach(e => { if(e.isIntersecting) document.querySelectorAll('nav a').forEach(a => a.classList.toggle('current',a.hash===`#${e.target.id}`)); }); }, {rootMargin:'-20% 0px -50% 0px'}).observe($('proyectos'));
const navObserver = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('current',a.hash===`#${e.target.id}`))}),{rootMargin:'-20% 0px -50% 0px'});
[$('inicio'),$('sobre-mi'),$('contacto')].forEach(s=>navObserver.observe(s));
let heroInView = true, resumeOnView = false;
new IntersectionObserver(entries=>{
 heroInView=entries[0].isIntersecting;
 if(!heroInView){resumeOnView=heroPlaying;pauseHero();}
 else if(resumeOnView&&!dialog.open&&!document.hidden){resumeOnView=false;playHero();}
},{threshold:.08}).observe(heroVideo);
document.addEventListener('visibilitychange',()=>{
 if(document.hidden){resumeOnView=heroPlaying;pauseHero();player.pause();stopCardVideos();}
 else if(resumeOnView&&heroInView&&!dialog.open){resumeOnView=false;playHero();}
});
reducedMotion.addEventListener('change',()=>{if(reducedMotion.matches){pauseHero();stopCardVideos();}});
renderProjects();
if (!reducedMotion.matches && !saveData) playHero();

// The film controls follow the selected preview without forcing a slideshow.
function updateFilmProgress() {
 const duration = heroVideo.duration;
 const current = heroVideo.currentTime || 0;
 const format = n => `${String(Math.floor(n/60)).padStart(2,'0')}:${String(Math.floor(n%60)).padStart(2,'0')}`;
 $('film-progress-fill').style.width = `${Number.isFinite(duration)&&duration>0?current/duration*100:0}%`;
 $('hero-time').textContent = `${format(current)} / ${Number.isFinite(duration)?format(duration):'00:00'}`;
}
heroVideo.addEventListener('timeupdate',updateFilmProgress);
heroVideo.addEventListener('loadedmetadata',updateFilmProgress);
heroVideo.addEventListener('emptied',updateFilmProgress);
const heroChoices = [...document.querySelectorAll('[data-hero]')];
heroChoices.forEach((button,index) => button.addEventListener('keydown',event=>{
 if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
 event.preventDefault();
 const next = event.key==='Home'?0:event.key==='End'?heroChoices.length-1:(index+(event.key==='ArrowRight'?1:-1)+heroChoices.length)%heroChoices.length;
 heroChoices[next].focus(); heroChoices[next].click();
}));
