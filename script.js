const translations = {
  en: {
    title: "Matias Hormaza - Front-End Developer",
    header: {
      name: "Matias Lionel Hormaza Becerra",
      title: "Front-End Developer"
    },
    bio: "Software developer passionate about technology and new ways to connect people. Exploring Blockchain and decentralized systems as tools for the future. Curious about Emerging Technologies and how they can create new ways to connect people. Learning Python and IoT to drive automation in various fields. Multilingual, speaking several languages to expand my reach and connect with diverse communities.",
    experience: {
      title: "Experience",
      jobs: [
        {
          title: "Developer @ Andbank",
          period: "Jul 2022 - Oct 2024",
          description: "ReactJS Web Apps development, Frontend development, UX/UI Design, Finances graph visualization, Figma Designer. Technologies: ReactJS, Design by components, Redux, Azure, Openshift."
        },
        {
          title: "Javascript Engineer @ Globant",
          period: "Sep 2020 - Sep 2022",
          description: "ReactJS Web Apps development, Frontend development, UX/UI Design, DevOps. Technologies: ReactJS, Atomic components, Redux."
        },
        {
          title: "JavaScript Developer @ América Móvil",
          period: "Dec 2018 - Sep 2020",
          description: "ReactJS Web Apps, Data Science visualizations, UX/UI Design, DevOps. Technologies: Lodash, Functional Programming, Design patterns."
        },
        {
          title: "JavaScript Developer @ Spark Flow",
          period: "Feb 2017 - Feb 2018",
          description: "UX/UI Development, Angular components creation. Technologies: Agile methodologies (Scrum), Angular development."
        },
        {
          title: "Web Developer @ AdColony",
          period: "Aug 2016 - Feb 2017",
          description: "Interactive animations programming, JavaScript platform maintenance, Web development. Technologies: JQuery, Animation, Canvas, HTML5."
        },
        {
          title: "JavaScript Developer @ Admotion S.R.L.",
          period: "Sep 2013 - Jul 2016",
          description: "Front-end components development in Vanilla JavaScript, JavaScript platform maintenance. Technologies: Lodash, Functional Programming, Design patterns."
        }
      ]
    },
    skills: {
      title: "Skills",
      items: [
        "JavaScript (Senior)",
        "React.js",
        "Node.js",
        "Python",
        "IoT",
        "Blockchain",
        "English (Full Professional)"
      ]
    },
    contact: {
      title: "Contact",
      items: {
        email: "Email",
        phone: "Phone",
        linkedin: "LinkedIn",
        website: "Website",
        location: "Location"
      }
    },
    buttons: {
      print: "Print",
      language: "ES"
    }
  },
  es: {
    title: "Matias Hormaza - Desarrollador Front-End",
    header: {
      name: "Matias Lionel Hormaza Becerra",
      title: "Desarrollador Front-End"
    },
    bio: "Desarrollador de software apasionado por la tecnología y las nuevas formas de conectar a las personas. Explorando Blockchain y sistemas descentralizados como herramientas del futuro. Curioso sobre Tecnologías Emergentes y cómo pueden crear nuevas formas de conectar a las personas. Aprendiendo Python e IoT para impulsar la automatización en diversos campos. Multilingüe, hablo varios idiomas para ampliar mi alcance y conectar con comunidades diversas.",
    experience: {
      title: "Experiencia",
      jobs: [
        {
          title: "Developer @ Andbank",
          period: "Jul 2022 - Oct 2024",
          description: "Desarrollo de aplicaciones web con ReactJS, desarrollo frontend, diseño UX/UI, visualización de gráficos financieros, diseño en Figma. Tecnologías: ReactJS, diseño por componentes, Redux, Azure, Openshift."
        },
        {
          title: "Javascript Engineer @ Globant",
          period: "Sep 2020 - Sep 2022",
          description: "Desarrollo de aplicaciones web con ReactJS, desarrollo frontend, diseño UX/UI, DevOps. Tecnologías: ReactJS, componentes atómicos, Redux."
        },
        {
          title: "JavaScript Developer @ América Móvil",
          period: "Dic 2018 - Sep 2020",
          description: "Aplicaciones web con ReactJS, visualizaciones de Data Science, diseño UX/UI, DevOps. Tecnologías: Lodash, Programación Funcional, Patrones de diseño."
        },
        {
          title: "JavaScript Developer @ Spark Flow",
          period: "Feb 2017 - Feb 2018",
          description: "Desarrollo UX/UI, creación de componentes Angular. Tecnologías: Metodologías ágiles (Scrum), desarrollo en Angular."
        },
        {
          title: "Web Developer @ AdColony",
          period: "Ago 2016 - Feb 2017",
          description: "Programación de animaciones interactivas, mantenimiento de plataforma en JavaScript, desarrollo web. Tecnologías: JQuery, Animación, Canvas, HTML5."
        },
        {
          title: "JavaScript Developer @ Admotion S.R.L.",
          period: "Sep 2013 - Jul 2016",
          description: "Desarrollo de componentes front-end en Vanilla JavaScript, mantenimiento de plataforma en JavaScript. Tecnologías: Lodash, Programación Funcional, Patrones de diseño."
        }
      ]
    },
    skills: {
      title: "Habilidades",
      items: [
        "JavaScript (Senior)",
        "React.js",
        "Node.js",
        "Python",
        "IoT",
        "Blockchain",
        "Inglés (Full Professional)"
      ]
    },
    contact: {
      title: "Contacto",
      items: {
        email: "Email",
        phone: "Teléfono",
        linkedin: "LinkedIn",
        website: "Sitio Web",
        location: "Ubicación"
      }
    },
    buttons: {
      print: "Imprimir",
      language: "EN"
    }
  }
};

let currentLanguage = 'en';

function updateContent() {
  const lang = translations[currentLanguage];
  if (!lang) return;

  // Update static content
  document.getElementById('page-title').textContent = lang.title;
  document.getElementById('header-name').textContent = lang.header.name;
  document.getElementById('header-title').textContent = lang.header.title;
  document.getElementById('bio').textContent = lang.bio;
  document.getElementById('experience-title').textContent = lang.experience.title;
  document.getElementById('skills-title').textContent = lang.skills.title;
  document.getElementById('contact-title').textContent = lang.contact.title;
  document.getElementById('print-button').textContent = lang.buttons.print;
  document.getElementById('language-button').textContent = lang.buttons.language;

  // Update experience list
  const experienceList = document.getElementById('experience-list');
  experienceList.innerHTML = lang.experience.jobs.map(job => `
    <dt><b>${job.title}</b> <small><i>* ${job.period}</i></small></dt>
    <dd><code>${job.description}</code></dd>
  `).join('');

  // Update skills list
  const skillsList = document.getElementById('skills-list');
  skillsList.innerHTML = lang.skills.items.map(skill => `<li>${skill}</li>`).join('');

  // Update contact list
  const contactList = document.getElementById('contact-list');
  contactList.innerHTML = `
    <li>${lang.contact.items.email}: <a href='mailto:hormaza1992@gmail.com'>hormaza1992@gmail.com</a></li>
    <li>${lang.contact.items.phone}: <a href='https://wa.me/376367071' target='_blank'>+376 367071</a></li>
    <li>${lang.contact.items.linkedin}: <a href='https://www.linkedin.com/in/hormaza' target='_blank'>hormaza</a></li>
    <li>${lang.contact.items.website}: <a href='https://hormatias.github.io/' target='_blank'>hormatias.github.io</a></li>
    <li>${lang.contact.items.location}: Andorra</li>
  `;

  // Update HTML lang attribute
  document.documentElement.lang = currentLanguage;
}

function switchLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
  updateContent();
}

// Initialize the page
updateContent(); 