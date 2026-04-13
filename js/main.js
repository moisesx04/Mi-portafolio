/* =============================================
   PORTFOLIO — main.js
   Para agregar un NUEVO PROYECTO: añade un
   objeto al array PROJECTS de abajo y listo.
   ============================================= */

// ─────────────────────────────────────────────
// 🗂️  PROYECTOS — Aquí defines todos tus sistemas
// ─────────────────────────────────────────────
const PROJECTS = [
  {
    id: "pureform",
    title: "PureForm",
    subtitle: "Sistema de Gestión de Formularios",
    description:
      "Una herramienta fácil de usar para crear y organizar formularios personalizados. " +
      "Permite ver resultados en tiempo real con gráficas, organizar clientes y " +
      "guardar toda la información de forma segura.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
             <rect x="3" y="3" width="18" height="18" rx="3"/>
             <path d="M8 9h8M8 13h6M8 17h4"/>
           </svg>`,
    color: "#6c63ff",
    status: "live",        // "live" | "wip" | "new" | "coming"
    featured: true,
    // Tecnologías con sus colores
    tech: [
      { name: "HTML5",       color: "#e34f26" },
      { name: "CSS3",        color: "#1572b6" },
      { name: "JavaScript",  color: "#f7df1e" },
      { name: "Firebase",    color: "#ffca28" },
      { name: "Firestore",   color: "#ffa000" },
      { name: "Chart.js",    color: "#ff6384" },
    ],
    features: [
      "Dashboard con gráficas en tiempo real",
      "Constructor de formularios drag-and-drop",
      "Formulario DS-160 de visa americana completo",
      "Autenticación Firebase + links únicos por cliente",
      "Exportación CSV de todas las respuestas",
      "Diseño fully responsive (mobile & desktop)",
    ],
    // Rutas relativas desde la carpeta PORTAFOLIOS al proyecto
    demoUrl: "https://moisesx04.github.io/Formulario/login.html",
    adminUrl: "https://moisesx04.github.io/Formulario/login.html",
    // Lenguajes principales (para el badge de idioma del proyecto)
    mainLang: "JavaScript + Firebase",
  },
  {
    id: "inventario",
    title: "Sistema de Inventario",
    subtitle: "Control y Gestión de Productos",
    description:
      "Un programa diseñado para llevar el control de productos en un negocio. " +
      "Ayuda a saber cuánto hay en inventario, organizar proveedores y " +
      "ver reportes claros sobre el movimiento de la mercancía.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
             <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/>
             <line x1="8" y1="18" x2="21" y2="18"/>
             <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/>
             <line x1="3" y1="18" x2="3.01" y2="18"/>
           </svg>`,
    color: "#00d4aa",
    status: "live",
    featured: false,
    tech: [
      { name: "HTML5",      color: "#e34f26" },
      { name: "CSS3",       color: "#1572b6" },
      { name: "JavaScript", color: "#f7df1e" },
      { name: "Firebase",   color: "#ffca28" },
    ],
    features: [
      "Control de stock en tiempo real",
      "Gestión de proveedores y categorías",
      "Reportes y estadísticas visuales",
      "Panel multi-usuario con roles y permisos",
    ],
    demoUrl: "https://moisesx04.github.io/sistema-de-inventario/",
    adminUrl: "https://moisesx04.github.io/sistema-de-inventario/",
    mainLang: "JavaScript + Firebase",
  },

  {
    id: "lavado-inteligente",
    title: "Sistema de Lavado Inteligente",
    subtitle: "Gestión Ejecutiva & Control de Nómina",
    description:
      "Una plataforma de alto rendimiento para la gestión de car wash. " +
      "Automatiza el cálculo de pagos por comisiones, genera tickets para WhatsApp " +
      "y ofrece visualización de datos en tiempo real para decisiones estratégicas.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
             <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v4c0 .6.4 1 1 1h2"/>
             <circle cx="7" cy="17" r="2"/>
             <path d="M9 17h6"/>
             <circle cx="17" cy="17" r="2"/>
           </svg>`,
    color: "#3b82f6",
    status: "new",
    featured: true,
    tech: [
      { name: "React",       color: "#61dafb" },
      { name: "TypeScript",  color: "#3178c6" },
      { name: "Vite",        color: "#646cff" },
      { name: "Recharts",    color: "#00c9ff" },
      { name: "Framer Motion", color: "#ff0055" },
    ],
    features: [
      "Dashboard dinámico con gráficas Recharts",
      "Liquidación automática de nómina por lavador",
      "Generación de tickets PDF y envío a WhatsApp",
      "Gestión de servicios con precios dinámicos",
      "Interfaz ultra-minimalista y responsive",
    ],
    demoUrl: "https://sistema-de-lavado.vercel.app",
    adminUrl: "https://sistema-de-lavado.vercel.app",
    mainLang: "React + TS",
  },
];

// ─────────────────────────────────────────────
// Badge helpers
// ─────────────────────────────────────────────
const STATUS_CONFIG = {
  live:   { label: "🟢 Activo",        cls: "badge--live"     },
  wip:    { label: "🔧 En desarrollo", cls: "badge--wip"      },
  new:    { label: "✨ Nuevo",          cls: "badge--new"      },
  coming: { label: "🔜 Próximamente",  cls: "badge--coming"   },
};

function buildBadges(project) {
  const s = STATUS_CONFIG[project.status] || STATUS_CONFIG.wip;
  let html = `<span class="badge ${s.cls}">${s.label}</span>`;
  if (project.featured) html += `<span class="badge badge--featured">⭐ Destacado</span>`;
  return `<div class="project-badges">${html}</div>`;
}

function buildTechStack(tech) {
  return tech
    .map(t => `<span class="tech-tag" style="--tc:${t.color}">${t.name}</span>`)
    .join("");
}

function buildFeatures(features) {
  const checkSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="20 6 9 17 4 12"/></svg>`;
  return features
    .map(f => `<div class="feature-item">${checkSVG}${f}</div>`)
    .join("");
}

function buildFooter(project) {
  if (project.status === "coming" || (!project.demoUrl && !project.adminUrl)) {
    return `<button class="btn-project btn-project--disabled" disabled>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      Próximamente disponible
    </button>`;
  }
  const extIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
  const lockIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;

  let btns = "";
  if (project.demoUrl)  btns += `<a href="${project.demoUrl}" target="_blank" class="btn-project btn-project--primary">${extIcon}Ver Demo en Vivo</a>`;
  if (project.adminUrl) btns += `<a href="${project.adminUrl}" target="_blank" class="btn-project btn-project--ghost">${lockIcon}Panel Admin</a>`;
  return btns;
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  PROJECTS.forEach((p, i) => {
    const isWip    = p.status === "wip" || p.status === "coming";
    const cardCls  = isWip ? "project-card project-card--coming" : "project-card";
    const delay    = i * 100;

    const card = document.createElement("article");
    card.className = cardCls;
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-delay", delay);

    card.innerHTML = `
      <div class="project-card__header">
        <div class="project-icon-wrap" style="--clr:${p.color}">${p.icon}</div>
        ${buildBadges(p)}
      </div>
      <div class="project-card__body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-subtitle">${p.subtitle}</p>
        <div class="project-lang-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
          </svg>
          ${p.mainLang}
        </div>
        <p class="project-description">${p.description}</p>
        <div class="project-features">${buildFeatures(p.features)}</div>
        <div class="tech-stack">${buildTechStack(p.tech)}</div>
      </div>
      <div class="project-card__footer">${buildFooter(p)}</div>
    `;
    grid.appendChild(card);
  });
}

// ─────────────────────────────────────────────
// 🎨 Partículas hero (canvas)
// ─────────────────────────────────────────────
function initParticles() {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const N = 70;
  const particles = Array.from({ length: N }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    r: Math.random() * 2 + 0.5,
    a: Math.random() * 0.5 + 0.1,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Lines between close particles
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(124,58,237,${0.15 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

      // Gentle mouse interaction
      const mouse = { x: null, y: null };
      window.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      });

      particles.forEach(p => {
        // Simple attraction/repulsion
        if (mouse.x !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            p.x -= dx * 0.01;
            p.y -= dy * 0.01;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168,85,247,${p.a})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

    requestAnimationFrame(draw);
  }
  draw();
}

// ─────────────────────────────────────────────
// 🔢 Contadores animados
// ─────────────────────────────────────────────
function animateCounters() {
  document.querySelectorAll(".stat-number[data-count]").forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    let current  = 0;
    const step   = Math.ceil(target / 60);
    const timer  = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = current + suffix;
    }, 25);
  });
}

// ─────────────────────────────────────────────
// 📊 Skill bars animate on scroll
// ─────────────────────────────────────────────
function initSkillBars() {
  const bars = document.querySelectorAll(".skill-fill");
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("animated"); obs.unobserve(e.target); }
    });
  }, { threshold: 0.2 });
  bars.forEach(b => obs.observe(b));
}

// ─────────────────────────────────────────────
// 👁️ Scroll reveal (AOS-like)
// ─────────────────────────────────────────────
function initScrollReveal() {
  const els = document.querySelectorAll("[data-aos]");
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = parseInt(e.target.dataset.aosDelay) || 0;
        setTimeout(() => e.target.classList.add("aos-visible"), delay);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

// ─────────────────────────────────────────────
// 🔢 Counter trigger on scroll
// ─────────────────────────────────────────────
function initCounterObserver() {
  const statsEl = document.querySelector(".hero-stats");
  if (!statsEl) return;
  let fired = false;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !fired) { fired = true; animateCounters(); }
    });
  }, { threshold: 0.5 });
  obs.observe(statsEl);
}

// ─────────────────────────────────────────────
// 🍔 Mobile nav
// ─────────────────────────────────────────────
function initNav() {
  const btn   = document.getElementById("navHamburger");
  const links = document.getElementById("navLinks");
  const nav   = document.getElementById("navbar");

  btn?.addEventListener("click", () => {
    btn.classList.toggle("open");
    links.classList.toggle("open");
  });

  // Close on link click
  links?.querySelectorAll(".nav-link").forEach(a => {
    a.addEventListener("click", () => {
      btn.classList.remove("open");
      links.classList.remove("open");
    });
  });

  // Sticky shadow
  window.addEventListener("scroll", () => {
    nav?.classList.toggle("scrolled", window.scrollY > 20);
  });

  // Active link highlight
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  window.addEventListener("scroll", () => {
    let cur = "";
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) cur = s.id;
    });
    navLinks.forEach(l => {
      l.classList.toggle("nav-link--active", l.getAttribute("href") === "#" + cur);
    });
  });

  // Copy email to clipboard enhancement
  const emailLink = document.querySelector('a[href^="mailto:"]');
  if (emailLink) {
    emailLink.addEventListener('click', (e) => {
      const email = emailLink.textContent.trim();
      if (email.includes('@')) {
        // We still allow the default mailto behavior, 
        // but we copy it too and show a subtle hint.
        navigator.clipboard.writeText(email).then(() => {
          const originalText = emailLink.textContent;
          emailLink.textContent = "¡Copiado!";
          emailLink.style.color = "var(--green)";
          setTimeout(() => {
            emailLink.textContent = originalText;
            emailLink.style.color = "";
          }, 2000);
        });
      }
    });
  }
}

// ─────────────────────────────────────────────
// 🚀 INIT
// ─────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initParticles();
  initNav();
  initSkillBars();
  initScrollReveal();
  initCounterObserver();

  // Trigger AOS for elements already in view
  setTimeout(() => {
    document.querySelectorAll("[data-aos]").forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) el.classList.add("aos-visible");
    });
  }, 300);
});
