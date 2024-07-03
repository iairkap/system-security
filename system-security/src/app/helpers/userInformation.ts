import { listOfInterests } from "./listOfInterests";

export const userInformation = [
  {
    id: 1,
    name: "Iair",
    lastName: "Kaplun",
    profession: "Full Stack Developer 🧑🏽‍💻",
    profilePicture: "/profilePicture.jpeg",
    age: 30,
    email: "iairkap@gmail.com",
    interests: [
      listOfInterests[0],
      listOfInterests[1],
      listOfInterests[2],
      listOfInterests[3],
      listOfInterests[6],
    ],
    aboutMe: `Soy un Desarrollador Full Stack recién graduado de Soy Henry, con experiencia en Reactjs, Next.js, Redux, JavaScript, Git, TypeScript, Html, Css, Postgresql, Sequelize, Express.js, y Node.js. Aporto una perspectiva única a mi trabajo, con una formación en la industria audiovisual. Esta experiencia ha perfeccionado mi sentido del diseño de interfaces y la creatividad, permitiéndome infundir a mi trabajo una mezcla única de competencia técnica y sensibilidad estética.
    Mi transición de carrera hacia el desarrollo full-stack está impulsada por mi amor por la tecnología y la creatividad. Me apasiona combinar mis diversas habilidades para crear soluciones innovadoras y sin fisuras para los desafíos digitales de hoy. Como alguien que naturalmente realiza múltiples tareas, me siento cómodo manejando proyectos que requieren conocimiento interfuncional, y siempre aspiro a entregar un trabajo que no solo sea eficiente y funcional, sino también visualmente atractivo.
    Como entusiasta de la tecnología, disfruto de estar al día con las nuevas tecnologías y busco constantemente oportunidades para expandir mis habilidades. Me encanta la naturaleza dinámica y resolutiva de la programación y la creatividad involucrada en el diseño de interfaces de usuario.
    Estoy deseoso de llevar mi fusión única de creatividad audiovisual y desarrollo full-stack a nuevos proyectos y desafíos. No dudes en contactarme si buscas a alguien que pueda pensar fuera de la caja y añadir un toque creativo a tus soluciones tecnológicas. ¡Transformemos juntos el paisaje digital!`,
    socialMedia: [
      {
        id: 1,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/iair-kaplun-97145a88/",
        icon: "/linkedin.svg",
      },
      {
        id: 2,
        name: "GitHub",
        url: "https://github.com/iairkap",
        icon: "/github.svg",
      },
      {
        id: 3,
        name: "Portfolio",
        url: "https://iairkaplun.vercel.app/",
        icon: "/portfolio.svg",
      },
    ],
  },
];
