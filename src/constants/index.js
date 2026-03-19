import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";

export const HERO_CONTENT = `Full Stack Developer with 2+ years of experience building scalable, production-grade web applications across the MERN stack, Remix / React Router v7, Spring Boot, and PostgreSQL. Specialized in geospatial data platforms (PostGIS, Mapbox, Leaflet.js) and open-source environmental data infrastructure. Currently pursuing an MSc in Geoinformatics at the University of Münster, directly applying spatial data science research to real-world engineering challenges.`;

export const ABOUT_TEXT = `Full Stack Developer with 2+ years of experience building scalable, production-grade web applications across the MERN stack, Remix / React Router v7, Spring Boot, and PostgreSQL. Specialized in geospatial data platforms (PostGIS, Mapbox, Leaflet.js) and open-source environmental data infrastructure. Comfortable owning features end-to-end: relational schema design, RESTful API development, containerized deployment with Docker, and responsive TypeScript / Tailwind CSS frontends. Currently pursuing an MSc in Geoinformatics at the University of Münster, directly applying spatial data science research to real-world engineering challenges.`;

export const EXPERIENCES = [
  {
    year: "04/2025 – Present",
    role: "Full Stack Developer",
    company: "openSenseMap / opensenselab.org",
    location: "Münster, Germany",
    description: `Engineered a high-performance geospatial data download pipeline (Remix, Node.js, Drizzle ORM, PostgreSQL) serving thousands of active IoT sensor users. Refactored authentication from session-based to JWT and implemented interactive map clustering for mobile devices (Mapbox GL JS). Added full i18n support and authored comprehensive OpenAPI / SwaggerUI REST documentation using Zod schemas and JSDoc.`,
    technologies: ["Remix", "Node.js", "PostgreSQL", "Mapbox GL JS", "Drizzle ORM", "Docker", "JWT", "TypeScript"],
  },
  {
    year: "04/2022 – 09/2022",
    role: "Web Developer Intern",
    company: "Allievo",
    location: "Kerala, India",
    description: `Built a full-stack decentralized insurance platform (PHP, Bootstrap, Solidity) integrating Ethereum smart contracts to automate policy registration and claim settlements, eliminating manual intermediaries. Designed and deployed tamper-proof smart contracts on a Proof of Authority Ethereum network, implementing on-chain fraud prevention logic.`,
    technologies: ["PHP", "Bootstrap", "Solidity", "Ethereum"],
  },
];

export const PROJECTS = [
  {
    title: "openSenseMap-edu",
    subtitle: "Master's Thesis — University of Münster",
    image: project1,
    description:
      "A web-based SQL learning tool using real-world IoT sensor data from openSenseMap to teach spatial database concepts to secondary school students in NRW. Backend: Spring Boot with RESTful controllers, a sandboxed query execution engine, and PostGIS for spatial queries; frontend features a CodeMirror SQL editor with real-time result visualization and a Leaflet.js map with color-coded sensor markers.",
    technologies: ["Spring Boot", "PostGIS", "PostgreSQL", "React", "CodeMirror", "Leaflet.js", "Java"],
    link: "https://github.com/JerryVincent/opensensemap-edu",
  },
  {
    title: "BreezePlan",
    subtitle: "Geoinformation in Society — MSc Coursework",
    image: project2,
    description:
      "A weather-driven outdoor activity planner (React, Vite, React Router v7, Leaflet.js) that detects the user's geolocation, fetches live weather data via REST API, and recommends suitable outdoor activities based on real-time conditions. Integrated Google Maps routing for turn-by-turn directions and location-specific safety tips.",
    technologies: ["React", "Vite", "React Router v7", "Leaflet.js", "MUI", "React Bootstrap", "axios"],
    link: "https://github.com/JerryVincent/Breezeplan_Frontend",
    liveLink: "https://breezeplan.netlify.app/",
  },
];

export const CONTACT = {
  address: "Münster, Germany",
  phoneNo: "+49 15736966402",
  email: "jerrynambalampara111@gmail.com",
};
