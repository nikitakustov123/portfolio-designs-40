// Русские слова длиннее английских: уменьшаем крупные заголовки, чтобы слова не рвались посередине
(function () {
  function broken(el) {
    var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), n, r = document.createRange();
    while ((n = w.nextNode())) {
      var re = /\S+/g, m;
      while ((m = re.exec(n.data))) {
        r.setStart(n, m.index); r.setEnd(n, m.index + m[0].length);
        var rects = r.getClientRects(), lines = 0, last = null;
        for (var i = 0; i < rects.length; i++) {
          if (rects[i].width < 1) continue;
          if (last === null || Math.abs(rects[i].top - last) > 2) { lines++; last = rects[i].top; }
        }
        if (lines > 1) return true;
      }
    }
    return false;
  }
  function fit() {
    var els = document.querySelectorAll('h1, h2');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (parseFloat(getComputedStyle(el).fontSize) < 28 || !el.offsetWidth) continue;
      el.style.fontSize = '';
      var k = 0;
      while (broken(el) && k++ < 30) {
        el.style.fontSize = (parseFloat(getComputedStyle(el).fontSize) * 0.95) + 'px';
      }
    }
  }
  function run() { fit(); if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
  window.addEventListener('load', function () { fit(); setTimeout(fit, 1200); });
  var t; window.addEventListener('resize', function () { clearTimeout(t); t = setTimeout(fit, 150); });
})();

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
