
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.site-header nav'),dialog=document.querySelector('dialog.lightbox'),dialogImg=dialog?.querySelector('img');
menu?.addEventListener('click',()=>{const open=nav?.classList.toggle('open')||false;menu.setAttribute('aria-expanded',String(open));});
document.addEventListener('click',event=>{const target=event.target.closest('[data-lightbox]');if(target&&dialog&&dialogImg){dialogImg.src=target.dataset.lightbox;dialogImg.alt=target.getAttribute('aria-label')||'资料大图';dialog.showModal();}if(event.target.closest('.site-header nav a')){nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false');}});
document.querySelector('.lightbox-close')?.addEventListener('click',()=>dialog?.close());
