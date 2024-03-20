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
    next,
    mssql,
    csharp,
    tailwind,
    nodejs,
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
    tripguide,
    portfolio,
    nike,
    aipropapp,
    threejs,
    tba,
    codevillage,
    microsoft,
    beacon,
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
      title: "Software Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Technical Writer",
      icon: creator,
    },
    {
      title: "Fullstack Developer",
      icon: mobile,
    }
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
      name: "Next JS",
      icon: next,
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
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "C Sharp",
      icon: csharp,
    },
    {
      name: "MS SQL",
      icon: mssql,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "The Black Arcs",
      icon: tba,
      iconBg: "#383E56",
      date: "October 2021 - April 2023",
      points: ["Collaborated with the team to translate wireframes into interactive web pages, providing input on design feasibility and implementation.",
        "Improved software quality by fixing bugs 50% faster using effective debugging techniques, collaborating with QA testing team member",
        "Developed robust front-end applications by efficiently integrating APIs developed by the back-end team and third parties.",
        "Engaged in teamwork with cross-functional teams to ensure Wiki documentation was up-to-date and accurate.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Code Village",
      icon: codevillage,
      iconBg: "#E6DEDD",
      date: "May 2020 - September 2021",
      points: [
        "Developed reusable UI components with React to be used across multiple web applications reducing 35% of development time, to ensure best practices",
        "Mentored interns in applying disciplined investigation techniques to debug software, resulting in reduction in the number of bugs reported in their code",
        "Refactored an existing application into React and other libraries improving readability, performance, and efficiency by 80%",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineer Apprentice",
      company_name: "Microsoft LEAP",
      icon: microsoft,
      iconBg: "#383E56",
      date: "Jan 2020 - April 2020",
      points: [
        "Successfully implemented agile methodologies in a team project using tools such as Azure DevOps and Visual Studio, resulting in a 20% increase in project efficiency",
        "Had specially organized sessions by professionals which effectively improved my communication with cross-functional teams and stakeholders.",
        "Successfully implemented agile methodology i.e. scrum in a team project using tools such as Azure DevOps and Visual Studio, resulting in a 20% increase in project efficiency.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Beacon IT ltd",
      icon: beacon,
      iconBg: "#E6DEDD",
      date: "April 2019 - Dec 2019",
      points: [
        "Developed responsive web applications using media queries and Bootstrap, reducing the time spent fixing layout issues by 80% resulting in an improved user experience and cross-browser compatibility.",
        "Participated in the development of a fundraising platform using React.js, the platform helped 20 students secure scholarships for post-secondary education resulting in a total sum of $30,000 in scholarship funds raised.",
        "Managed communications between the development team and management providing weekly updates on project status and prioritizing tasks and progress resulting in a 30% reduction in misunderstandings.",
      ],
    },
  ];
  
  const articles = [
    {
      title:
        "Tips For Enhancing Your Debugging Skills.",
      articleLink: "https://medium.com/@melawlah/tips-for-enhancing-your-debugging-skills-ed4cd35c1157",
      source: "medium",
    },
    {
      title:
        "What Programming Language Should I Learn.",
      articleLink: "https://medium.com/@melawlah/what-programming-language-should-i-learn-451d684ddaad",
      source: "medium",
    },
    {
      title:
        "Memoirs Of A Software Engineer: The Importance Of Soft Skills.",
      articleLink: "https://www.linkedin.com/pulse/memoirs-software-engineer-importance-soft-skills-funmilola-ariyo/?trackingId=aNIpgV8TS6evK4TihjuaNg%3D%3D",
      source: "linkedIn",
    },
  ];
  
  const projects = [
    {
      name: "Nike Clone",
      description:
        "A responsive website built using Tailwind CSS and React to practice the lessons I learned from using Tailwind CSS.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: nike,
      source_code_link: "https://github.com/melawlah/nikeclone",
    },
    {
      name: "Portfolio Website",
      description:
        "My website showcases my work experience, past projects, articles I've written, and contact details.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
    },
    {
      name: "Promptopia",
      description:
        "A fullstack web application allowing users to create accounts using their Google credentials. Users can view and copy prompts, as well as edit and delete.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "blue-text-gradient",
        },
      ],
      image: aipropapp,
      source_code_link: "https://github.com/melawlah/ai_prompts_app",
    },
  ];
  
  export { services, technologies, experiences, articles, projects };