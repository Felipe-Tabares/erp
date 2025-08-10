(function () {
  const navToggleButton = document.querySelector('.nav-toggle');
  const siteNav = document.getElementById('site-nav');

  // Mobile menu toggle
  if (navToggleButton && siteNav) {
    function toggleNav() {
      const expanded = navToggleButton.getAttribute('aria-expanded') === 'true';
      navToggleButton.setAttribute('aria-expanded', String(!expanded));
      siteNav.classList.toggle('open', !expanded);
    }

    navToggleButton.addEventListener('click', toggleNav);

    siteNav.addEventListener('click', (ev) => {
      const target = ev.target;
      if (target instanceof Element && target.tagName === 'A') {
        navToggleButton.setAttribute('aria-expanded', 'false');
        siteNav.classList.remove('open');
      }
    });
  }

  // Active link handling based on body[data-page]
  const currentPage = document.body?.dataset?.page || '';
  const navLinks = Array.from(document.querySelectorAll('#site-nav a[data-page]'));
  navLinks.forEach((l) => l.removeAttribute('aria-current'));
  const active = navLinks.find((l) => l.getAttribute('data-page') === currentPage);
  if (active) active.setAttribute('aria-current', 'page');
})();


