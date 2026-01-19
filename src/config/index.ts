import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Gautam Aggarwal — Software Engineer & Web Developer",
  author: "Gautam Aggarwal",
  description:
    "Full Stack Web Developer with hands-on experience building scalable applications, production platforms, and AI-powered solutions using modern web technologies.",
  lang: "en",
  siteLogo: "/image.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/gautam-aggarwal-/" },
    { text: "Github", href: "https://github.com/gautamaggarwaldev" },
    { text: "X", href: "https://x.com/a_ggarwalgautam" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Gautam Aggarwal",
    specialty: "Software Engineer & Web Developer",
    summary:
      "Full Stack Web Developer with hands-on experience building scalable applications, production platforms, and AI-powered solutions using modern web technologies.",
    email: "gautam.aggarwal.tech@gmail.com",
  },
  experience: [
    {
      company: "Evren Global Solutions Pvt. Ltd.",
      position: "Full Stack Developer",
      startDate: "August 2025",
      endDate: "October 2025",
      summary: [
        "Developed and enhanced a production conference platform (icmmcs.org) by adding 6+ dynamic pages and admin dashboard features using HTML, CSS, JavaScript, jQuery, Bootstrap, Tailwind CSS, Node.js, and Express.js, improving content management and user experience.",
        "Implemented backend workflows for research paper submissions and communication pipelines, integrating Cloudinary for file storage and Nodemailer for automated email notifications, successfully handling 100+ academic paper uploads and form submissions.",
        "Built a responsive retreats booking platform (retreatsbytraveon.vercel.app) using Next.js and Tailwind CSS, delivering modern UI/UX for wellness, corporate, MICE, and community retreat categories with mobile-first design principles.",
      ],
    },
    {
      company: "CodeWithTechries",
      position: "Backend Developer",
      startDate: "April 2025",
      endDate: "July 2025",
      summary: [
        "Architected and developed the backend system for codewithtechries.com using Node.js, Express.js, and MongoDB, implementing MVC architecture to support multiple learning and community platform modules with scalable structure.",
        "Implemented secure JWT-based authentication and role-based access control (RBAC) for 5+ user roles, along with Nodemailer email services and Cloudinary media management, enabling secure access, notifications, and file handling.",
        "Refactored and optimized backend services to enhance performance, security, and maintainability, improving API reliability and supporting the platform’s growing user base."
      ],
    },
    {
      company: "ClothBuddy",
      position: "Backend Developer",
      startDate: "Februray 2025",
      endDate: "March 2025",
      summary:[
        "Developed and maintained core backend APIs for an e-commerce clothing platform using Node.js, Express.js, and MongoDB, enabling product management, user authentication, cart operations, and order processing.",
        "Integrated Cloudinary for image storage and optimization and implemented secure RESTful endpoints with JWT authentication, improving media handling efficiency and protecting user data.",
        "Optimized database queries and backend workflows to enhance application performance and scalability, ensuring smooth handling of growing user traffic and transactional operations.",
      ],
    },
  ],
  projects: [
    {
      name: "AI Car Market Place",
      summary: "AI-powered car marketplace web app that lets users search cars, identify vehicles via image upload, and get instant smart insights through a Gemini-powered chatbot.",
      linkPreview: "https://hyper-gg-rides.vercel.app/",
      linkSource: "https://github.com/gautamaggarwaldev/HyperGG-Rides",
      image: "/1.png",
    },
    {
      name: "CyberSecurity Detection Website",
      summary: "All-in-one cybersecurity platform that scans URLs, IPs, domains, and files to detect malware, threats, and suspicious activities in real time.",
      linkPreview: "https://clg-project-kappa.vercel.app/",
      linkSource: "https://github.com/gautamaggarwaldev/clg-Project",
      image: "/4.png",
    },
    {
      name: "Retreats By Traveon",
      summary: "Modern retreats booking website showcasing wellness, corporate, and community retreat packages with an optimized UI/UX experience.",
      linkPreview: "https://retreatsbytraveon.vercel.app/",
      linkSource: "https://github.com/gautamaggarwaldev/retreatsByTraveon",
      image: "/3.png",
    },
    {
      name: "ICCICT 2026",
      summary: "ICCICT conference website enabling researcher registration, paper submission, and seamless management of international academic events with a modern, user-friendly interface.",
      linkPreview: "https://iccict.org/",
      linkSource: "https://github.com/gautamaggarwaldev/ICMMCS-2025",
      image: "/7.png",
    },
    {
      name: "Stock Price Prediction Web App",
      summary: "Machine learning-powered web app that fetches real-time stock data, visualizes trends, and predicts future prices using AI models.",
      linkPreview: "https://dorafinance-pp-gg.streamlit.app/",
      linkSource: "https://github.com/gautamaggarwaldev/Stock-Price-Predictor-with-CahtBot-and-TelegramBot-using-deep-learning-and-Gen-AI",
      image: "/5.png",
    },
    {
      name: "Wordle Game",
      summary: "React-based Wordle game with interactive UI, real-time letter validation, and engaging gameplay mechanics",
      linkPreview: "https://wordle-game-smoky-seven.vercel.app/",
      linkSource: "https://github.com/gautamaggarwaldev/Wordle-Game",
      image: "/2.png",
    },
    {
      name: "Content Management System",
      summary: "Interactive content management platform where users can create text posts while others can like, comment, and engage in real-time discussions.",
      linkPreview: "https://content-core.netlify.app/",
      linkSource: "https://github.com/gautamaggarwaldev/CMS",
      image: "/6.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Gautam Aggarwal, a passionate Full Stack Web Developer with a strong interest in building scalable, high-performance web applications and AI-powered solutions. I enjoy creating seamless digital experiences by combining clean UI design with efficient backend architecture.

Over time, I’ve gained hands-on experience working on production platforms, internships, and real-world projects, where I’ve built secure authentication systems, REST APIs, cloud integrations, and responsive interfaces. From developing conference platforms and learning portals to creating AI-driven applications, I focus on writing clean, maintainable code that delivers real impact. I’m always eager to learn new technologies and push my skills further to build meaningful digital products.
    `,
    image: "/image.png",
  },
};

