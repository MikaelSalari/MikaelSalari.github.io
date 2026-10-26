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

const reviewItems = [
  'Peer Reviewer — Elsevier, Journal of Computer Languages · September 2025',
  'Peer Reviewer — IEEE International Conference on Software Services Engineering (SSE 2025) · July 2025',
  'Peer Reviewer — Springer, Software and Systems Modeling (SoSyM) · August 2024',
  'Peer Reviewer — 17th IEEE International Conference on Service Operations and Logistics, and Informatics (SOLI 2023) · December 2023',
  'Peer Reviewer — 4th ACM/IEEE International Conference on Automation of Software Test (AST 2023) · May 2023',
  'Peer Reviewer — SecDevOps 2023: Notes on Software Engineering Methods and CyberSecurity in a DevOps Environment · December 2022',
  'Peer Reviewer — SEFM 2022 / SmartDelta Project book on Software Engineering and Formal Methods · September 2022'
];
const honorItems = [
  'Letter of Commendation — Deputy of Mashhad City Mayor in Human Resources Planning · July 2020',
  'Letter of Commendation for successful implementation of “The Spring House 98” city project — Mayor of Mashhad · June 2020',
  'Letter of Commendation — Deputy of Mashhad City Mayor in Finance and Logistics · December 2019',
  'Second Rank Winner — Creative City Competition, Municipality of Mashhad · October 2019',
  'Letter of Commendation — Mashhad City Director of Research and Statistics Office · August 2019',
  'Letter of Commendation for Successful Teamwork — Municipality of Mashhad · December 2018',
  'Second Place among Top IT Engineering Students (2016–17) — Islamic Azad University, Mashhad · January 2017'
];
const awardsColumns = document.querySelectorAll('#awards .two-col:first-of-type > div');
const replaceList = (column, items) => {
  const list = column?.querySelector('.plain-list');
  if (!list) return;
  list.replaceChildren(...items.map(text => {
    const item = document.createElement('li');
    item.textContent = text;
    return item;
  }));
};
replaceList(awardsColumns[0], reviewItems);
replaceList(awardsColumns[1], honorItems);

const contactSubtitle = document.querySelector('#contact .contact-inner > p');
if (contactSubtitle) {
  contactSubtitle.textContent = 'Let’s connect to exchange ideas on software quality, explore research collaborations, and tackle industrial test automation challenges.';
}

const contactIcons = {
  Email: '<rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m3 6 9 7 9-7" fill="none" stroke="currentColor" stroke-width="1.8"/>',
  LinkedIn: '<path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52zM7.93 18.75H4.98V9.2h2.95v9.55zM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42zM19 18.75h-2.95V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.76V9.2h2.83v1.3h.04c.39-.74 1.36-1.53 2.8-1.53 3 0 3.57 1.97 3.57 4.53v5.25z"/>',
  GitHub: '<path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5z"/>',
  'Google Scholar': '<path d="M12 0 0 9.75 4.1 13.1a8 8 0 1 1 15.8 0L24 9.75 12 0zm0 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"/>'
};
document.querySelectorAll('#contact .contact-links .btn').forEach(button => {
  const label = button.textContent.trim();
  if (!contactIcons[label] || button.querySelector('svg')) return;
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', '20');
  svg.setAttribute('height', '20');
  svg.setAttribute('fill', 'currentColor');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  svg.style.flexShrink = '0';
  svg.innerHTML = contactIcons[label];
  button.prepend(svg);
  Object.assign(button.style, {display: 'inline-flex', alignItems: 'center', gap: '10px'});
});
