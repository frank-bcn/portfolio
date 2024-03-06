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
        'Mi trayectoria profesional comenzó en la construcción, donde adquirí conocimientos sólidos en el oficio de la albañilería. Esta experiencia me ayudó a comprender construcciones complejas, influyendo positivamente en mis habilidades de programación. Las habilidades adquiridas en la construcción no solo mejoraron mi experiencia técnica, sino que también impulsaron el trabajo en equipo y la comunicación. En mis proyectos de programación, priorizo un enfoque integral, haciendo hincapié no solo en aspectos técnicos, sino también en una colaboración eficiente.',

      professionalIntensiveHeadline: 'Fase Intensiva Profesional',

      professionalIntensiveText:
        'Desde mi juventud, he sentido una pasión por la tecnología y la programación. La posibilidad de sentarme por las noches y perderme en este mundo fascinante con mis propios proyectos me llevó a convertir mi pasión en un camino profesional gratificante. Esta decisión me permite trabajar de manera continua en proyectos emocionantes y profundizar mis habilidades. El mundo de la tecnología y la programación me brinda la satisfacción que no encontré en mi profesión anterior. Este cambio profesional conduce a un viaje profesional más satisfactorio y gratificante.',
      btn: 'Vamos a hablar',

      /*Skills*/
      headlineSkill: 'Habilidades',
      btnFrontend: 'frontend',
      btnBackend: 'backend',
      btnExtra: 'extra',
      frontendDescription:
      'A lo largo de mi desarrollo profesional, he adquirido conocimientos extensos en la aplicación del framework Angular. Las habilidades previas en HTML, CSS y JavaScript sirvieron como una base sólida, permitiéndome implementar métodos de entrada reflexivos. Esto no solo me permitió utilizar Angular superficialmente, sino también comprenderlo y desplegarlo eficientemente como un marco profundamente integrado y orientado a objetos.',

      backendDescription:
      'Después de mi formación intensiva en el ámbito del frontend, continué sin problemas mi carrera en el backend. Al principio, confiaba en Firebase para obtener apoyo adicional. Más tarde, amplié mi repertorio para incluir el framework Django y construí un sólido fundamento en conjunción con MySQL.',

      extraDescription:
      'Durante mi formación, adquirí competencias valiosas que me permiten interactuar sin problemas con APIs. Estas habilidades me capacitan para aprovechar interfaces e integrar datos de manera efectiva desde diversas fuentes. Además, tengo un conocimiento profundo en el uso de Git para una gestión eficiente de versiones, junto con la aplicación de métodos Scrum para una colaboración estructurada y ágil. Además, profundicé mis habilidades en la plataforma GitHub para gestionar y desarrollar proyectos de código colaborativo con éxito. Por último, también cuento con una amplia experiencia en Docker, lo que me permite empaquetar y desplegar aplicaciones en contenedores ligeros, mejorando la escalabilidad y portabilidad de mis proyectos de desarrollo.',

      /*Projects*/
      headline: 'Projectos',
      btnProject1: 'El pollo loco',
      btnProject2: 'Join',
      btnProject3: 'Project 3',
      btnProject4: 'Project 4',
      btnProject5: 'Project 5',
      headlineProject1: 'El pollo loco',
      headlineProject2: 'Join',
      headlineProject3: '',
      headlineProject4: '',
      headlineProject5: '',
      descriptionProject1: 'Un juego simple de salto y carrera en 2D basado en un enfoque orientado a objetos. El enfoque principal durante la implementación fue el uso de Canvas. Ayuda a El-Pollo-Loco a encontrar monedas y botellas de veneno para luchar contra el mortal jefe final.',

      descriptionProject2: 'Un gestor de tareas inspirado en el sistema Kanban. Crea y organiza tareas utilizando funciones de arrastrar y soltar, asigna usuarios y categorías.',

      descriptionProject3: '',

      descriptionProject4: '',

      descriptionProject5: '',

      /*contact*/
      headlineContact: 'Contacto',
      email: 'info@frank-sinnigen.de',
      address: 'área metropolitana de barcelona',
      placeholderName: 'Nombre completo',
      placeholderEmail: 'Su dirección de correo electrónico',
      placeholderMessage: 'Su mensaje',
      send:'enviar',
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
        'My professional journey began in construction, where I gained solid knowledge in the craft of masonry. This experience helped me comprehend complex structures, positively influencing my programming skills. The acquired skills in construction not only enhanced my technical expertise but also fostered teamwork and communication. In my programming projects, I prioritize a holistic approach, emphasizing not only technical aspects but also efficient collaboration.',

      professionalIntensiveHeadline: 'Professional Intensive Phase',

      professionalIntensiveText:
        'Since my youth, I have been passionate about technology and programming. The opportunity to sit in the evenings working on my own projects and getting lost in this fascinating world led me to turn my passion into a fulfilling career path. This decision allows me to continuously work on exciting projects and deepen my skills. The world of technology and programming provides me with the fulfillment that I did not find in my previous profession. This professional change leads to a more satisfying and fulfilling career journey.',
      btn: 'Let`s talk',

      /*Skills*/
      headlineSkill: 'Skills',
      btnFrontend: 'Frontend',
      btnBackend: 'Backend',
      btnExtra: 'Extra',
      frontendDescription:
        'Throughout my professional development, I have acquired extensive knowledge in the application of the Angular framework. The pre-existing skills in HTML, CSS, and JavaScript served as a solid foundation, enabling me to implement thoughtful entry methods. This allowed me not only to superficially use Angular but also to comprehend and efficiently deploy it as a deeply integrated, object-oriented framework.',

      backendDescription:
        'After my intensive training in the frontend domain, I seamlessly continued my career in the backend. In the beginning, I relied on Firebase for additional support. Later, I expanded my repertoire to include the Django framework and built a solid foundation in conjunction with MySQL.',

      extraDescription:
        'During my education, I gained valuable competencies that enable me to seamlessly interact with APIs. These skills empower me to tap into interfaces and effectively integrate data from various sources. Additionally, I have profound knowledge in using Git for efficient version management, along with the application of Scrum methods for structured and agile collaboration. Furthermore, I deepened my skills on the GitHub platform to successfully manage and develop collaborative code projects. Lastly, I also possess extensive experience with Docker, allowing me to package and deploy applications in lightweight containers, enhancing the scalability and portability of my development projects.',

      /*Projects*/
      headline: 'Projects',
      btnProject1: 'El pollo loco',
      btnProject2: 'Join',
      btnProject3: 'Project 3',
      btnProject4: 'Project 4',
      btnProject5: 'Project 5',
      headlineProject1: 'El pollo loco',
      headlineProject2: 'Join',
      headlineProject3: '',
      headlineProject4: '',
      headlineProject5: '',
      descriptionProject1: 'A simple 2D jump-and-run game based on an object-oriented approach. The main focus during implementation was on the use of Canvas. Help El-Pollo-Loco find coins and poison bottles to fight against the deadly end boss.',

      descriptionProject2: 'Task manager inspired by the Kanban System. Create and organize tasks using darg and drop funktion, assign users and categories.',

      descriptionProject3: '',

      descriptionProject4: '',

      descriptionProject5: '',

      /*contact*/
      headlineContact: 'Contact',
      email: 'info@frank-sinnigen.de',
      address: 'Barcelona metropolitan area ',
      placeholderName: 'Your Name',
      placeholderEmail: 'Your email address',
      placeholderMessage: 'Your message',
      send:'Send',
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
        'Meine berufliche Reise begann im Bauwesen, wo ich fundierte Kenntnisse im Maurerhandwerk erwarb. Diese Erfahrung half mir, komplexe Konstruktionen zu verstehen, was sich positiv auf meine Programmierfähigkeiten auswirkt. Die erworbenen Fähigkeiten im Bauhandwerk stärkten nicht nur meine technische Expertise, sondern förderten auch meine Teamarbeit und Kommunikation. In meinen Programmierprojekten lege ich Wert auf einen ganzheitlichen Ansatz, der nicht nur technische Aspekte, sondern auch effiziente Zusammenarbeit einschließt',

      professionalIntensiveHeadline: 'Berufliche Intensivphase',

      professionalIntensiveText:
        'Seit meiner Jugend habe ich mich für Technologie und Programmierung begeistert. Die Möglichkeit, abends an eigenen Projekten zu sitzen und mich in dieser faszinierenden Welt zu verlieren, hat mich dazu bewogen, meine Leidenschaft in einen erfüllenden Karriereweg umzusetzen. Diese Entscheidung ermöglicht es mir, kontinuierlich an spannenden Projekten zu arbeiten und meine Fähigkeiten weiter zu vertiefen. Die Welt der Technologie und Programmierung bietet mir die Erfüllung, die ich in meinem früheren Beruf nicht gefunden habe. Dieser berufliche Wandel führt zu einer zufriedenstellenderen und erfüllenderen beruflichen Reise.',
      btn: 'Lass uns reden',

      /*Skills*/
      headlineSkill: 'Fähigkeiten',
      btnFrontend: 'Frontend',
      btnBackend: 'Backend',
      btnExtra: 'Extra',
      frontendDescription:
        'Im Verlauf meiner beruflichen Entwicklung habe ich umfassende Kenntnisse in der Anwendung des Angular-Frameworks erworben. Die bereits vorhandenen Fähigkeiten in HTML, CSS und JavaScript dienten als solide Grundlage, welche mir ermöglichte, durchdachte Einstiegsmethoden anzuwenden. Dies ermöglichte mir, Angular nicht nur oberflächlich zu nutzen, sondern es als ein tief integriertes, objektorientiertes Framework in seiner vollen Tiefe zu verstehen und effizient einzusetzen.',

      backendDescription:
        'Nach meiner intensiven Ausbildung im Frontend-Bereich setzte ich meine berufliche Laufbahn nahtlos im Backend fort. In den Anfängen stützte ich mich auf Firebase für zusätzliche Unterstützung. Später erweiterte ich mein Repertoire um das Django-Framework und konnte in Verbindung mit MySQL ein solides Fundament aufbauen.',

      extraDescription:
        'In meiner Ausbildung habe ich wertvolle Kompetenzen erworben, die es mir ermöglichen, nahtlos mit APIs zu interagieren. Diese Fähigkeiten befähigen mich, Schnittstellen anzuzapfen und Daten effektiv aus verschiedenen Quellen zu integrieren. Zudem habe ich fundierte Kenntnisse in der Verwendung von Git für effizientes Versionsmanagement sowie die Anwendung von Scrum-Methoden zur strukturierten und agilen Zusammenarbeit erworben. Darüber hinaus konnte ich meine Fähigkeiten auf der GitHub-Plattform vertiefen, um gemeinsame Codeprojekte erfolgreich zu verwalten und zu entwickeln. Nicht zuletzt verfüge ich auch über umfangreiche Erfahrungen mit Docker, wodurch ich in der Lage bin, Anwendungen in leichtgewichtigen Containern zu verpacken und bereitzustellen, was die Skalierbarkeit und Portabilität meiner Entwicklungsprojekte weiter optimiert.',

      /*Projects*/
      headline: 'Projekte',
      btnProject1: 'El pollo loco',
      btnProject2: 'Join',
      btnProject3: 'Project 3',
      btnProject4: 'Project 4',
      btnProject5: 'Project 5',
      headlineProject1: 'El pollo loco',
      headlineProject2: 'Join',
      headlineProject3: '',
      headlineProject4: '',
      headlineProject5: '',
      descriptionProject1: 'Ein einfaches 2D-Jump-and-Run-Spiel, basierend auf einem objektorientierten Ansatz. Das Hauptaugenmerk bei der Umsetzung lag hierbei auf der Nutzung von Canvas. Hilf El-Pollo-Loco, Münzen und Giftflaschen zu finden, um gegen den tödlichen Endboss zu kämpfen.',

      descriptionProject2: 'Ein Aufgabenmanager, inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mithilfe von Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.',

      descriptionProject3: '',

      descriptionProject4: '',

      descriptionProject5: '',

      /*contact*/
      headlineContact: 'Kontakt',
      email: 'info@frank-sinnigen.de',
      address: 'Metropolregion Barcelona',
      placeholderName: 'Ihr Vor und Nachname',
      placeholderEmail: 'Ihre Email Adresse',
      placeholderMessage: 'Ihre Nachricht',
      send:'Senden',
    },
  ];

  constructor() {}

  onToggleChange(value: string) {
    this.selectedValue = value;
  }

  getCurrentLanguage() {
    return this.languages.find((lang) => lang.code === this.selectedValue);
  }
}
