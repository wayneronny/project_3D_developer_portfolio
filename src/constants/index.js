import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  news,
  kenfranka,
  upstate,
  marmun,
  salama,
  aquahub,
  spa,
  tabarru,
  // typescript,
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
  wordPress,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
    title: "Web Development",
    icon: web,
  },
  {
    title: "Web Design",
    icon: mobile,
  },
  {
    title: "Software Development",
    icon: backend,
  },
  {
    title: "Digital Marketing",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
    name: "wordPress",
    icon: wordPress,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer/Digital Marketing Intern",
    company_name: "INDOLIKE SOLUTIONS",
    icon: meta,
    iconBg: "#383E56",
    date: "FEB 2025-MAR 2025",
    points: [
      "Controlled brand messaging implementation with future product road maps and existing portfolio.",
      "Configuring the CRM system application to meet business requirements using the Microsoft Dynamics CRM customization Tool, Workflow Tool or SDK.",
      "Maintaining and upgrading custom integrations between CRM and external databases using different approaches.",
      "Managed day-to-day social media presence for multiple clients,including scheduling,and community engagement, ensuring brand consistency and responsiveness.",
      "Managed and utilized marketing technology stack relevant to SAAS marketing e.g.,CRM and  Platform Native Analytic tools.",
      "Customizing and administrating out-of-box solutions like new entities, form upgrades, dashboards, email alerts, reports and campaigns.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "SGT COMPANY LIMITED",
    icon: tesla,
    iconBg: "#383E56",
    date: "JAN 2024-SEP 2024",
    points: [
      "Created highly responsive and scalable web applications for company.",
      "Enhanced applications and improved performance through testing and validations against requirements and performance standards.",
      "Created innovative software solutions with use of programming languages such as PHP (Laravel) and JavaScript(React).",
      "Enhanced Websites and applications by developing robust databases.",
    ],
  },
  {
    title: "Software Developer/Data Analyst ",
    company_name: "FLUID VENTURE LIMITED",
    icon: shopify,
    iconBg: "#383E56",
    date: "NOV 2023-APR 2024",
    points: [
      "Produced clean, error-free code to meet aggressive timeliness.",
      "Designed and developed software applications using PHP and JavaScript programming languages and associated frameworks.",
      "Improved operations with skilled data interpretation and results analysis using various statistical techniques. and tools like SPSS, MS Excel, PowerBI and frameworks",
      "Collaborated with data processing personnel and project managers to gather data processing limitations or capabilities.",
    ],
  },
  {
    title: "IT Support & Software Developer Intern",
    company_name: "PARLIAMENT OF KENYA(SENATE)",
    icon: starbucks,
    iconBg: "#383E56",
    date: "JULY 2022 - JUNE 2023",
    points: [
      " Developing and maintaining web applications and other related technologies.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality websites.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Managing network servers and technology tools:This includes tasks such as setting up and maintaining network infrastructure, managing user accounts,such as e-parl,SmartHR and IFMIS system.",
      "Provided user support in website related issues by troubleshooting the problems and resolving issues.",
      "Collaborating with sound engineers in the control room to setup an effective communication systems.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "Throughout the entire process  working with Ronald I would say he is responsive, and willing to work through issues as they arise.I wouldn't hesitate to recommend or work with him again.",
    name: "Maryanne Karanja",
    designation: "Software Engineer/ICT officer I",
    company: "PSC",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Developed a website for  e-commerce store, and I was incredibly impressed with the results. The website loads incredibly fast, making for a smooth user experience",
    name: "Fredrick Jomo",
    designation: "Software Engineer",
    company: "Amref",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Ronald's talent and experience proved immensely valuable for our latest website.He was involved in providing advice and guidance.The work we received from him was thoroughly documented,which shows his commitment to quality.",
    name: "Hannibal Osore",
    designation: "CEO",
    company: "Sgtcl Company Limited",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "eastafricaseaweeds",
    description:
      "",
    tags: [
      {
        name: "Web Design",
        color: "blue-text-gradient",
      },
      {
        name: "Web Development",
        color: "green-text-gradient",
      },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
    ],
    image: carrent,
    source_code_link: "https://eastafricaseaweeds.com/",
  },
  {
    name: "sgtcl",
    description:
      "",
    tags: [
      {
        name: "Web Design",
        color: "blue-text-gradient",
      },
      {
        name: "Web Development",
        color: "green-text-gradient",
      },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: jobit,
    source_code_link: "https://sgtcl.africa/",
  },
  {
    name: "Upstate Auctioneers",
    description:
      "",
    tags: [
      {
        name: "Web Design",
        color: "blue-text-gradient",
      },
      {
        name: "Web Development",
        color: "green-text-gradient",
      },
      // {
      //   name: "Bootstrap",
      //   color: "pink-text-gradient",
      // },
    ],
    image: upstate,
    source_code_link: "https://upstate.co.ke/",
  },
   {
    name: "Nakuru News",
    description:
      "",
    tags: [
      {
        name: "Web Design",
        color: "blue-text-gradient",
      },
      // {
      //   name: "Mssql",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "Bootstrap",
      //   color: "pink-text-gradient",
      // },
    ],
    image: news,
    source_code_link: "https://nakurunews.co.ke/",
  },
   {
    name: "Kenfranka Sacco",
    description:
      "",
    tags: [
      // {
      //   name: "C#",
      //   color: "blue-text-gradient",
      // },
      {
        name: "Web Design",
        color: "green-text-gradient",
      },
      // {
      //   name: "Bootstrap",
      //   color: "pink-text-gradient",
      // },
    ],
    image: kenfranka,
    source_code_link: "https://kenfrankasacco.co.ke/",
  },
  {
    name: "Marmun",
    description:
      "",
    tags: [
      {
        name: "Web Design",
        color: "blue-text-gradient",
      },
      {
        name: "Web Development",
        color: "green-text-gradient",
      },
      // {
      //   name: "Bootstrap",
      //   color: "pink-text-gradient",
      // },
    ],
    image: marmun,
    source_code_link: "https://marmun.co.ke/",
  },
  {
    name: "Salama",
    description:
    "",
  tags: [
    {
      name: "Web Design",
      color: "blue-text-gradient",
    },
    {
      name: "Web Development",
      color: "green-text-gradient",
    },
    // {
    //   name: "Bootstrap",
    //   color: "pink-text-gradient",
    // },
  ],
  image: salama,
  source_code_link: "https://salamasecurity.co.ke/",
  },
  {
    name: "Aquahub",
    description:
    "",
  tags: [
    {
      name: "Web Design",
      color: "blue-text-gradient",
    },
    {
      name: "Web Development",
      color: "green-text-gradient",
    },
    // {
    //   name: "Bootstrap",
    //   color: "pink-text-gradient",
    // },
  ],
  image: aquahub,
  source_code_link: "https://aquahub.co.ke/",
  },
  {
    name: "Healing Touch Spa ",
    description:
    "",
  tags: [
    {
      name: "Web Design",
      color: "blue-text-gradient",
    },
    {
      name: "Web Development",
      color: "green-text-gradient",
    },
    // {
    //   name: "Bootstrap",
    //   color: "pink-text-gradient",
    // },
  ],
  image: spa,
  source_code_link: "https://healingtouchspa.co.ke/",
  },
  {
    name: "Tabarru",
    description:
    "",
  tags: [
    {
      name: "Web Design",
      color: "blue-text-gradient",
    },
    // {
    //   name: "Mssql",
    //   color: "green-text-gradient",
    // },
    // {
    //   name: "Bootstrap",
    //   color: "pink-text-gradient",
    // },
  ],
  image: tabarru,
  source_code_link: "https://tabarru.net/",
  },
  {
    name: "Bookshop",
    description:
    "",
  tags: [
    {
      name: "C#",
      color: "blue-text-gradient",
    },
    {
      name: "Mssql",
      color: "green-text-gradient",
    },
    {
      name: "Bootstrap",
      color: "pink-text-gradient",
    },
  ],
  image: tripguide,
  source_code_link: "https://github.com/",
  }



];


export { services, technologies, experiences, testimonials, projects };
