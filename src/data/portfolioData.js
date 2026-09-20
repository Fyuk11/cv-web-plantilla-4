export const portfolioData = {
    personalInfo: {
      name: "Rodrigo Gómez",
      role: "Front-End Developer (AI-Assisted)",
      typingRoles: [
        "Front-End Developer (AI-Assisted)",
        "Web Developer",
        "Landing Page Specialist"
      ],
      tagline: "De la idea al deploy, rápido.",
      bioShort: "Desarrollo sitios web modernos combinando código y herramientas de IA.",
      indicators: [
        "+15K seguidores generados",
        "Sitios listos en 5-7 días",
        "SEO & Analytics integrados"
      ],
      whatsappLink: "https://wa.me/5491121652703?text=%C2%A1Hola%20Rodrigo!%20Vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto%2Foportunidad.",
      email: "rodrigogomez.digital@gmail.com", // Modificá si preferís otro
      linkedin: "https://www.linkedin.com/in/rodrigo-gomez-digital/",
      github: "https://github.com/rodrigogomez", // Modificá con tu usuario de GitHub
      cvPdfPath: "/CV_Rodrigo_Gomez.pdf", // apunta directo a la carpeta public
    },
  
    about: {
      text: "Soy Front-End Developer y me especializo en desarrollo web asistido por Inteligencia Artificial. Cofundé Traducción Creativa, un estudio digital donde llevo proyectos de brief a producción en días, no semanas. Antes construí de punta a punta el ecosistema digital de una marca propia que hoy suma +15.000 seguidores. Creo en la ejecución rápida, el código prolijo y los resultados medibles."
    },
  
    stack: [
      {
        category: "Desarrollo",
        items: ["HTML5", "CSS3", "JavaScript", "React", "Framer Motion", "Git & GitHub", "SEO Técnico"]
      },
      {
        category: "IA & Deploy",
        items: ["Cursor", "VS Code", "Netlify", "ChatGPT", "Claude", "Gemini", "Gamma", "Make"]
      },
      {
        category: "Growth & Contenido",
        items: ["Google Tag Manager", "GA4", "Meta Pixel", "Clarity", "Canva", "CapCut", "Hotmart"]
      }
    ],
  
    projects: [
      {
        id: "traduccion-creativa",
        title: "Traducción Creativa",
        description: "Sitio oficial de estudio digital. Desarrollo web acelerado por IA, copywriting persuasivo y landing pages de alta conversión.",
        url: "https://traduccioncreativa.com/",
        image: "/projects/traducción-creativa.png" // Guardá la captura acá en /public/projects/
      },
      {
        id: "portfolio-tc",
        title: "Traducción Creativa — Showcase",
        description: "Catálogo de experiencias interactivas y proyectos desarrollados para marcas y clientes del estudio.",
        url: "https://portfolio-traduccion-creativa.netlify.app/",
        image: "/projects/portfolio-traduccion-creativa.png"
      },
      {
        id: "wakeup",
        title: "WakeUp — Experiencia Digital",
        description: "Diseño web 3D interactivo con Framer Motion y estética futurista.",
        url: "https://eyewakeup.netlify.app",
        image: "/projects/eyewakeup.png"
      },
      {
        id: "scrollytelling",
        title: "Scrollytelling Landing",
        description: "Landing con storytelling basado en scroll y animaciones progresivas.",
        url: "https://scrollytelling-interactive-landing.netlify.app",
        image: "/projects/scrollytelling.png"
      },
      {
        id: "lumina-z",
        title: "Lumina Z — Creative Studio",
        description: "Sitio de marca para un estudio creativo, diseño editorial y minimalista.",
        url: "https://lumina-z.netlify.app",
        image: "/projects/lumina.png"
      },
      {
        id: "desde-el-vinculo",
        title: "Desde el Vínculo",
        description: "Ecosistema digital completo para marca de educación canina: sitio, landings y checkout con Hotmart.",
        url: "https://desdeelvinculo.netlify.app",
        image: "/projects/desde-el-vinculo.png"
      }
    ],
  
    experience: [
      {
        role: "Co-Founder & Front-End Developer",
        company: "Traducción Creativa",
        period: "2026 – Actualidad",
        bullets: [
          "Desarrollo sitios y landings con React, integrando IA (Cursor) al flujo de trabajo.",
          "De brief a deploy en 5-7 días, con SEO y tracking (GTM, GA4, Meta Pixel) integrados desde el código."
        ]
      },
      {
        role: "Digital Webmaster & Growth Specialist",
        company: "Desde el Vínculo",
        period: "Dic. 2025 – Actualidad",
        bullets: [
          "Ecosistema digital completo de una marca propia: sitio, landings, checkout con Hotmart.",
          "Comunidad de 0 a +15.000 seguidores, automatización de post-venta con Make."
        ]
      },
      {
        role: "Co-Founder",
        company: "Alkymia",
        period: "Nov. 2024 – 2026",
        bullets: [
          "Tiendas online en Tiendanube para emprendedores."
        ]
      }
    ]
  };