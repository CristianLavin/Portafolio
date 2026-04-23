import { useState } from 'react';
import { Globe, Github, Linkedin, ExternalLink, Code } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

import { translations, projects } from './data';

function App() {
  const [lang, setLang] = useState('es');
  const t = translations[lang];

  const toggleLang = () => {
    setLang(lang === 'es' ? 'en' : 'es');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="font-bold text-xl text-indigo-600">Portafolio</a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">{t.nav.about}</a>
                <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors">{t.nav.projects}</a>  
              </div>
              <button
                onClick={toggleLang}
                className="flex items-center space-x-1 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
              >
                <Globe size={18} />
                <span className="font-medium">{lang.toUpperCase()}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            <span className="block">{t.hero.greeting}</span>
            <span className="block text-indigo-600 mt-2">Cristian Lavin</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            {t.hero.role}
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            {t.hero.description}
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="#projects" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-all shadow-lg hover:shadow-xl">
              {t.hero.cta}
            </a>
            <div className="flex space-x-4 items-center ml-4">
              <a href="https://github.com/CristianLavin" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/cristian-lav%C3%ADn/" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://wa.me/56971386558" className="text-gray-400 hover:text-[#25D366] transition-colors">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t.about.title}
            </h2>
          </div>
          <div className="mt-10 max-w-3xl mx-auto text-lg text-gray-500">
            <p className="mb-6">
              {t.about.content}
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t.about.skills}</h3>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git', 'Tailwind CSS', 'Docker', 'HTML', 'CSS', 'PHP', 'MySQL', 'MongoDB', 'C', 'C++', 'C#', 'Firebase', 'SQLite',
                'MariaDB', 'Express', 'JWT', 'CORS', 'LowDB', 'API REST', 'Next.js', 'Prisma', 'Django', 'Angular', 'TypeScript', 'Android', 'Apache', 'Paypal', 'Transbank',
                'WordPress', 'Bootstrap', 'Ajax', 'Chart.js ', 'Axios', 'Cloudinary', 'Bcrypt.js ', 'NestJS', 'Multer', 'Winston', 'Helmet', 'Passport', 'Vue.js', 'PostgreSQL',
                'XML', 'JSON', 'jQuery', 'Spring Boot', 'UI/UX', 'CI/CD'
              ].map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t.projects.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                <div className="h-48 overflow-hidden relative group">
                  <img
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 p-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-indigo-50">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-1 flex items-center">
                      <Code size={14} className="mr-1" />
                      {t.projects.architecture}
                    </h4>
                    <p className="text-sm text-gray-600 font-mono bg-gray-100 p-2 rounded">
                      {project.architecture[lang]}
                    </p>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">{t.projects.review}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {project.review[lang]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} DevPortfolio. {t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
