import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  selectedValue: string = '2';

  languages = [
    {
      /**********************************/
      /***********   Spanish   **********/
      /**********************************/
      code: '1',
      name: 'es',

      /*footer*/
      btnAbout: 'Sobre',
      btnSkills: 'Habilidades',
      btnProjects: 'Proyectos',
      btnConatct: 'Contacto',

      /*start page*/
      slogan:
        'Donde el código se convierte en arte y los sueños digitales se hacen realidad',
      btnText: 'Ver más',

      /*about page*/
      headlineAbout: 'Sobre mí',
      professionalIntensiveHeadline: 'Fase Intensiva Profesional',
      professionalIntensiveText:
        'Después de varios años de programación, mi curiosidad se volvió infinita y decidí inscribirme en la Academia de Desarrolladores para obtener más información y alcanzar un nivel más alto. Desde entonces, he creado varios proyectos complejos y he adquirido experiencia en colaborar con otros desarrolladores.',
      btn: 'Vamos a hablar',

      /*Skills*/
      headlineSkill: 'Habilidades',
      btnFrontend: 'frontend',
      btnBackend: 'backend',
      btnExtra: 'extra',
      btnDeployment: 'deployment',
      frontendDescription:
        'En la academia, el enfoque estaba en el framework Angular. Implementé mis primeros proyectos utilizando HTML, CSS y JavaScript.',

      backendDescription:
        'En mis proyectos iniciales, solía utilizar Firebase, pero quería ampliar mis horizontes y comprender mejor lo que sucede detrás de escena. Python con el framework Django y la base de datos SQLite fueron perfectos para esto. Consulta mi proyecto (Join).',

      extraDescription:
        'Otras habilidades que he adquirido incluyen Scrum, Git (o GitHub) y APIs.Pude implementar Scrum y Git/GitHub en varios proyectos grupales, así como de manera independiente en casa, por ejemplo, para una planificación y ejecución efectivas de proyectos. Utilicé Git/GitHub para crear repositorios y para almacenar, rastrear y gestionar código. Con mi pequeño proyecto (Pokedex), aprendí a interactuar con APIs y a recuperar datos de interfaces.',

      deploymentDescription:
        'En mis proyectos, he utilizado Google Cloud, Docker, Redis, así como Integración Continua (CI) y Despliegue Continuo (CD). Google Cloud me proporciona una infraestructura confiable y flexible. Docker simplifica la contenedorización de mis proyectos. El uso de CI/CD automatiza mi proceso de desarrollo y mejora la calidad de mis proyectos. Al utilizar Redis como base de datos en memoria (RAM), pude lograr un procesamiento y almacenamiento de datos rápido y eficiente.',

      /*Projects*/
      headline: 'Projectos',
      btnProject1: 'Pokedex',
      btnProject2: 'El pollo loco',
      btnProject3: 'Join',
      btnProject4: 'Netflix clone',
      btnProject5: 'Project 5',

      headlineProject1: 'Pokedex',
      headlineProject2: 'El pollo loco',
      headlineProject3: 'Join',
      // headlineProject4: '',
      // headlineProject5: '',
      descriptionProject1:
        'Un Pokedex básico, para este pequeño proyecto, el enfoque estaba en cargar datos e información desde una API.',

      descriptionProject2:
        'El Pollo Loco es un juego de plataformas 2D simple donde puedes recolectar monedas y botellas para derrotar enemigos. El enfoque de este juego estuvo en utilizar el lienzo (Canvas) y el enfoque orientado a objetos.',

      descriptionProject3:
        'En este proyecto, aprendí por primera vez sobre la interacción entre el frontend y el backend. Este gestor de tareas, diseñado en Figma, se utilizó para crear tareas y organizarlas mediante arrastrar y soltar. El enfoque estaba en la integración entre las funcionalidades del frontend y el backend.',

      // descriptionProject4: '',

      // descriptionProject5: '',

      /*contact*/
      headlineContact: 'Contacto',
      email: 'info@frank-sinnigen.de',
      address: 'área metropolitana de barcelona',
      imprint: 'Aviso Legal y Protección de Datos',
      placeholderName: 'Nombre completo',
      placeholderEmail: 'Su dirección de correo electrónico',
      placeholderMessage: 'Su mensaje',
      send: 'enviar',
      sent: 'enviado...',
      changeInfoBtn: 'Volver a la información de contacto',
      changeSendBtn: 'Ir al formulario de contacto',

      /*imprint*/
      headlineImprint: 'Aviso legal & Protección de datos',
      headlineName: 'Nombre',
      headlineAddress: 'Dirección',
      headlineWeb: 'Sitio web',
      headlineResponsible: 'Responsable del contenido',
      headlineDisclaimer: 'Exención de responsabilidad',
      disclaimerText:
        'El contenido de esta página web ha sido revisado cuidadosamente y creado con el mejor conocimiento. Sin embargo, no se asume ninguna garantía respecto a la precisión, integridad y actualidad del contenido. Se excluye cualquier responsabilidad por daños que surjan directa o indirectamente del uso de esta página web, a menos que se base en intención o negligencia grave.',
      headlineCopyright: 'Derechos de autor',
      copyrightText:
        'Todos los contenidos de esta página web, en particular textos, imágenes, gráficos y diseño, están protegidos por derechos de autor. No está permitido utilizar, reproducir o distribuir sin la autorización expresa.',
      headlineSources: 'Fuentes',
      souresText: 'Este aviso legal fue creado con la ayuda de',
    },
    {
      /***********************************/
      /***********   English   ***********/
      /***********************************/
      code: '2',
      name: 'en',

      /*footer*/
      btnAbout: 'About',
      btnSkills: 'Skills',
      btnProjects: 'Projects',
      btnConatct: 'Contact',

      /*start page*/
      slogan: 'Where code becomes art and digital dreams come true',
      btnText: 'See more',

      /*about page*/
      headlineAbout: 'About me',
      professionalIntensiveHeadline: 'Professional Intensive Phase',
      professionalIntensiveText:
        'After several years of programming, my curiosity became boundless, and I decided to enroll at the Developer Academy to gain more input and reach a higher level. Since then, I have created several complex projects and gained experience in collaborating with other developers.',
      btn: 'Let`s talk',

      /*Skills*/
      headlineSkill: 'Skills',
      btnFrontend: 'Frontend',
      btnBackend: 'Backend',
      btnExtra: 'Extra',
      btnDeployment: 'Deployment',
      frontendDescription:
        'At the academy, the focus was on the Angular framework. I implemented my first projects using HTML, CSS, and JavaScript.',

      backendDescription:
        'In my early projects, I used Firebase, but I wanted to broaden my horizons and gain a better understanding of what happens behind the scenes. Python with the Django framework and the SQLite database were perfect for this. See my project (Join).',

      extraDescription:
        'Additional skills I`ve acquired include Scrum, Git (or GitHub), and APIs.I was able to implement Scrum and Git/GitHub in several group projects as well as independently at home, for instance, for effective project planning and execution. I used Git/GitHub to create repositories and to store, track, and manage code.With my small project (Pokedex), I learned how to interact with APIs and retrieve data from interfaces.',

      deploymentDescription:
        'In my projects, I have used Google Cloud, Docker, Redis, as well as Continuous Integration (CI) and Continuous Deployment (CD). Google Cloud provides me with a reliable and flexible infrastructure. Docker simplifies the containerization of my projects. The use of CI/CD automates my development process and improves the quality of my projects. By utilizing Redis as an in-memory database (RAM), I was able to achieve fast and efficient data processing and storage.',

      /*Projects*/
      headline: 'Projects',
      btnProject1: 'Pokedex',
      btnProject2: 'El pollo loco',
      btnProject3: 'Join',
      btnProject4: 'Netflix clone',
      btnProject5: 'Project 5',

      headlineProject1: 'Pokedex',
      headlineProject2: 'El pollo loco',
      headlineProject3: 'Join',
      // headlineProject4: '',
      // headlineProject5: '',
      descriptionProject1:
        'A simple Pokedex, for this small project, the focus was on loading data and information from an API.',

      descriptionProject2:
        'El Pollo Loco is a simple 2D jump and run game where you can collect coins and bottles to defeat enemies. The focus of this game was on using the Canvas and the object-oriented approach.',

      descriptionProject3:
        'In this project, I first learned about the interaction between frontend and backend. This task manager, designed in Figma, was used for creating tasks and organizing them via drag-and-drop. The focus was on the integration between frontend and backend functionalities.',

      // descriptionProject4: '',

      // descriptionProject5: '',

      /*contact*/
      headlineContact: 'Contact',
      email: 'info@frank-sinnigen.de',
      address: 'Barcelona metropolitan area ',
      imprint: 'Imprint & Data Protection',
      placeholderName: 'Your Name',
      placeholderEmail: 'Your email address',
      placeholderMessage: 'Your message',
      send: 'Send',
      sent: 'Sent...',
      changeInfoBtn: 'back to contact info',
      changeSendBtn: 'to the contact form',

      /*imprint*/
      headlineImprint: 'Imprint & Data Protection',
      headlineName: 'Name',
      headlineAddress: 'Address',
      headlineWeb: 'Website',
      headlineResponsible: 'Responsible for the content',
      headlineDisclaimer: 'Disclaimer',
      disclaimerText:
        'The contents of this website have been carefully examined and created to the best of our knowledge. However, no guarantee is assumed for the accuracy, completeness, and timeliness of the content. Any liability for damages arising directly or indirectly from the use of this website is excluded, unless based on intent or gross negligence.',
      headlineCopyright: 'Copyright',
      copyrightText:
        'All content on this website, including text, images, graphics, and layout, is protected by copyright. Use, reproduction, or distribution without explicit permission is not allowed.',
      headlineSources: 'Sources',
      souresText: 'This imprint was created with the help of.',
    },
    {
      /**********************************/
      /***********   German   ***********/
      /******************************** */
      code: '3',
      name: 'de',

      /*footer*/
      btnAbout: 'Über',
      btnSkills: 'Fähigkeiten',
      btnProjects: 'Projekte',
      btnConatct: 'Kontakt',

      /*start page*/
      slogan: 'Wo Code zur Kunst wird und digitale Träume wahr werden',
      btnText: 'Weiter',

      /*about page*/
      headlineAbout: 'Über mich',
      professionalIntensiveHeadline: 'Berufliche Intensivphase',
      professionalIntensiveText:
        'Nach einigen Jahren des Programmierens wurde meine Neugier grenzenlos und ich entschied mich, mich bei der Developer Akademie anzumelden, um dort mehr Input und ein höheres Niveau zu erreichen. Seitdem habe ich mehrere komplexe Projekte erstellt und Erfahrungen in der Zusammenarbeit mit anderen Entwicklern gesammelt.',
      btn: 'Lass uns reden',

      /*Skills*/
      headlineSkill: 'Fähigkeiten',
      btnFrontend: 'Frontend',
      btnBackend: 'Backend',
      btnExtra: 'Extra',
      btnDeployment: 'Deployment',
      frontendDescription:
        'In der Akademie lag der Fokus auf dem Framework Angular. Meine ersten Projekte habe ich mit HTML, CSS und JavaScript umgesetzt.',

      backendDescription:
        'In meinen Anfangsprojekten habe ich noch Firebase verwendet, aber ich wollte über den Tellerrand schauen und besser verstehen, was im Hintergrund alles passiert. Python mit dem Framework Django und der SQLite-Datenbank waren perfekt dafür geeignet. Siehe mein Projekt (Join).',

      extraDescription:
        'Weitere Skills, die ich erlernt habe, sind Scrum, Git (bzw. Github) und APIs. Scrum und Git/Github konnte ich in mehreren Gruppenprojekten und auch alleine zu Hause umsetzen, z.B. zur effektiven Planung und Durchführung von Projekten. Dabei verwendete ich Git/Github, um Git-Repositories zu erstellen und Code zu speichern, zu verfolgen und zu verwalten. Mit meinem kleinen Projekt (Pokedex) lernte ich den Umgang mit APIs kennen und wie man Daten von Schnittstellen abruft.',

      deploymentDescription:
        'Bei meinen Projekten habe ich Google Cloud, Docker, Redis sowie Continuous Integration (CI) und Continuous Deployment (CD) verwendet. Google Cloud bietet mir eine zuverlässige und flexible Infrastruktur. Docker erleichtert die Containerisierung meiner Projekte. Der Einsatz von CI/CD automatisiert meinen Entwicklungsprozess und verbessert die Qualität meiner Projekte. Durch den Einsatz von Redis als In-Memory-Datenbank (Arbeitsspeicher) konnte ich schnelle und effiziente Datenverarbeitungen und -speicherungen erreichen.',
      /*Projects*/
      headline: 'Projekte',
      btnProject1: 'Pokedex',
      btnProject2: 'El pollo loco',
      btnProject3: 'Join',
      btnProject4: 'Netflix clone',
      btnProject5: 'Project 5',

      headlineProject1: 'Pokedex',
      headlineProject2: 'El pollo loco',
      headlineProject3: 'Join',
      // headlineProject4: '',
      // headlineProject5: '',
      descriptionProject1:
        'Ein einfacher Pokedex, bei diesem kleinen Projekt lag der Fokus auf das Laden von Daten und Informationen über einer API.',

      descriptionProject2:
        'El Pollo Loco ist ein einfaches 2D Jump and Run Spiel, bei dem man Münzen und Flaschen sammeln kann, um Gegner zu besiegen. Bei diesem Spiel lag der Fokus auf die Nutzung des Canvas und dem objektorientierten Ansatz.',

      descriptionProject3:
        'In diesem Projekt habe ich erstmals das Zusammenspiel zwischen Frontend und Backend kennengelernt.  Dieser Aufgabenmanager im Figma-Design diente dem Erstellen von Aufgaben und der Organisation per Drag-and-Drop. Der Schwerpunkt lag dabei auf dem Zusammenspiel zwischen Front- und Backend-Funktionalitäten',

      descriptionProject4: '',

      descriptionProject5: '',

      /*contact*/
      headlineContact: 'Kontakt',
      email: 'info@frank-sinnigen.de',
      address: 'Metropolregion Barcelona',
      imprint: 'Impressum & Datenschutz',
      placeholderName: 'Ihr Vor und Nachname',
      placeholderEmail: 'Ihre Email Adresse',
      placeholderMessage: 'Ihre Nachricht',
      send: 'Senden',
      sent: 'Gesendet...',
      changeInfoBtn: 'zurück zu Kontakinfos',
      changeSendBtn: 'zum kontaktformular',

      /*imprint*/
      headlineImprint: 'Impressum & Datenschutz',
      headlineName: 'Name',
      headlineAddress: 'Adresse',
      headlineWeb: 'Webseite',
      headlineResponsible: 'Verantwortlich für den Inhalt',
      headlineDisclaimer: 'Haftungsausschluss',
      disclaimerText:
        'Die Inhalte dieser Website wurden sorgfältig geprüft und nach bestem Wissen erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Jegliche Haftung für Schäden, die direkt oder indirekt aus der Nutzung dieser Website entstehen, wird ausgeschlossen, soweit dies nicht auf Vorsatz oder grober Fahrlässigkeit beruht.',
      headlineCopyright: 'Urheberrecht',
      copyrightText:
        'Alle Inhalte dieser Website, insbesondere Texte, Bilder, Grafiken und Layout,sind urheberrechtlich geschützt. Die Verwendung, Vervielfältigung oder Verbreitung ohne ausdrückliche Zustimmung ist nicht gestattet.',
      headlineSources: 'Quellen',
      souresText: 'Dieses Impressum wurde erstellt mit Hilfe von',
    },
  ];

  constructor() {}

  onToggleChange(value: string) {
    this.selectedValue = value;
  }

  language() {
    return this.languages.find((lang) => lang.code === this.selectedValue);
  }
}
