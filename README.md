# MikaelSalari.github.io

Personal website of **Dr. Mikael Ebrahimi Salari** — Software Engineer at Atlas Copco, PhD in Computer Science
(Mälardalen University), specializing in test automation for industrial PLC/embedded software.

## Structure

- `index.html` — main page (bio, experience, education, publications, awards, contact)
- `style.css` — styling (dark theme, responsive)
- `script.js` — small interactive behaviors (mobile nav, footer year)

## Live site

Hosted via GitHub Pages at https://mikaelsalari.github.io/

## Editing content

- Update text directly in `index.html` — each section (`#about`, `#experience`, `#education`,
  `#publications`, `#awards`, `#contact`) is clearly labeled.
- To add a new publication, copy a `.pub-item` block in the Publications section and edit the title,
  venue, date, description, and link.
- To add a new job or degree, copy a `.timeline-item` block in Experience or Education.
- Colors and fonts are controlled via CSS variables at the top of `style.css` (`:root { ... }`).

## Notes / things to double-check

- Verify the exact IEEE Xplore link/DOI for the COMPSAC 2025 paper (PyLC+) once fully indexed —
  a general IEEE Xplore link is used as a placeholder until then.
- Add a profile photo by placing an image (e.g. `photo.jpg`) in the repo and referencing it in the
  hero section if desired.
- Consider adding a Google Scholar / ORCID link in the Contact section once available.
- No email/phone was published on the public LinkedIn profile, so Contact currently links to
  LinkedIn and GitHub only — add an email button in `index.html` if wanted.
