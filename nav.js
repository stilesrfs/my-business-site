// E4 Energy Services — Shared Navigation & Footer
// Injects consistent nav and footer into every page

const NAV_LINKS = [
  { href: 'index.html', label: 'Home' },
  { href: 'about.html', label: 'About' },
  { href: 'products.html', label: 'Products' },
  { href: 'technology.html', label: 'Technology' },
  { href: 'emissions.html', label: 'Emissions Solutions' },
  { href: 'contact.html', label: 'Contact', cta: true },
];

const FOOTER_LINKS = {
  Company: [
    { href: 'about.html', label: 'About E4' },
    { href: 'technology.html', label: 'Our Technology' },
    { href: 'contact.html', label: 'Careers' },
  ],
  Products: [
    { href: 'products.html#rod-packing', label: 'Zero Methane Rod Packing' },
    { href: 'products.html#ecc', label: 'Exhaust Carbon Capture' },
    { href: 'products.html#rotary', label: 'Rotary Scrubber' },
    { href: 'products.html#fuel', label: 'Fuel Stabilizer' },
  ],
  'Emissions Solutions': [
    { href: 'emissions.html#methane', label: 'Methane Reduction' },
    { href: 'emissions.html#carbon', label: 'Carbon Capture' },
    { href: 'emissions.html#compliance', label: 'Regulatory Compliance' },
  ],
};

function buildNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  return `
    <nav>
      <div class="nav-inner">
        <a class="nav-logo" href="index.html">
          <img src="e4-logo.png" alt="E4 Energy Services" onerror="this.style.display='none'">
          <div class="nav-logo-text">E4 <span>Energy</span> Services</div>
        </a>
        <ul class="nav-links">
          ${NAV_LINKS.map(l => `
            <li><a href="${l.href}" class="${l.href === currentPage ? 'active' : ''}${l.cta ? ' nav-cta' : ''}">${l.label}</a></li>
          `).join('')}
        </ul>
        <div class="nav-hamburger" onclick="toggleMobileNav()">
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  `;
}

function buildFooter() {
  return `
    <footer>
      <div class="footer-inner">
        <div class="footer-top">
          <div class="footer-brand">
            <img src="e4-logo.png" alt="E4 Energy Services">
            <p>E4 Energy Services, LLC delivers field-proven emissions reduction technology for the natural gas compression industry — combining patented innovation with practical field deployment.</p>
            <div class="footer-tagline">Powering Today. Building Tomorrow.</div>
          </div>
          ${Object.entries(FOOTER_LINKS).map(([title, links]) => `
            <div class="footer-col">
              <h4>${title}</h4>
              <ul>
                ${links.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} E4 Energy Services, LLC. All rights reserved.</span>
          <span>Dallas, TX · info@e4energyservices.com</span>
        </div>
      </div>
    </footer>
  `;
}

function toggleMobileNav() {
  const links = document.querySelector('.nav-links');
  if (links) {
    links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '68px';
    links.style.left = '0'; links.style.right = '0';
    links.style.background = 'var(--dark-navy)';
    links.style.padding = '1rem 2rem 1.5rem';
    links.style.borderBottom = '2px solid var(--navy)';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = buildNav();

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = buildFooter();

  // Scroll-based nav transparency
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
      nav.style.boxShadow = window.scrollY > 20
        ? '0 2px 20px rgba(0,0,0,0.3)'
        : 'none';
    }
  });
});
