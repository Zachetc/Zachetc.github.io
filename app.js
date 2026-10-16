const menuButton=document.querySelector('.menu-button');
const menu=document.querySelector('.desktop-nav');
function closeMenu(){if(!menuButton||!menu)return;menuButton.setAttribute('aria-expanded','false');menu.classList.remove('open');menuButton.textContent='Menu +';}
menuButton?.addEventListener('click',()=>{const isOpen=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!isOpen));menu.classList.toggle('open',!isOpen);menuButton.textContent=isOpen?'Menu +':'Close −';});
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.classList.contains('open')){closeMenu();menuButton.focus();}});
document.addEventListener('click',e=>{if(menu?.classList.contains('open')&&!e.target.closest('.site-header'))closeMenu();});
window.matchMedia('(min-width: 801px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
const filters=[...document.querySelectorAll('.filter')];
const cards=[...document.querySelectorAll('.project-card')];
filters.forEach(button=>button.addEventListener('click',()=>{filters.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));let count=0;cards.forEach(card=>{const show=button.dataset.filter==='all'||card.dataset.category===button.dataset.filter;card.hidden=!show;if(show)count++;});const label=document.querySelector('.filter-count');if(label)label.textContent=`${String(count).padStart(2,'0')} projects`; }));
document.querySelector('.copy-button')?.addEventListener('click',async e=>{const b=e.currentTarget;try{await navigator.clipboard.writeText('zamachee1@gmail.com');b.textContent='Email copied ✓';document.querySelector('#copy-status').textContent='Email address copied to clipboard.';setTimeout(()=>{b.textContent='Copy email address';},2500);}catch{b.textContent='zamachee1@gmail.com';document.querySelector('#copy-status').textContent='Select the email address to copy it.';}});
