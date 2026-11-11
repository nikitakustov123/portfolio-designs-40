// Маленькая плашка «Галерея» для возврата к списку всех дизайнов
(function () {
  if (window.top !== window.self) return; // не показываем внутри превью-фреймов
  var a = document.createElement('a');
  a.href = '../../';
  a.textContent = '← Галерея';
  a.setAttribute('aria-label', 'Вернуться к галерее всех дизайнов');
  a.style.cssText = [
    'position:fixed', 'left:16px', 'bottom:16px', 'z-index:2147483647',
    'font:600 13px/1 system-ui,-apple-system,Segoe UI,sans-serif',
    'padding:11px 15px', 'border-radius:999px', 'text-decoration:none',
    'color:#fff', 'background:rgba(20,20,24,.72)', 'backdrop-filter:blur(10px)',
    '-webkit-backdrop-filter:blur(10px)', 'border:1px solid rgba(255,255,255,.18)',
    'box-shadow:0 6px 24px rgba(0,0,0,.25)', 'letter-spacing:.01em'
  ].join(';');
  document.addEventListener('DOMContentLoaded', function () { document.body.appendChild(a); });
})();
