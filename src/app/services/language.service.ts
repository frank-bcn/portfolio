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

      /*header*/
      btnAbout: 'Sobre mí',
      btnSkills: 'Habilidades',
      btnProjects: 'Proyectos',
      btnConatct: 'Contacto',

      /*start page*/
      slogan:
        'Donde el código se convierte en arte y los sueños digitales se hacen realidad',
      btnText: 'Ver más',

      /*about page*/
      headlineAbout: 'Sobre mí',
      professionalCareerHeadline: 'Carrera Profesional',
      professionalCareerText:
        'Después de terminar mi educación escolar, completé con éxito un aprendizaje como albañil.',

      professionalIntensiveHeadline: 'Fase Intensiva Profesional',

      professionalIntensiveText:
        'Durante mi formación profesional, entré en contacto con la programación a través de varios caminos indirectos. Esta fascinación me llevó a profundizar aún más en ella, y para alcanzar un nivel más alto, finalmente me inscribí en la Academia de Desarrolladores.',
      btn: 'Vamos a hablar',

      /*Skills*/
      headlineSkill: 'Habilidades',
      btnFrontend: 'frontend',
      btnBackend: 'backend',
      btnExtra: 'extra',
      frontendDescription:
        'En la academia, el enfoque estaba en el framework Angular. Implementé mis primeros proyectos utilizando HTML, CSS y JavaScript.',

      backendDescription:
        'En mis proyectos iniciales, utilicé Firebase, pero quería ampliar mis horizontes y entender mejor lo que sucede en segundo plano. Python con el framework Django y las bases de datos SQL y NoSQL eran perfectos para este propósito. Consulta mi proyecto (Join).',

      extraDescription:
        'Otras habilidades que he adquirido incluyen Scrum, Git (o GitHub) y APIs.Pude implementar Scrum y Git/GitHub en varios proyectos grupales, así como de manera independiente en casa, por ejemplo, para una planificación y ejecución efectivas de proyectos. Utilicé Git/GitHub para crear repositorios y para almacenar, rastrear y gestionar código. Con mi pequeño proyecto (Pokedex), aprendí a interactuar con APIs y a recuperar datos de interfaces.',

      /*Projects*/
      headline: 'Projectos',
      btnProject1: 'Pokedex',
      btnProject2: 'El pollo loco',
      btnProject3: 'Join',
      btnProject4: 'Project 4',
      btnProject5: 'Project 5',

      headlineProject1: 'Pokedex',
      headlineProject2: 'El pollo loco',
      headlineProject3: 'Join',
      // headlineProject4: '',
      // headlineProject5: '',
      descriptionProject1: 'Un Pokedex básico, para este pequeño proyecto, el enfoque estaba en cargar datos e información desde una API.',

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

      /*header*/
      btnAbout: 'About',
      btnSkills: 'Skills',
      btnProjects: 'Projects',
      btnConatct: 'Contact',

      /*start page*/
      slogan: 'Where code becomes art and digital dreams come true',
      btnText: 'See more',

      /*about page*/
      headlineAbout: 'About me',
      professionalCareerHeadline: 'Professional Career',
      professionalCareerText:
        'After completing my schooling, I successfully completed an apprenticeship as a bricklayer.',

      professionalIntensiveHeadline: 'Professional Intensive Phase',

      professionalIntensiveText:
        'During my vocational training, I came into contact with programming through various detours. This fascination drove me to delve even deeper into it, and to achieve a higher level, I eventually enrolled in the Developer Academy.',
      btn: 'Let`s talk',

      /*Skills*/
      headlineSkill: 'Skills',
      btnFrontend: 'Frontend',
      btnBackend: 'Backend',
      btnExtra: 'Extra',
      frontendDescription:
        'At the academy, the focus was on the Angular framework. I implemented my first projects using HTML, CSS, and JavaScript.',

      backendDescription:
        'In my initial projects, I used Firebase, but I wanted to broaden my horizons and better understand what happens behind the scenes. Python with the Django framework and SQL and NoSQL databases were perfect for this purpose. See my project (Join).',

      extraDescription:
        'Additional skills I`ve acquired include Scrum, Git (or GitHub), and APIs.I was able to implement Scrum and Git/GitHub in several group projects as well as independently at home, for instance, for effective project planning and execution. I used Git/GitHub to create repositories and to store, track, and manage code.With my small project (Pokedex), I learned how to interact with APIs and retrieve data from interfaces.',

      /*Projects*/
      headline: 'Projects',
      btnProject1: 'Pokedex',
      btnProject2: 'El pollo loco',
      btnProject3: 'Join',
      btnProject4: 'Project 4',
      btnProject5: 'Project 5',

      headlineProject1: 'Pokedex',
      headlineProject2: 'El pollo loco',
      headlineProject3: 'Join',
      // headlineProject4: '',
      // headlineProject5: '',
      descriptionProject1: 'A simple Pokedex, for this small project, the focus was on loading data and information from an API.',

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

      /*header*/
      btnAbout: 'Über mich',
      btnSkills: 'Fähigkeiten',
      btnProjects: 'Projekte',
      btnConatct: 'Kontakt',

      /*start page*/
      slogan: 'Wo Code zur Kunst wird und digitale Träume wahr werden',
      btnText: 'Weiter',

      /*about page*/
      headlineAbout: 'Über mich',
      professionalCareerHeadline: 'Beruflicher Werdegang',
      professionalCareerText:
        'Nach meiner Schulausbildung habe ich eine Lehre zum Maurer erfolgreich absolviert.',

      professionalIntensiveHeadline: 'Berufliche Intensivphase',

      professionalIntensiveText:
        'Während meiner beruflichen Ausbildung kam ich dann über Umwege mit dem Programmieren in Kontakt. Diese Faszination trieb mich dazu, mich noch intensiver damit zu beschäftigen und um ein höheres Niveau zu erreichen, meldete ich mich schließlich bei der Developer Akademie an.',
      btn: 'Lass uns reden',

      /*Skills*/
      headlineSkill: 'Fähigkeiten',
      btnFrontend: 'Frontend',
      btnBackend: 'Backend',
      btnExtra: 'Extra',
      frontendDescription:
        'In der Akademie lag der Fokus auf dem Framework Angular. Meine ersten Projekte habe ich mit HTML, CSS und JavaScript umgesetzt.',

      backendDescription:
        'In meinen Anfangsprojekten verwendete ich noch Firebase, aber ich wollte über den Tellerrand schauen und besser verstehen, was im Hintergrund alles passiert. Python mit dem Framework Django und den Datenbanken SQL und NoSQL waren perfekt dafür geeignet. Siehe mein Projekt (Join).',

      extraDescription:
        'Weitere Skills, die ich erlernt habe, sind Scrum, Git (bzw. Github) und APIs. Scrum und Git/Github konnte ich in mehreren Gruppenprojekten und auch alleine zu Hause umsetzen, z.B. zur effektiven Planung und Durchführung von Projekten. Dabei verwendete ich Git/Github, um Git-Repositories zu erstellen und Code zu speichern, zu verfolgen und zu verwalten. Mit meinem kleinen Projekt (Pokedex) lernte ich den Umgang mit APIs kennen und wie man Daten von Schnittstellen abruft.',

      /*Projects*/
      headline: 'Projekte',
      btnProject1: 'Pokedex',
      btnProject2: 'El pollo loco',
      btnProject3: 'Join',
      btnProject4: 'Project 4',
      btnProject5: 'Project 5',

      headlineProject1: 'Pokedex',
      headlineProject2: 'El pollo loco',
      headlineProject3: 'Join',
      // headlineProject4: '',
      // headlineProject5: '',
      descriptionProject1: 'Ein einfacher Pokedex, bei diesem kleinen Projekt lag der Fokus auf das Laden von Daten und Informationen über einer API.',

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
