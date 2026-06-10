type ProjectScreenshot = {
  src: string;
  alt: string;
  caption?: string;
};

type Project = {
  title: string;
  slug: string;
  category: string;
  tagline: string;
  overview: string;
  features: string[];
  techStack: string[];
  challenges: string[];
  learnings: string[];
  feedback: boolean;
  links: {
    live?: string;
    github?: string;
  };
  screenshots?: ProjectScreenshot[];
};

export const projectZones = [
  {
    title: "Full Stack and DevOps",
    slug: "full-stack-devops",
    description:
      "Explore .NET, backend, and DevOps-focused projects with end-to-end delivery.",
  },
  {
    title: "Microsoft Power Platform",
    slug: "microsoft-power-platform",
    description:
      "Explore business apps, workflows, and analytics solutions built with the Power Platform.",
  },
] as const;

export const projects: Project[] = [
  {
    title: "DER Registry | .NET CORE Web API and Blazor WebApp",
    slug: "distributed-energy-resource-registry",
    category: "full-stack-devops",
    tagline:
      "A Large scale DER registry web application built with .NET Core Web API and Blazor, designed to manage and track distributed energy resources across the province.",
    overview:
      "Built on Robert Cecil Martin's Clean Architecture principles, this project features a layered architecture with clear separation of concerns. With Each of the layers as a seperate project in the solution, it ensures massive scalability and maintainability.",
    features: [
      "CORE - The parent c# library holding multiple db contexts and respecticve models",
      "API - The controller web API prpject. Leverarting the CORE library, it exposes RESTful endpoints for managing DER data.",
      "Repostotyr- The data access layer, implementing the repository pattern to abstract database interactions and ensure a clean separation of concerns.",
      "Application Logic - Untie Business logic the UI Layer, ensuring a clean and maintainable Business Logic",
      "WebApp - A Blazor server built using Premium Telerik UI components, providing a rich and interactive user interface for managing DER data and visualizing insights.",
    ],
    techStack: [
      "@Blazor",
      "@Telerik UI",
      ".NET Core",
      "C#",
      "Entity Framework Core",
      "Clean Architecture",
    ],
    challenges: [
      "Maintaining brand consistency while reimagining Nike’s design language.",
      "Achieving smooth animations without affecting performance.",
      "Ensuring pixel-perfect responsiveness across devices.",
      "Optimizing load times for a better user experience.",
    ],
    learnings: [
      "Mastered efficient UI composition with React and Tailwind CSS.",
      "Improved understanding of animation principles using Framer Motion.",
      "Enhanced deployment workflow using Vercel and Vite integration.",
      "Developed better practices for responsive and scalable frontend design.",
    ],
    feedback: false,
    links: {
      live: "https://nike-reimagined-mu.vercel.app/",
      github: "https://github.com/Pavan19971/nike-reimagined",
    },
    screenshots: [
      {
        src: "/projects/der_registry_1.png",
        alt: "DER Registry screenshot 1",
        caption: "DER Registry 1",
      },
      {
        src: "/projects/der_registry_2.png",
        alt: "DER Registry screenshot 2",
        caption: "DER Registry 2",
      },
    ],
  },

  {
    title: "Risk Register - Enterprise Risk Management PowerApp",
    slug: "risk-register",
    category: "microsoft-power-platform",
    tagline:
      "An enterprise risk management application built using Microsoft Power Platform, designed to help organizations identify, assess, and mitigate risks effectively.",
    overview:
      "Risk Register is a comprehensive enterprise risk management application that helps organizations identify, assess, and mitigate risks. Built on the Microsoft Power Platform, it leverages Power Apps, Power Automate, and Power BI to provide a seamless and integrated solution for managing enterprise risks.",
    features: [
      "Risk Identification and Assessment: Allows users to identify and assess risks across various departments and projects.",
      "Risk Mitigation Planning: Provides tools to develop and implement risk mitigation strategies.",
      "Real-time Risk Monitoring: Enables continuous monitoring of risk factors and their impact on the organization.",
      "Integration with Microsoft Power Platform: Leverages Power Apps, Power Automate, and Power BI for a comprehensive risk management solution.",
      "Customizable Dashboards: Offers interactive dashboards for visualizing risk data and insights.",
      "Automated Reporting: Generates automated reports for stakeholders and management.",

    ],
    techStack: [
      "Power Automates",
      "Power Apps",
      "SharePoint",
      "Power BI",

    ],
    challenges: [
      "Working around the Delegation limits of Power Apps to ensure smooth performance.",
      "Designing and integrating version history and change tracking within the app.",
      "Ensuring cross-browser and device compatibility for UI components.",
    ],
    learnings: [
      "Seperate List for version hsitoyr? No, I figured out how to do it with a single list and some clever use of Power Automate. This tracks sharepoint edits as well directly by rthe suers",
      "Effective use of CoE Starter Kit for governance and monitoring of Power Platform applications.",

    ],
    feedback: true,
    links: {
      live: "https://portfolio-v3-idf9.onrender.com",
      github: "https://topmate.io/pavan_sista/1773422",
    },
    screenshots: [
      {
        src: "/projects/risk_register_screenshot_1.png",
        alt: "Risk Register screenshot 1",
        caption: "Risk Register 1",
      },
      {
        src: "/projects/risk_register_screenshot_2.png",
        alt: "Risk Register screenshot 2",
        caption: "Risk Register 2",
      },
      {
        src: "/projects/risk_register_screenshot_3.png",
        alt: "Risk Register screenshot 3",
        caption: "Risk Register 3",
      },
    ],
  },
  {
    title: "Performance Management Application | Human Resouces",
    slug: "performance-management",
    category: "full-stack-devops",
    tagline:
      "A performance management application for human resources, designed to streamline employee evaluations and feedback processes.",
    overview:
      "The Performance Management Application is a comprehensive tool for human resources departments to manage employee performance evaluations, track progress, and provide feedback. Built with React and TypeScript, the platform ensures a seamless user experience and efficient performance management workflows.",
    features: [
      "Real-time performance tracking and evaluation.",
      "Categorized performance metrics for better insights.",
      "Automated feedback collection and reporting.",
      "Integration with existing HR systems for data synchronization.",
      "Customizable evaluation templates and workflows.",
    ],
    techStack: [
      "C#",
      ".NET Core",
      "Entity Framework",

    ],
    challenges: [
      "Integrating and managing dynamic data from the HR systems.",
      "Designing a clean UI to handle real-time performance updates efficiently.",
      "Optimizing performance and build times using .NET Core.",
      "Ensuring responsiveness and accessibility across devices.",
    ],
    learnings: [
      "Improved understanding of working with external APIs in React applications.",
      "Enhanced experience in using TypeScript for type-safe development.",
      "Learned to optimize frontend builds using Vite and modular UI design.",
      "Developed better state management practices for dynamic data handling.",
    ],
    feedback: true,
    links: {
      live: "https://news-hub-seven-chi.vercel.app/",
      github: "https://github.com/Pavan19971/news-hub",
    },
    screenshots: [
      {
        src: "/projects/project-screenshot-placeholder.svg",
        alt: "Performance Management application screenshot",
        caption:
          "Replace this placeholder with your Performance Management screenshot.",
      },
    ],
  },
  {
    title: "EA BDD Approval Flows",
    slug: "ea-bdd-approval-flows",
    category: "microsoft-power-platform",
    tagline:
      "A comprehensive power automate solution for managing BDD approval flows within the Enterprise Architecture team, designed to streamline and automate the approval process for architectural decisions.",
    overview:
      "The EA BDD Approval Flows project is a robust solution built to manage and automate the approval processes within the Enterprise Architecture team. Leveraging Power Automate, it ensures efficient handling of BDD approvals, reducing manual effort and improving workflow consistency.",
    features: [
      "Automated BDD approval workflows for the Enterprise Architecture team.",
      "Real-time notifications and updates on approval status.",
      "Integration with existing enterprise systems for seamless data flow.",
      "Customizable approval templates and rules to fit organizational needs.",
      "Clean design and user-friendly layout for better usability.",
    ],
    techStack: [
      "Power Automate",
      "Dataverse",
      "Sharepoint",
      
    ],
    challenges: [
      "Implementing scalable state management with Power Automate.",
      "Ensuring responsive and consistent UI across devices.",
      "Optimizing performance and build speed using Power Automate.",
      "Designing a smooth and intuitive navigation flow.",
    ],
    learnings: [
      "Enhanced understanding of Power Automate for managing global state efficiently.",
      "Improved skills in responsive UI design using Power Automate.",
      "Learned performance tuning techniques with Power Automate.",
      "Gained experience in creating scalable and maintainable frontend structures.",
    ],
    feedback: true,
    links: {
      live: "https://freshmart-store.vercel.app",
      github: "https://github.com/Pavan19971/freshmart-store",
    },
    screenshots: [
      {
        src: "/projects/project-screenshot-placeholder.svg",
        alt: "EA BDD Approval Flows screenshot",
        caption:
          "Replace this placeholder with your EA BDD Approval Flows screenshot.",
      },
    ],
  }
];
