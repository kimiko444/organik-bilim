// ─── Language Switcher ────────────────────────────────────────────────────────
(function () {
  var lang = localStorage.getItem('lang') || 'tr';

  function apply(l) {
    var t = TRANSLATIONS[l];
    if (!t) return;

    // Replace all tagged elements
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    // Update the lang toggle button label
    var btn = document.getElementById('langToggle');
    if (btn) btn.textContent = l === 'tr' ? 'EN' : 'TR';

    // Keep <html lang> accurate
    document.documentElement.lang = l;

    localStorage.setItem('lang', l);
    lang = l;
  }

  // Apply stored (or default) language on every page load
  apply(lang);

  // Wire up the toggle button
  var btn = document.getElementById('langToggle');
  if (btn) {
    btn.addEventListener('click', function () {
      apply(lang === 'tr' ? 'en' : 'tr');
    });
  }
})();
