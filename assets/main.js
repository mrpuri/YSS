// Youth Singh Sabha — shared header, footer, nav and forms.
// Edit these once and every page updates.
const SITE = {
  name: "Youth Singh Sabha",
  nameGur: "ਯੂਥ ਸਿੰਘ ਸਭਾ",
  regLine: "Registered Society, Punjab · Reg. No. [  ]",
  phone: "+91 [00000 00000]",
  helpline: "+91 [00000 00000]",
  email: "info@[yoursite].org",
  address: "[Head office address], [City], Punjab [PIN]",
};

const DEPARTMENTS = [
  ["dharam-parchar", "Dharam Parchar"],
  ["sikhya", "Sikhya · Education"],
  ["nasha-mukt", "Nasha Mukt Punjab"],
  ["sehat", "Sehat · Health"],
  ["sewa", "Sewa & Bhalai"],
  ["khed", "Khed & Gatka"],
  ["rozgar", "Rozgar te Hunar"],
  ["vatavaran", "Vatavaran"],
  ["kaur-wing", "Kaur Wing"],
];

const NAV = [
  ["index.html", "Home"],
  ["about.html", "About"],
  ["departments.html", "Departments"],
  ["programmes.html", "Programmes"],
  ["get-involved.html", "Get Involved"],
  ["contact.html", "Contact"],
];

const brand = `
  <a class="brand" href="index.html" aria-label="${SITE.name} home">
    <span class="brand-mark" aria-hidden="true">☬</span>
    <span class="brand-text"><b>${SITE.name}</b><span>${SITE.nameGur}</span></span>
  </a>`;

function renderHeader() {
  const here = location.pathname.split("/").pop() || "index.html";
  const links = NAV.map(([href, label]) =>
    `<a href="${href}"${href === here ? ' class="active" aria-current="page"' : ""}>${label}</a>`).join("");
  return `
  <div class="topbar"><div class="wrap">
    <span>${SITE.regLine}</span>
    <span>Nasha Mukti Helpline: <strong><a href="tel:${SITE.helpline.replace(/[^+\d]/g, "")}">${SITE.helpline}</a></strong></span>
  </div></div>
  <header class="site-header"><div class="wrap">
    ${brand}
    <button class="nav-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
    <nav class="nav" aria-label="Main">${links}<a class="btn btn-primary" href="donate.html">Donate</a></nav>
  </div></header>`;
}

function renderFooter() {
  const year = new Date().getFullYear();
  return `
  <footer class="site-footer"><div class="wrap">
    <div class="footer-grid">
      <div>
        ${brand}
        <p>A registered youth society working across Punjab for Gurmat values, education, a drug-free youth, and sewa for all.</p>
        <p style="font-family:var(--gur);color:#ffc98a">ਨਾਨਕ ਨਾਮ ਚੜ੍ਹਦੀ ਕਲਾ, ਤੇਰੇ ਭਾਣੇ ਸਰਬੱਤ ਦਾ ਭਲਾ</p>
      </div>
      <div>
        <h4>Departments</h4>
        <ul>${DEPARTMENTS.map(([id, label]) => `<li><a href="departments.html#${id}">${label}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h4>Organisation</h4>
        <ul>
          <li><a href="about.html">About us</a></li>
          <li><a href="about.html#committee">Executive committee</a></li>
          <li><a href="about.html#transparency">Registration &amp; reports</a></li>
          <li><a href="programmes.html">Programmes &amp; events</a></li>
          <li><a href="get-involved.html">Become a member</a></li>
          <li><a href="get-involved.html#unit">Start a unit</a></li>
          <li><a href="donate.html">Donate</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li>${SITE.address}</li>
          <li><a href="tel:${SITE.phone.replace(/[^+\d]/g, "")}">${SITE.phone}</a></li>
          <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
          <li>Facebook · Instagram · YouTube · WhatsApp</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${year} ${SITE.name}. ${SITE.regLine}.</span>
      <span>Registered under the Societies Registration Act, 1860 <span class="ph">[confirm]</span></span>
    </div>
  </div></footer>`;
}

document.getElementById("site-header")?.insertAdjacentHTML("afterbegin", renderHeader());
document.getElementById("site-footer")?.insertAdjacentHTML("afterbegin", renderFooter());

// Mobile nav
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

// Forms: no backend yet. Show a confirmation and log the data.
// To go live, point each form's action at a form service (e.g. Google Forms, Formspree)
// or your own endpoint, and remove the preventDefault below.
document.querySelectorAll("form[data-demo]").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const ok = form.querySelector(".form-success");
    ok?.classList.add("show");
    form.reset();
    ok?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

// Donation amount picker
document.querySelectorAll(".amounts").forEach((group) => {
  const input = document.getElementById(group.dataset.target);
  group.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    group.querySelectorAll("button").forEach((x) => x.classList.toggle("on", x === b));
    if (input) input.value = b.dataset.v;
  });
});
