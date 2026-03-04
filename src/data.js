export const translations = {
  es: {
    nav: {
      about: "Sobre Mí",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Desarrollador Full Stack",
      description: "Me apasiona construir aplicaciones web modernas, escalables y eficientes. Con experiencia en frontend y backend, transformo ideas en realidad digital.",
      cta: "Ver Proyectos",
    },
    about: {
      title: "Sobre Mí",
      content: "Soy un desarrollador Full Stack con una sólida comprensión de las tecnologías web. Disfruto resolviendo problemas complejos y aprendiendo nuevas herramientas. Mi enfoque está en escribir código limpio, mantenible y eficiente.",
      skills: "Habilidades Técnicas:",
    },
    projects: {
      title: "Mis Proyectos",
      architecture: "Arquitectura",
      review: "Reseña",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    }
  },
  en: {
    nav: {
      about: "About Me",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I am",
      role: "Full Stack Developer",
      description: "I am passionate about building modern, scalable, and efficient web applications. With experience in frontend and backend, I transform ideas into digital reality.",
      cta: "View Projects",
    },
    about: {
      title: "About Me",
      content: "I am a Full Stack developer with a strong understanding of web technologies. I enjoy solving complex problems and learning new tools. My focus is on writing clean, maintainable, and efficient code.",
      skills: "Technical Skills:",
    },
    projects: {
      title: "My Projects",
      architecture: "Architecture",
      review: "Review",
    },
    footer: {
      rights: "All rights reserved.",
    }
  }
};

export const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=E-Commerce",
    review: {
      es: "Una plataforma de comercio electrónico completa con carrito de compras, pagos y panel de administración.",
      en: "A complete e-commerce platform with shopping cart, payments, and admin dashboard."
    },
    architecture: {
      es: "React, Node.js, Express, MongoDB",
      en: "React, Node.js, Express, MongoDB"
    }
  },
  {
    id: 2,
    title: "Task Management App",
    image: "https://placehold.co/600x400/16a34a/ffffff?text=Task+App",
    review: {
      es: "Aplicación para gestionar tareas diarias con funcionalidad de arrastrar y soltar.",
      en: "Application to manage daily tasks with drag and drop functionality."
    },
    architecture: {
      es: "Vue.js, Firebase, Tailwind CSS",
      en: "Vue.js, Firebase, Tailwind CSS"
    }
  },
  {
    id: 3,
    title: "Portfolio V1",
    image: "https://placehold.co/600x400/9333ea/ffffff?text=Portfolio",
    review: {
      es: "Mi primer portafolio personal mostrando mis primeros pasos en el desarrollo web.",
      en: "My first personal portfolio showcasing my first steps in web development."
    },
    architecture: {
      es: "HTML, CSS, JavaScript",
      en: "HTML, CSS, JavaScript"
    }
  }
];
