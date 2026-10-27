'use strict';
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#indice');
const mobile = window.matchMedia('(max-width: 650px)');
function setMenu(open) {
  menu.setAttribute('aria-expanded', String(open));
  nav.dataset.collapsed = String(mobile.matches && !open);
}
if (menu && nav) {
  menu.hidden = false;
  setMenu(false);
  menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobile.matches && menu.getAttribute('aria-expanded') === 'true') { setMenu(false); menu.focus(); }
  });
  mobile.addEventListener('change', () => setMenu(false));
}
const copyButton = document.querySelector('#copy-phone');
const copyStatus = document.querySelector('#copy-status');
const fallback = document.querySelector('#copy-fallback');
if (copyButton) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText('644 926 757');
      fallback.hidden = true;
      copyStatus.textContent = 'Teléfono copiado: 644 926 757';
    } catch {
      fallback.hidden = false;
      const field = fallback.querySelector('input');
      field.focus(); field.select();
      copyStatus.textContent = 'Puedes copiar el número del campo seleccionado.';
    }
  });
}
document.querySelector('#year').textContent = String(new Date().getFullYear());
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); } });
  }, { threshold: 0.25 });
  document.querySelectorAll('.location').forEach(section => observer.observe(section));
}
