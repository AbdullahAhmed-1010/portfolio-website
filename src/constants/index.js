import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  python,
  java,
  c,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  express,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  blog,
  digest,
  education,
  hackathon,
  onlinecertificate,
  tripguide,
  threejs,
  postgres,
  appwrite,
  cursor,
  googlegemini,
  huggingface,
  langchain,
  udemyFullStack,
  gitCertificate,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "technologies",
    title: "Technologies",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Generative AI Developer",
    icon: creator,
  },
  {
    title: "Restful API Handling",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C",
    icon: c,
  },
  // {
  //   name: "Appwrite",
  //   icon: appwrite,
  // },
  {
    name: "Cursor",
    icon: cursor,
  },
  {
    name: "Langchain",
    icon: langchain,
  },
  {
    name: "Hugging Face",
    icon: huggingface,
  },
  // {
  //   name: "Gemini",
  //   icon: googlegemini,
  // },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Bachelor of Technology",
    company_name: "Calcutta Institute of Engineering and Management",
    icon: education,
    iconBg: "#383E56",
    date: "August 2023 - July 2027 (expected)",
    points: [
      "Computer Science and Engineering | MAKAUT",
      "Focusing on backend development, databases, and system architecture",
      "Building practical projects alongside academic coursework",
    ],
  },
  {
    title: "Smart India Hackathon 2024",
    company_name: "2nd Place Winner",
    icon: hackathon,
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "Secured 2nd Place in Internal Smart India Hackathon (SIH) 2024",
      "Recognized for innovative problem-solving and team collaboration",
      "Developed solutions addressing real-world challenges",
    ],
  },
  {
    title: "Techno Geeks Hack 1.0",
    company_name: "Participant",
    icon: hackathon,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Participated in Techno Geeks Hack 1.0 Hackathon",
      "Gained hands-on experience in rapid prototyping",
      "Worked on real-world problem statements",
    ],
  },
  {
    title: "Full-Stack Web Development Bootcamp",
    company_name: "Udemy - Angela Yu",
    icon: onlinecertificate,
    iconBg: "#E6DEDD",
    date: "Completed",
    points: [
      "Completed 'The Complete Full-Stack Web Development Bootcamp'",
      "Covered frontend, backend, databases, and deployment fundamentals",
      "Built multiple projects applying learned concepts",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Abdullah does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Abdullah optimized our website, our traffic increased by 50%. We can't thank him enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const certifications = [
  {
    title: "Complete Full Stack Web Development Bootcamp",
    issuer: "Udemy - Angela Yu",
    date: "2024",
    image: udemyFullStack,
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-af98a727-8772-4cbc-b436-00b704e772a5.jpg",
  },
  {
    title: "Git and Version Control - Certified Git Practitioner",
    issuer: "W3 Schools - Thomas",
    date: "2025",
    image: gitCertificate,
    link: "https://drive.google.com/file/d/1oavhHtdpWLSBfs0zts97ictWpWAqM7xf/view",
  },
];

const projects = [
  {
    name: "HireSense - Modern Job Portal Platform",
    description:
      "HireSense is a full-stack job portal application designed to bridge the gap between job seekers and recruiters through a clean UI, scalable backend, and real-world production practices. It enables recruiters to post and manage jobs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn/ui",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "multer",
        color: "blue-text-gradient",
      },
      {
        name: "cloudinary",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "jwt",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/AbdullahAhmed-1010/HireSense",
  },
  {
    name: "Blog Media - Blogging Platform",
    description:
      "Developed a blogging platform using Node.js, Express, and MongoDB, featuring secure RESTful APIs for user and content management, enabling users to create, read, update and delete blog posts (CRUD operations).",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "jwt",
        color: "blue-text-gradient",
      },
      {
        name: "role-based access",
        color: "green-text-gradient",
      },
      {
        name: "crud operations",
        color: "pink-text-gradient",
      },
      {
        name: "multer",
        color: "blue-text-gradient",
      },
      {
        name: "cloudinary",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/AbdullahAhmed-1010/Blog-Media",
  },
  {
    name: "Daily-Digest",
    description:
      "This is a modern blog application built using React for the frontend and Appwrite as the backend-as-a-service. The app enables users to create, read, update, and delete blog posts (CRUD operations) with a clean and responsive user interface for user and content management, enabling users to create, read, update and delete blog posts (CRUD operations).",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "jwt",
        color: "blue-text-gradient",
      },
      {
        name: "role-based access",
        color: "green-text-gradient",
      },
      {
        name: "crud operations",
        color: "pink-text-gradient",
      },
      {
        name: "appwrite",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
    ],
    image: digest,
    source_code_link: "https://github.com/AbdullahAhmed-1010/Daily-Digest",
  },
];

export { services, technologies, experiences, certifications, projects };
