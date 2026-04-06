import {
  web,
  react,
  mobile,
  algo,
  MAM,
  ASU,
  Mentality,
  ITI,
  LD,
} from "./assets";
import {
  bootstrap,
  css,
  framermotion,
  github,
  html,
  javascript,
  jQuery,
  reactjs,
  sass,
  tailwind,
  threejs,
  typescript,
} from "./assets";

import { Bonsai, Crud, Elearning, FurniStore, store, Clinic , Knowhere} from "./assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    href: "#about",
  },
  {
    id: "learn",
    title: "Learn",
    href: "#learn",
  },
  {
    id: "contact",
    title: "Contact",
    href: "#contact",
  },
];

const info = [
  { title: "Web Developer", icon: web },
  {
    title: "React",
    icon: react,
  },
  {
    title: "Responsive Design",
    icon: mobile,
  },
  {
    title: "Algorithm & DS",
    icon: algo,
  },
];

const learnExperiences = [
  {
    title: "Logic Design InternShip",
    icon: LD,
    iconBg: "#E6DEDD",
    date: "Jul. 2025 - Sep. 2025",
    points: [
      "Worked on real client projects and contributed to the development of many live websites",
      "Completed multiple frontend tasks using HTML, CSS, JavaScript, and React.js, ensuring responsiveness and user-friendly design.",
      "Collaborated with the team on real workflows, gaining experience in project delivery and client requirements.",
    ],
  },
  {
    title: "Information Technology Institute (ITI) InternShip",
    icon: ITI,
    iconBg: "#E6DEDD",
    date: "Jul. 2025 - Aug. 2025",
    points: [
      "Completed intensive training in HTML5, CSS3, JavaScript (ES6), React.js and modern web technologies.",
      "Led a final project as Team Leader, applying technical and leadership skills to deliver a complete web solution",
      "Deal with Json Server to simulate APIs for the project.",
      "Applied best practices in state management, UI/UX design, and API integration, ensuring scalability and smooth user experience. ",
    ],
  },
  {
    title: "Mentality",
    icon: Mentality,
    iconBg: "#383E56",
    date: "Aug. 2024 - Apr. 2025",
    points: [
      "Completed a comprehensive front-end development program covering HTML5, CSS3, JavaScript, SASS, Bootstrap, Tailwind CSS, jQuery, TypeScript, and React.js.",
      "Learned how CRUD operations work and implemented them using modern frameworks.",
      "Worked with APIs and integrated them into dynamic user interfaces.",
      "Applied responsive design principles and ensured cross-browser compatibility across various devices.",
    ],
  },
  {
    title: "CS Student ASU",
    icon: ASU,
    iconBg: "#E6DEDD",
    date: "Oct. 2022 - Jun. 2026",
    points: [
      "Computer Science student at Ain Shams University, specializing in Information Systems.",
      "Worked with various programming languages including C++, Java, and Python.",
      "Strong background in Algorithms, Data Structures, and Operating Systems.",
      "Built multiple projects across different fields such as Data Security, Algorithms, Data Structures, Operating Systems, AI, Data Processing, and more.",
    ],
  },
  {
    title: "MAM Student Activity",
    icon: MAM,
    iconBg: "#383E56",
    date: "3 ~ 4 Weeks",
    points: [
      "Joined a student activity focused on front-end web development.",
      "Learned HTML5, CSS3, JavaScript, and Bootstrap 5 through hands-on practice.",
      "Built a fully responsive furniture store as a final project.",
      "Received a certificate of participation for completing the training.",
    ],
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap5",
    icon: bootstrap,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "jQuery",
    icon: jQuery,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "Framer Motion",
    icon: framermotion,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "github",
    icon: github,
  },
];

const techColors = {
  "#HTML5": "#f97316", // orange
  "#CSS3": "#2563eb", // blue
  "#JS": "#facc15", // yellow
  "#react": "#06b6d4", // cyan
  "#Tailwind": "#38bdf8", // sky
  "#Hooks": "#a855f7", // purple
  "#Bootstrap5": "#6610f2", // indigo
  "#API": "#14b8a6", // teal
  "#Responsive": "#ec4899", // pink
};

const projects = [
  {
    name: "Knowhere Web App",
    description:
      "Designed and developed a Full Stack Booking System For KNOWHERE Co-Working Space. ",
    tags: [
      {
        name: "#react",
      },
      {
        name: "#Django",
      },
      {
        name: "#API",
      },
    ],
    image: Knowhere,
    // source_code_link: "https://github.com/Omarwafik/clinic-management-system",
    live_demo_link: "https://knowhere-eg.com/",
  },
  {
    name: "Clinic Management Project",
    description:
      "Led a final project as Team Leader, Built a responsive clinic management dashboard, supporting full CRUD operations (users, doctors, appointments)",
    tags: [
      {
        name: "#react",
      },
      {
        name: "#Bootstrap5",
      },
      {
        name: "#API",
      },
    ],
    image: Clinic,
    source_code_link: "https://github.com/Omarwafik/clinic-management-system",
    live_demo_link: "https://omarwafik.github.io/clinic-management-system/",
  },
  {
    name: "Bonsai Page",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "#HTML5",
      },
      {
        name: "#CSS3",
      },
      {
        name: "#JS",
      },
    ],
    image: Bonsai,
    source_code_link: "https://github.com/Omarwafik/Bonsai_Page",
    live_demo_link: "https://omarwafik.github.io/Bonsai_Page",
  },

  {
    name: "CRUD System",
    description:
      "Built a full CRUD User Management System using React.js and Local Storage, to persist data without the need for a backend or API, Used React Hooks for state management and side effects.",
    tags: [
      {
        name: "#react",
      },
      {
        name: "#Tailwind",
      },
      {
        name: "#Hooks",
      },
    ],
    image: Crud,
    source_code_link: "https://github.com/Omarwafik/Crud-System",
    live_demo_link: "https://omarwafik.github.io/Crud-System/",
  },

  {
    name: "Elearning Platform",
    description:
      "Developed a static front-end for an E-learning platform with multiple course pages, Implemented login page with form validation using regular expressions, Utilized local storage to manage user session data.",
    tags: [
      {
        name: "#HTML5",
      },
      {
        name: "#CSS3",
      },
      {
        name: "#JS",
      },
    ],
    image: Elearning,
    source_code_link: "https://github.com/Omarwafik/Elearning_Platform",
    live_demo_link: "https://omarwafik.github.io/Elearning_Platform/",
  },

  {
    name: "Furniture Store",
    description:
      "Developed as part of university training program,Implemented responsive design principles for cross-device compatibility, Demonstrated proficiency in core web technologies.",
    tags: [
      {
        name: "#HTML5",
      },
      {
        name: "#Bootstrap5",
      },
      {
        name: "#Responsive",
      },
    ],
    image: FurniStore,
    source_code_link: "https://github.com/Omarwafik/Furni_Store",
    live_demo_link: "https://omarwafik.github.io/Furni_Store/",
  },
  {
    name: "Simple Store",
    description:
      "Simple Store With Products With a Lot Of varieties, Using Fake Api for the data to fetch and Allowing users to search among the product.",
    tags: [
      {
        name: "#Bootstrap5",
      },
      {
        name: "#API",
      },
      {
        name: "#JS",
      },
    ],
    image: store,
    source_code_link: "https://github.com/Omarwafik/Simple_Store",
    live_demo_link: "https://omarwafik.github.io/Simple_Store/",
  },
];

export { info, learnExperiences, technologies, projects, techColors };
