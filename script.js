document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const stylesheet = document.querySelector('link[rel="stylesheet"][href^="style.css"]');
if (stylesheet) {
  stylesheet.setAttribute('href', 'style.css?v=20261026-portrait320');
}

const portrait = document.querySelector('.hero-photo');
if (portrait) {
  Object.assign(portrait.style, {
    width: '320px',
    height: '320px',
    maxWidth: '100%',
    aspectRatio: '1 / 1',
    objectFit: 'contain',
    objectPosition: 'center center',
    padding: '8px',
    background: '#061314',
    flexShrink: '0'
  });
  const resizePortrait = () => {
    const availableWidth = portrait.parentElement.clientWidth - 48;
    const size = Math.min(320, availableWidth);
    portrait.style.width = `${size}px`;
    portrait.style.height = `${size}px`;
  };
  resizePortrait();
  window.addEventListener('resize', resizePortrait);
}

const eyebrow = document.querySelector('.hero .eyebrow');
if (eyebrow) {
  const atlasLink = document.createElement('a');
  atlasLink.href = 'https://www.atlascopco.com/';
  atlasLink.target = '_blank';
  atlasLink.rel = 'noopener noreferrer';
  atlasLink.textContent = 'Atlas Copco';
  eyebrow.replaceChildren(
    document.createTextNode('R&D Software Test Engineer at '),
    atlasLink,
    document.createTextNode(' · PhD in Computer Science')
  );
}
