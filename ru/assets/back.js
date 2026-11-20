// Ссылка на галерею и пометка «концепт-дизайн» на каждой странице
(function () {
  if (window.top !== window.self) return; // не показываем внутри превью-фреймов
  var pill = [
    'position:fixed', 'bottom:16px', 'z-index:2147483647',
    'font:600 13px/1.25 system-ui,-apple-system,Segoe UI,sans-serif',
    'padding:10px 15px', 'border-radius:999px', 'text-decoration:none',
    'color:#fff', 'background:rgba(20,20,24,.78)', 'backdrop-filter:blur(10px)',
    '-webkit-backdrop-filter:blur(10px)', 'border:1px solid rgba(255,255,255,.18)',
    'box-shadow:0 6px 24px rgba(0,0,0,.25)', 'letter-spacing:.01em'
  ].join(';');

  var back = document.createElement('a');
  back.href = '../../';
  back.textContent = '← Галерея';
  back.setAttribute('aria-label', 'Вернуться к галерее всех дизайнов');
  back.style.cssText = pill + ';left:16px';

  var note = document.createElement('div');
  note.setAttribute('role', 'note');
  note.style.cssText = pill + ';right:16px;max-width:calc(100vw - 150px);display:flex;align-items:center;gap:10px;font-weight:500';
  note.innerHTML = '<span><b>Концепт-дизайн</b> Никиты Кустова (nikitakustov123) — проекты, клиенты и цифры вымышлены.</span>';
  var close = document.createElement('button');
  close.type = 'button';
  close.textContent = '×';
  close.setAttribute('aria-label', 'Скрыть пометку');
  close.style.cssText = 'all:unset;cursor:pointer;font-size:18px;line-height:1;opacity:.7;padding:0 2px';
  close.onclick = function () { note.remove(); };
  note.appendChild(close);

  document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(back);
    document.body.appendChild(note);
  });
})();
