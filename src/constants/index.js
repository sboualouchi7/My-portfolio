import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  algo,
  ibo,
  shopify,
  carrent,
  scren,
  blog,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web App Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Web & App Designer",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Java Full-stack Developer",
    company_name: "ALGO Consulting Group",
    icon: algo,
    iconBg: "#383E56",
    date: "April 2023 - July 2023",
    points: [
      "During my internship at Algo Consulting Group, I developed a desktop application for manual train ticket management during system outages. Using Java 8, JavaFX, and Hibernate, I implemented features for transaction management and data handling. This experience strengthened my skills in desktop application development, database integration, and problem-solving in real-world scenarios.",
    ],
  },
  {
    title: "Java Full-stack Developer",
    company_name: "Ibo-Service",
    icon: ibo,
    iconBg: "#383E56",
    date: "April 2024 - July 2024",
    points: [
      "During a 3-month project with IBO Service, I developed a web platform for real estate service management, enabling property reservations, user management, and secure authentication. Using Java 22, Spring Boot, Thymeleaf, and Spring Security, I implemented robust back-end functionalities and integrated MySQL for efficient data handling. The front-end was designed with Bootstrap 5 to ensure a responsive and user-friendly interface. This project strengthened my expertise in full-stack development, RESTful APIs, and secure application design, delivering a practical solution for real estate operations.",
    ],
  },];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "PHP/Laravel",
        color: "green-text-gradient ",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/sboualouchi7",
  },
  {
    name: "Medical Cabinet Management System",
    description:
      "Web-based platform for managing patient records and appointments in medical cabinets. Enables CRUD operations for patients and rendezvous. Provides a streamlined solution for healthcare professionals to organize and track patient interactions efficiently.",
    tags: [
      {
        name: "Java/JEE",
        color: "blue-text-gradient",
      },
      {
        name: "Spring boot",
        color: "green-text-gradient",
      },
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
    ],
    image: scren,
    source_code_link: "https://github.com/sboualouchi7",
  },
  {
    name: "Blog Platform",
    description:
      "A React.js and Express.js web app for posting and reading informatique blogs. Enables seamless blog creation and viewing, showcasing my full-stack development skills",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "Mysql",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/sboualouchi7",
  },
];

export { services, technologies, experiences, testimonials, projects };
