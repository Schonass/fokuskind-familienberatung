/* Fokus Kind Familienberatung — minimales Verhalten
   Nur zwei Dinge: mobile Navigation und der Hairline-Zustand der Kopfzeile. */

(function () {
  'use strict';

  var masthead = document.querySelector('.masthead');
  var nav = document.getElementById('hauptnavigation');
  var toggle = document.querySelector('.nav__toggle');
  var labelOpen = 'Menü';
  var labelClose = 'Schliessen';

  /* --- Mobile Navigation ------------------------------------------------ */

  function setNav(open) {
    if (!nav || !toggle) return;
    nav.setAttribute('data-open', open ? 'true' : 'false');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    var text = toggle.querySelector('.nav__toggle-text');
    if (text) text.textContent = open ? labelClose : labelOpen;
  }

  if (toggle && nav) {
    setNav(false);

    toggle.addEventListener('click', function () {
      setNav(nav.getAttribute('data-open') !== 'true');
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.getAttribute('data-open') === 'true') {
        setNav(false);
        toggle.focus();
      }
    });

    /* Wird der Breakpoint überschritten, übernimmt wieder das Stylesheet. */
    var wide = window.matchMedia('(min-width: 60rem)');
    var reset = function (event) {
      if (event.matches) setNav(false);
    };
    if (wide.addEventListener) wide.addEventListener('change', reset);
    else if (wide.addListener) wide.addListener(reset);
  }

  /* --- Jahreszahl im Impressumsvermerk ---------------------------------- */

  var jahr = document.getElementById('jahr');
  if (jahr) jahr.textContent = String(new Date().getFullYear());

  /* --- Kopfzeile: Trennlinie erst beim Scrollen ------------------------- */

  if (masthead) {
    var update = function () {
      masthead.setAttribute('data-scrolled', window.scrollY > 8 ? 'true' : 'false');
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
  }
})();
