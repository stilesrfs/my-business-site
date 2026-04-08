// Shared nav and footer injected on every page
// Call initPage(activePageId) at bottom of each page

function initPage(activePage) {
  // ── NAV ──
  const pages = [
    { id: 'about',    label: 'About',          href: 'about.html' },
    { id: 'products', label: 'Products',        href: 'products.html' },
    { id: 'technology',label:'Technology',      href: 'technology.html' },
    { id: 'capture',  label: 'Carbon Capture',  href: 'capture.html' },
    { id: 'partners', label: 'Partners',        href: 'partners.html' },
    { id: 'contact',  label: 'Contact Us',      href: 'contact.html', cta: true },
  ];

  const navHTML = `
    <nav>
      <a class="nav-logo" href="index.html">E4 <span>ENERGY</span> SERVICES</a>
      <ul class="nav-links">
        ${pages.map(p => `
          <li><a href="${p.href}"
            class="${p.cta ? 'nav-cta' : ''}${p.id === activePage ? ' active' : ''}"
          >${p.label}</a></li>
        `).join('')}
      </ul>
    </nav>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // ── FOOTER ──
  const footerHTML = `
    <footer>
      <a class="footer-logo" href="index.html">E4 <span>ENERGY</span> SERVICES</a>
      <div class="footer-links">
        ${pages.filter(p=>!p.cta).map(p=>`<a href="${p.href}">${p.label}</a>`).join('')}
      </div>
      <div class="footer-copy">© 2024 E4 Energy Services, LLC. All rights reserved.</div>
    </footer>`;

  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // ── INTERSECTION REVEAL ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(22px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    observer.observe(el);
  });
}
