import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png";
import PROJECT_IMG_4 from "../assets/images/project-4.png";
import PROJECT_IMG_5 from "../assets/images/project-5.png";
import PROJECT_IMG_6 from "../assets/images/project-6.png";
import PROJECT_IMG_7 from "../assets/images/project-7.png";

export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "TypeScript", level: 90, color: "bg-blue-600" },
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
      { name: "Framer Motion", level: 85, color: "bg-pink-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building robust server-side solutions",
    skills: [
      { name: "Node.js", level: 90, color: "bg-green-500" },
      { name: "Python", level: 85, color: "bg-yellow-500" },
      { name: "REST APIs", level: 92, color: "bg-orange-500" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Managing and optimizing data storage",
    skills: [
      { name: "MongoDB", level: 88, color: "bg-green-600" },
      { name: "MySQL", level: 80, color: "bg-red-500" },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Deploying and scaling applications",
    skills: [
      { name: "Docker", level: 82, color: "bg-blue-600" },
      { name: "AWS", level: 78, color: "bg-orange-600" },
      { name: "Git", level: 95, color: "bg-orange-700" },
      { name: "CI/CD", level: 75, color: "bg-purple-600" },
    ],
  },
];

export const TECH_STACK = [
  "JavaScript",
  "HTML5",
  "CSS3",
  "Webpack",
  "Vite",
  "Figma",
];

export const STATS = [
  { number: "10+", label: "Projects Completed" },
  { number: "1+", label: "Years Experience" },
  { number: "20+", label: "Technologies" },
  { number: "100%", label: "Client Satisfaction" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "RFID Based Electronic Voting Machine",
    description:
      "A secure voting system that I developed using an IoT-based model. It uses RFID cards to authenticate voters, ensuring that each individual can vote only once. The system records votes electronically, delivering fast, tamper-proof, and accurate results.",
    image: PROJECT_IMG_1,
    tags: ["React", "Tailwind", "Arduino IDE", "Python", "MySQL"],
    featured: false,
    category: "IOT Project",
  },
  {
    id: 2,
    title: "Online News Web Application",
    description:
      "A dynamic platform I developed to deliver real-time news updates across various categories. Built with modern web technologies, it features user-friendly navigation, responsive design, and admin-controlled content management. The application ensures seamless access to the latest news on any device.",
    image: PROJECT_IMG_2,
    tags: ["HTML", "CSS", "JavaScript", "MongoDB",],
    liveUrl: "https://youtu.be/tUnGudIBBjQ",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Banking Application",
    description:
      "A secure and intuitive mobile app I developed to simulate core banking functionalities. It allows users to manage accounts, perform fund transfers, view transaction history, and check balances. Designed with a focus on user experience, the app ensures smooth navigation and real-time data handling through Android Studio.",
    image: PROJECT_IMG_3,
    tags: ["Android Studio", "Java", "APIs", "Android SDK"],
    liveUrl: "https://youtu.be/fZK57PxKC-0",
    githubUrl: "#",
    featured: true,
    category: "Android App",
  },
  {
    id: 4,
    title: "Employee Leave Management System",
    description:
      "An internal tool developed to streamline the process of applying, approving, and tracking employee leaves in an organization. The system allows admins to manage users and leave requests, while employees can view their leave balances and submit applications.",
    image: PROJECT_IMG_4,
    tags: ["React", "TypeScript", "Node.js", "MongoDb"],
    liveUrl: "https://youtu.be/yKB9OyM-ao4",
    githubUrl: "#",
    featured: false,
    category: "Web App",
  },

  {
    id: 5,
    title: "Resume Builder App",
    description:
      "a fully functional Resume Builder App using the MERN stack along with Tailwind CSS for a clean, modern UI.",
    image: PROJECT_IMG_5,
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDb"],
    liveUrl: "https://youtu.be/q3u_fpkjLk8",
    githubUrl: "#",
    featured: false,
    category: "Web App",
  },

  {
    id: 6,
    title: "Expense Tracker App",
    description:
      "This app includes user authentication with JWT, income and expense tracking, interactive charts, and the ability to export data in Excel format.",
    image: PROJECT_IMG_6,
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDb"],
    liveUrl: "https://youtu.be/PQnbtnsYUho",
    githubUrl: "#",
    featured: true,
    category: "Web App",
  },

  
];

export const JOURNEY_STEPS = [
  {
    year: "2022",
    title: "Started Coding Journey",
    company: "Self-taught",
    description:
      "Began learning web development with HTML, CSS, and JavaScript. Built my first website and fell in love with creating digital experiences.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2023",
    title: "First Internship",
    company: "Genisis Technology Solutions.",
    description:
      "Joined as a full stack developer intern, working with React and learning modern development practices. Contributed to 3 client projects.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2024",
    title: "Information Science Degree",
    company: "Bapuji Intitute of Engineering and Technology",
    description:
      "Graduated with honors, specializing in web technologies and software engineering. Led the final year project team.",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
  {
    year: "2025 - 2027",
    title: "Msc in Computer Science",
    company: "International University of Applied Sciences (Present)",
    description:
      "Promoted to full-time developer role. Built end-to-end applications using MERN stack and led junior developer mentoring.",
    icon: GraduationCap,
    color: "bg-orange-500",
  },
  {
    year: "2025",
    title: "Freelance & Open Source",
    company: "Independent",
    description:
      "Currently started freelancing and contributing to open source projects. Launched 1 successful web applications for clients.",
    icon: Rocket,
    color: "bg-pink-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices",
  },
];

export const SOCIAL_LINKS = [
    {
      name: "GitHub",
      icon: FiGithub,
      url: "https://github.com/RohanSAnkad/RohanAnkad",
      color: "hover:text-gray-400",
      bgColor: "hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "https://www.linkedin.com/in/rohan-s-ankad-038131224/",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/10",
    },
    {
      name: "Twitter",
      icon: FiTwitter,
      url: "https://x.com/RohanAnkad1",
      color: "hover:text-sky-400",
      bgColor: "hover:bg-sky-500/10",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:rohanankaddvg@gmail.com",
      color: "hover:text-green-400",
      bgColor: "hover:bg-green-500/10",
    },
  ];

  export const CONTACT_INFO = [
    {
      icon: MapPin,
      label: "Location",
      value: "Berlin, Germany",
    },
    {
      icon: Mail,
      label: "Email",
      value: "rohanankaddvg@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+49 15510 825809",
    },
  ];