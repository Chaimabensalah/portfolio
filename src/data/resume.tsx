import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Chaima ben salah",
  initials: "RF",
  url: "https://chaima.vercel.app",
  location: "Tunis, TN",
  locationLink: "https://www.google.com/maps/place/tunis",
  description:
    "Web Developer & Solutions Developer | Skilled in React, Node.js, Angular, Springboot and Modern Database Technologies ",
  summary:
    "I am a passionate Web Developer with expertise in building dynamic and efficient web applications. I specialize in working with technologies like Angular, React, Node.js, Tailwind CSS, and Spring Boot to create responsive user interfaces and robust backend solutions. My experience includes designing and developing scalable web applications, implementing complex business logic, managing databases like PostgreSQL, MySQL, and MongoDB, and crafting intuitive user experiences. I thrive on combining creativity with technical precision to deliver impactful digital solutions. Let’s collaborate to bring your ideas to life!",
  avatarUrl: "/me.jpg",
  skills: [
    "Next.js",
    "React",
    "Angular",
    "Spring Boot", 
    "nodejs",
    "Java", 
    "Python", 
    "JavaScript", 
    "Typescript", 
    "HTML5", 
    "CSS3", 
    "Bootstrap", 
    "tailwind css",
    "AWS", 
    "MySQL", 
    "PostgreSQL", 
    "MongoDB", 
    "Git&GitHub", 
    "Agile methodologies"
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "chaimbensalah@gmail.com@gmail.com",
    tel: "+216 95 004 044",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Chaimabensalah",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chaima-ben-salah-a2a20927a/",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Axia solutions",
      href: "",
      badges: [],
      location: "On-site",
      title: "Intern Fullstack Developer",
      logoUrl: "/axia.png",
      start: "June 2022 ",
      end: "Jul 2022",
      description:
      "I developed an application dedicated to managing private educational institutions.the application offers basic features for managing student and teacher information, as well as courses and schedules.",
    },
    {
      company: "Kleos",
      badges: [],
      href: "",
      location: "On-site",
      title: "Intern Fullstack Developer",
      logoUrl: "/kleos.jpg",
      start: "June 2023",
      end: "Aug 2023",
      description:
        "Design and development of a customized CRM to optimize customer relationship management and sales processes using RESTful API.",
    },
    {
      company: "Smart Kokusai",
      href: "",
      badges: [],
      location: "Remote",
      title: "Junior Developer",
      logoUrl: "/smartkokusai.jpg",
      start: "Jul 2023",
      end: "Aug 2023",
      description:
        "Developed a website with React.js for dynamic frontend, including animations and advanced filtering. Utilized SQL, Express.js, and Node.js for efficient backend development, resulting in a high-performing web application.",
    },
    {
      company: "Elzei Consulting",
      href: "",
      badges: [],
      location: "On-site",
      title: "Intern Fullstack Developer",
      logoUrl: "/elzei.jpg",
      start: "Feb 2024",
      end: "May 2024",
      description:
"Develop an application to evaluate the financial profitability of external projects, integrating invoices, payrolls, operating expenses, social charges, and insurance data. The application should include a data validation module with evolving criteria and integrate a DROOLS rules engine to calculate profitability per project and per employee. Implement a multi-compartment dashboard for clear visualization of results."},
  
    
  ],
  education: [
    {
      school: "Zaouia Ksiba and Thrayet High School",
      href: "https://www.google.com/search?sca_esv=567ab18d067741e3&rlz=1C1GCEA_enTN1066TN1066&sxsrf=ADLYWII4Fu7Upui0BAT42QQ5acyZHJno2A:1737150473675&q=lycee+zaouiet+ksiba+nad+thrayet&source=lnms&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3JyJJclJuzBPl12qJyPx7ESJehObpS5jg6J88CCM-RK72sNV8xvbUxy-SoOtM-WmPLLjXStc34vEt-X26QW0sqDsgrFblo0hnNCRIn6XabRKGkRAwDFpHoE7_FRxWVhY9jKsAKR4&sa=X&ved=2ahUKEwjIlJ7n3f2KAxW_wQIHHb5_GfUQ0pQJegQIBxAB&biw=1366&bih=599&dpr=1",
      degree: "Baccalaureate in Mathematics (Equivalent to High School Diploma).",
      logoUrl: "/lzkt.jpg",
      start: "2018",
      end: "2021",
    },
    {
      school: "Higher Institute of Informatics and Mathematics of Monastir",
      href: "https://um.rnu.tn/fr/etablissements/instituts/institut-sup%C3%A9rieur-dinformatique-et-des-math%C3%A9matiques-de-monastir/",
      degree: "Bachelor's Degree in Computer Science",
      logoUrl: "/isimm.png",
      start: "2022",
      end: "2024",
    },

  ],
  projects: [
    {
      title: "MyShop (E-Commerce Website UI)",
      href: "https://zesty-capybara-5e7863.netlify.app/",
      dates: "",
      active: true,
      description:
"This project is a modern e-commerce platform designed for a seamless and user-friendly shopping experience. The interface emphasizes intuitive navigation, sleek aesthetics, and responsive design, providing users with an engaging journey.",    
  technologies: [
       
        "React.js",
        "TailwindCSS",
        "HTML",
        "Typescript",
      ],
      links: [
        {
          type: "Website",
          href: "https://zesty-capybara-5e7863.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Chaimabensalah/MyShop-E-CommerceWebsite",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/111.png",
      video:
        "",
    },
    {
      title: "Master Chef (Cooking App UI)",
      href: "https://masterchefcooking.netlify.app/",
      dates: "",
      active: true,
      description:
      "This project is a cooking app designed to simplify the process of learning and exploring new recipes. With an engaging and intuitive interface, it provides users with a seamless experience to discover, save, and try various recipes.",
      technologies: [
       

        "React.js",
        "TypeScript",
        "TailwindCSS",
        "HTML",

      ],
      links: [
        {
          type: "Website",
          href: "https://masterchefcooking.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Chaimabensalah/CookingApp-Home-page",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/222.png",
      video: "",
    },
    {
      title: "GUCCI (Perfumes Website)",
      href: "https://gucciperfume.netlify.app/",
      dates: "",
      active: true,
      description:
        "This project is a luxury website designed to showcase GUCCI's perfume collection with elegance and sophistication. The focus is on creating an engaging and visually stunning digital experience.",
      technologies: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "GSAP",
        "Three.js",

      ],
      links: [
        {
          type: "Website",
          href: "https://gucciperfume.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Chaimabensalah/GUCCI-perfumes",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/333.png",
      video: "",
    },
    {
      title: "GRAD (Restaurant Homepage)",
      href: "https://gradrestaurent.netlify.app/",
      dates: "",
      active: true,
      description:
        "This project features a modern and user-friendly homepage designed for a restaurant, combining aesthetics and functionality to deliver an engaging web experience. The design highlights the menu, showcases the ambiance, and ensures intuitive navigation for users.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "HTML",
        "javascript",

      ],
      links: [
        {
          type: "Website",
          href: "https://gradrestaurent.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Chaimabensalah/Restaurent-Home-Page",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/444.png",
      video:
        "",
    },






    {
      title: "My School (School Management App)",
      href: "https://github.com/Chaimabensalah/Gestion-Ecole?tab=readme-ov-file",
      dates: "",
      active: true,
      description:
        "A school management application. This application offers basic features for managing student and teacher information, as well as courses and schedules.",
      technologies: [
        "Angular",
        "Spring boot",
        "HTML",
        "CSS",
        "Bootsrap",
        "TypeScript",
        "MySQL",
      

      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Chaimabensalah/Gestion-Ecole?tab=readme-ov-file",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/555.png",
      video:
        "",
    },
    {
      title: "ProfitEval (Management System)",
      href: "https://github.com/Chaimabensalah/backelzei",
      dates: "",
      active: true,
      description:
        "A comprehensive system designed to integrate and analyze diverse data sources, including sales invoices, payroll slips, operational costs, and insurance data. It ensures data reliability through a dedicated module and calculates project profitability using adaptable criteria and formulas.",
      technologies: [
        "Angular",
        "Spring boot",
        "HTML",
        "CSS",
        "Bootsrap",
        "TypeScript",
        "PostgreSQL",     
      ],
      links: [
        {
          type: "Frontend",
          href: "https://github.com/Chaimabensalah/backelzei",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Backend",
          href: "https://github.com/Chaimabensalah/frontelzei",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/666.png",
      video:
        "",
    },

    {
      title: "MediCarePro (Medical Management App)",
      href: "https://github.com/Chaimabensalah/MediCarePro",
      dates: "",
      active: true,
      description:
      "An application for managing medical practices,including online appointment scheduling and administrative management.",
      technologies: [
        "Angular",
        "Spring boot",
        "HTML",
        "CSS",
        "Bootsrap",
        "TypeScript",
        "MySQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Chaimabensalah/MediCarePro",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/777.png",
      video:
        "",
    },
    {
      title: "Customer Relationship Management (CRM)",
      href: "https://github.com/Chaimabensalah/Django-CRM",
      dates: "",
      active: true,
      description:
"A RESTful API to manage customer and lead information, supporting basic CRUD operations (Create, Read, Update, Delete). The application consists of two main entities: Customers and Leads." ,   
  technologies: [
        "HTML",
        "CSS",
        "Bootsrap",
        "Django",
        "java",
        "PostgreSQL",
    
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Chaimabensalah/Django-CRM",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/888.png",
      video:
        "",
    },
  ],
  hackathons: [
   
    {
      title: "GOMYCODE",
      dates: "Jan 2022",
      location: "CODING WITH PYTHON",
      description: "",
      image: "/gomycode.png",
      win: "",
      mlh: "",
      links: [
  
      ],
    },
    {
      title: "Huawei Certification",
      dates: "May 2023", 
      location: "HCIA - Cloud Computing",
      description: "Certified in Huawei HCIA, covering cloud computing fundamentals, architecture, and deployment using Huawei technologies.",
      image: "/huawei.jpg", 
      mlh: "",
      links: [
        
      ],
    },
    {
      
        title: "9antra Academy",
        dates: "Feb 2024", // Update with the actual date of certification
        location: "Java Programming Certification",
        description: "Certified in Java programming, covering core concepts, object-oriented programming, and application development.",
        image: "/9antra.png", // Add the path to your certification logo if available
        win: "",
        mlh: "",
        links: [
          // Add any relevant links, such as a certificate verification link
        ],
      },
    {
      title: "Udemy",
      dates: "Oct 2024",
      location: "JavaScript Programming: Complete Beginner to Advanced",
      description: "",
      image: "/udemy.png",
      win: "",
      mlh: "",
      links: [
        
      ],
    },

  ],



  clubs: [
    {
      name: "UNICEF Tunisia",
      description: "UNICEF Tunisia is a branch of the United Nations Children's Fund focused on protecting children's rights in Tunisia. It works to ensure access to education, healthcare, and protection, especially for vulnerable groups like migrant children.",
      logoUrl: "/uniceff.png",
      start: "2022",
      end: "2025",
      role: "Member",
      events: [
        {
          title: "Collaboration with the International Organization for Migration (IOM)",
          description: "Organized awareness workshops for migrant families in collaboration with IOM Tunisia, highlighting the importance of education and its positive impact on children. This initiative successfully integrated a group of migrant children into primary schools in Medenine, Zarzis, and Djerba, providing them with essential school supplies.",
          date: "Dec 2024",
          image: "/unicefevent.png",
          url:"https://www.instagram.com/p/DDuflP-x8Z3/?img_index=1",
        },
        {
          title: "Showcasing the Second Chance Program",
          description: "A transformative initiative aimed at supporting adolescents who have dropped out of school, empowering them to reintegrate into education and society. The event also featured a powerful expressive dance performance on addiction, presented by the Civic Education Club of the Second Chance School in Bab El Khadhra, showcasing the importance of awareness and resilience.",
          date: "April 2024",
          image: "/unicef2.png",
          url:"https://www.instagram.com/p/C6MbbWLLFDR/?img_index=1",
        },
      ],
    },
    {
      name: "Polygon",
      description: "Polygon University is the only private university accredited by the Tunisian Ministry of Higher Education and Scientific Research for its 100% online courses.",
      logoUrl: "/polygon.jpg",
      start: "2023",
      end: "2024",
      role: "Member",
      events: [
        {
          title: "AI Hackathon and Prototyping",
          description: "An intensive 36-hour camp focused on innovation, Collaborated with a talented team to develop innovative AI-driven solutions, presenting prototypes to a jury for evaluation and recognition.",
          date: "june 2024",
          image: "/injaz2.jpeg",
          url: "https://www.instagram.com/p/C_VLeoIIpEN/?img_index=1",
        },
      ],
    },

    {
      name: "Injaz",
      description: "INJAZ Tunisia is an organization inspires and prepares young people to succeed in the global economy by offering hands-on programs and training in entrepreneurship, business skills, and workforce readiness.",
      logoUrl: "/injaz.png",
      start: "2023",
      end: "2024",
      role: "Member",
      events: [
        {
          title: "Local Company Program Competition",
          description: "Participated in the Local Company Program competition, collaborating with teams in a competitive and inspiring environment. The event focused on innovation, business solutions, and team collaboration, with the winning teams moving on to represent ISCAE at the national INJAZ competition.",
          date: "Feb 2024",
          image: "/injaz3.png",
          url: "https://www.instagram.com/p/C32ik-no3Cc/?img_index=7",
        }
      ],
    },

  ],
} as const;

