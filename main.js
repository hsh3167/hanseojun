'use strict';
const menu = document.querySelector('.menu-toggle');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); document.querySelector('#navigation').classList.toggle('is-open', open); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') { menu.setAttribute('aria-expanded','false'); document.querySelector('#navigation').classList.remove('is-open'); } });
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
 document.querySelectorAll('[data-filter]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
 let count=0; document.querySelectorAll('[data-category]').forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; if(!card.hidden) count++; });
 document.querySelector('.album-count').textContent = count + '개의 앨범';
}));
const dialog = document.querySelector('#video-dialog');
document.querySelectorAll('[data-video]').forEach(button => button.addEventListener('click', () => {
 document.querySelector('#video-title').textContent = button.dataset.title;
 const frame = document.createElement('iframe'); frame.src = 'https://www.youtube-nocookie.com/embed/' + button.dataset.video + '?autoplay=1'; frame.title = button.dataset.title; frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen'; frame.allowFullscreen = true;
 dialog.querySelector('.video-frame').replaceChildren(frame);
 document.querySelector('#youtube-link').href = 'https://www.youtube.com/watch?v=' + button.dataset.video;
 dialog.showModal();
}));
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click',event => { if(event.target === dialog){ const r=dialog.getBoundingClientRect(); if(event.clientX<r.left || event.clientX>r.right || event.clientY<r.top || event.clientY>r.bottom) dialog.close(); }});
dialog.addEventListener('close', () => dialog.querySelector('.video-frame').replaceChildren());
