export const portfolioData = {
  personalInfo: {
    name: "Dr. Julián Benítez",
    title: "Abogado Corporativo & Estratega Legal",
    credential: "T° CXXI F° 890 - C.P.A.C.F.",
    tagline: "Protección jurídica integral y estructuración de negocios para empresas, startups y marcas de alto impacto.",
    location: "Buenos Aires, Argentina (Servicios Internacionales)",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=75&w=450&fm=webp",
    about: {
      philosophy: "En un entorno corporativo dinámico, la seguridad jurídica no debe ser un freno, sino un catalizador de crecimiento.",
      description: "Más de 12 años asesorando a corporaciones, fondos de inversión y fundadores tech en fusiones, adquisiciones, cumplimiento normativo y protección de activos intangibles. Enfoque moderno, dinámico y libre de burocracia ineficiente.",
      stats: [
        { label: "Años de Ejercicio", value: "+12" },
        { label: "Operaciones Cerradas", value: "+180" },
        { label: "Retención de Clientes", value: "98%" },
      ]
    },
  },

  // Áreas de Práctica (Reemplaza a "Stack")
  practiceAreas: [
    {
      id: "m-and-a",
      title: "Derecho Corporativo & M&A",
      description: "Estructuración de sociedades, pactos de socios, rondas de inversión, fusiones y adquisiciones transfronterizas.",
      icon: "Building2",
      badge: "Corporativo"
    },
    {
      id: "tech-ip",
      title: "Propiedad Intelectual & Tech Law",
      description: "Registro de marcas, patentes, licencias software, términos y condiciones SaaS y contratos de confidencialidad (NDA).",
      icon: "ShieldCheck",
      badge: "Digital"
    },
    {
      id: "compliance",
      title: "Compliance & Protección de Datos",
      description: "Adecuación a normativas GDPR/LPDP, auditorías legales y programas de prevención de riesgos corporativos.",
      icon: "Scale",
      badge: "Normativo"
    },
    {
      id: "disputes",
      title: "Resolución de Conflictos & Negociación",
      description: "Mediación de disputas entre socios, arbitraje comercial y representación en litigios de alta complejidad.",
      icon: "Gavel",
      badge: "Estratégico"
    }
  ],

  // Casos Destacados / Proyectos
  featuredCases: [
    {
      id: 1,
      title: "Adquisición Transfronteriza SaaS Fintech",
      category: "M&A / Tech",
      summary: "Estructuración legal del proceso de compra de un SaaS regional por parte de un holding internacional.",
      impact: "Operación de USD 4.5M cerrada en 90 días con cero contingencias.",
      tags: ["Due Diligence", "M&A", "Cross-Border"],
      linkText: "Solicitar Referencia"
    },
    {
      id: 2,
      title: "Protección Global de Marca & IP",
      category: "Propiedad Intelectual",
      summary: "Estrategia de blindaje de registro de marca y patentes en Latinoamérica, EEUU y Unión Europea.",
      impact: "Defensa exitosa de 14 marcas comerciales ante oposiciones registrarias.",
      tags: ["Marcas", "IP", "Patentes"],
      linkText: "Ver Metodología"
    },
    {
      id: 3,
      title: "Pacto de Socios & Vesting para Startup",
      category: "Startups",
      summary: "Redacción de acuerdo de accionistas, cláusulas Drag-Along / Tag-Along y esquemas de asignación de equity.",
      impact: "Estructuración lista para auditoría de fondos de Venture Capital.",
      tags: ["Equity", "Vesting", "Startups"],
      linkText: "Consultar Caso"
    }
  ],

  // Trayectoria & Acreditaciones
  career: [
    {
      period: "2018 - Presente",
      role: "Socio Principal",
      institution: "Benítez & Asociados - Estudio Jurídico",
      description: "Liderazgo del área de Práctica Corporativa y Propiedad Intelectual para empresas de tecnología y servicios."
    },
    {
      period: "2014 - 2018",
      role: "Consultor Senior de Legales",
      institution: "PwC / Big Four",
      description: "Auditoría legal corporativa, estructuración fiscal y compliance para clientes corporativos de primera línea."
    },
    {
      period: "2012 - 2014",
      role: "Abogado Junior",
      institution: "Marval, O'Farrell & Mairal",
      description: "Litigios comerciales, contratos internacionales y trámites ante organismos reguladores."
    }
  ],

  // Formación & Certificaciones
  academic: [
    {
      year: "2016",
      degree: "Máster en Derecho Empresario (LL.M.)",
      institution: "Universidad Austral"
    },
    {
      year: "2012",
      degree: "Abogacía (Diploma de Honor)",
      institution: "Universidad de Buenos Aires (UBA)"
    }
  ],

  contact: {
    office: "Av. del Libertador 4980, Piso 12, CABA",
    email: "j.benitez@estudiobenitez.com",
    phone: "+54 11 5555-4321",
    calendlyUrl: "https://calendly.com",
    linkedin: "https://linkedin.com",
    whatsapp: "https://wa.me/541155554321"
  }
};