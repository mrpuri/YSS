# Youth Singh Sabha — website

Static site, no build step. Open `index.html`, or serve the folder:

```bash
python3 -m http.server 4180
```

- `STRUCTURE.md` — the proposed sitemap, departments and organisation structure
- `index.html`, `about.html`, `departments.html`, `programmes.html`, `get-involved.html`, `donate.html`, `contact.html`
- `assets/styles.css` — shared styles
- `assets/main.js` — shared header/footer (edit `SITE` at the top for phone, email, address, reg. no.), mobile nav, forms

Before going live:
1. Replace every yellow-highlighted `[placeholder]` with real details (search for `[`).
2. Only claim 80G / 12A / FCRA status if actually granted.
3. Connect the forms (`form[data-demo]`) to a backend such as Google Forms or Formspree.
4. Replace the patterned photo blocks (`.photo`) with real programme photos.
