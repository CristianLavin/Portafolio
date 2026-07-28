export const translations = {
  es: {
    nav: {
      about: "Sobre Mí",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Ingeniero Informático & Full Stack Software Engineer",
      description: "Especializado en la creación de aplicaciones web escalables y la automatización de procesos de negocio críticos.",
      cta: "Ver Proyectos"
    },
    about: {
      title: "Sobre mí",
      content: "Mi enfoque va más allá de escribir código: busco la arquitectura más eficiente para resolver problemas reales. Combino una sólida base en ingeniería con tecnologías modernas para construir soluciones end-to-end, desde el diseño de bases de datos hasta la experiencia de usuario. Siempre priorizo la optimización de recursos y la mejora continua.",
      skills: "Stack Tecnológico"
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
      role: "Informatics Engineer & Full Stack Software Engineer",
      description: "Specialized in building scalable web applications and automating critical business processes.",
      cta: "View Projects"
    },
    about: {
      title: "About me",
      content: "My focus goes beyond writing code: I look for the most efficient architecture to solve real-world problems. I combine a solid engineering foundation with modern technologies to build end-to-end solutions, from database design to the user experience. I always prioritize resource optimization and continuous improvement.",
      skills: "Tech Stack"
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
    title: "Dulce Osadía",
    image: "https://res.cloudinary.com/da4q9jiqr/image/upload/v1785208079/Captura_de_pantalla_2026-07-27_230549_gzxg5b.png", // Reemplazar con tu URL o ruta
    link: "https://dulce-osadia.cristian-lavin.dev",
    review: {
      es: "Aplicación web integral para una pyme chilena dedicada a la venta de chocolates artesanales. Unifica un e-commerce para clientes con pagos en línea y un panel operativo interno para el control de inventario y la planificación de la producción basada en recetas.",
      en: "Comprehensive web application for a Chilean SME dedicated to the sale of handmade chocolates. It unifies a customer e-commerce platform with online payments and an internal operational dashboard for inventory control and recipe-based production planning."
    },
    architecture: {
      es: "Backend monolítico en PHP 8.2 renderizado del lado del servidor, con base de datos MySQL en Aiven y acceso de datos vía PDO. Frontend construido con HTML, CSS y JavaScript vanilla. Desplegado en Render mediante Docker e integrado con APIs de Transbank Webpay Plus, PHPMailer y Cloudinary.",
      en: "Monolithic PHP 8.2 backend with server-side rendering, using a MySQL database hosted on Aiven and data access via PDO. Frontend built with HTML, CSS, and vanilla JavaScript. Deployed on Render using Docker and integrated with Transbank Webpay Plus, PHPMailer, and Cloudinary APIs."
    }
  },
  {
    id: 2,
    title: "Chat App",
    image: "https://res.cloudinary.com/da4q9jiqr/image/upload/v1777507859/Captura_de_pantalla_2026-04-29_201045_exutqd.png",
    link: "https://chat.cristian-lavin.dev",
    review: {
      es: "Aplicación de chat en tiempo real con autenticación, salas grupales, llamadas, sistema de amigos y funciones de IA para texto e imágenes.",
      en: "Real-time chat application featuring authentication, group rooms, calls, a friends system, and AI integration for text and image generation."
    },
    architecture: {
      es: "React, Node.js, Express, Socket.IO, MongoDB Atlas, Tailwind CSS",
      en: "React, Node.js, Express, Socket.IO, MongoDB Atlas, Tailwind CSS"
    }
  },
  {
    id: 3,
    title: "Proximamente",
    image: "https://res.cloudinary.com/da4q9jiqr/image/upload/v1777507859/Coming-soon_exutqd.png",
    review: {
      es: "Proximamente",
      en: "Coming soon."
    },
    architecture: {
      es: "Proximamente",
      en: "Coming soon."
    }
  },
];
