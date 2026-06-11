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
  feedback: boolean;
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
  // full-stack-devops
  {
    title: "Azure DevOps Setup - CI/CD with Pipelines, Repos, and Artifacts",
    slug: "azure-devops-setup",
    category: "full-stack-devops",
    tagline:
      "A comprehensive Azure DevOps setup for CI/CD, including pipelines, repositories, and artifact management.",
    overview:
      "Built on Branch and Release workflows by Microsoft, it contains Yaml pipelies for automated build and release processes.",
    features: [
      "Continoious INtegraton - Build validation on every PR to ensure code quality and catch issues early.",
      "Contimnious Deployment - Automated Deployment of source code and evnrionemtn setup on completion of a PR.",
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
    feedback: false,
    screenshots: [
      {
        src: "/projects/azure_Devops_1_blur.png",
        alt: "Azure DevOps screenshot 1",
        caption: "Azure DevOps 1",
      },

    ],
  },
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
    feedback: false,
    screenshots: [
      {
        src: "/projects/der_registry_1_blur.png",
        alt: "DER Registry screenshot 1",
        caption: "DER Registry 1",
      },
      {
        src: "/projects/der_registry_2_blur.png",
        alt: "DER Registry screenshot 2",
        caption: "DER Registry 2",
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
    feedback: true,
    screenshots: [
      {
        src: "/projects/performance_management_1_blur.png",
        alt: "Performance Management application screenshot 1",
        caption: "Performance Management 1",
      },
      {
        src: "/projects/performance_management_2_blur.png",
        alt: "Performance Management application screenshot 2",
        caption: "Performance Management 2",
      },
    ],
  },

  // microsoft-power-platform
   {
    title: "Center of Excellence (CoE) Starter Kit - Power Platform Governance",
    slug: "coe-starter-kit-power-platform-governance",
    category: "microsoft-power-platform",
    tagline:
      "The Center of Excellence (CoE) Starter Kit for Power Platform Governance.",
    overview:
      "The Center of Excellence (CoE) Starter Kit for Power Platform Governance is a comprehensive solution designed to help organizations establish and maintain governance practices for their Power Platform environments. Built on the Microsoft Power Platform, it ensures best practices are followed and operational risks are minimized.",
    features: [
      "Admin View to manage governance settings and monitor compliance.",
      "ALM Accelerator: Facilitates application lifecycle management for Power Platform solutions using Azure Devops CI/CD.",
    ],
    techStack: [
      "Power Automate",
      "Power Apps",
      "Dataverse",
      "SharePoint",
      "Power Fx"
      
    ],
    feedback: true,
    screenshots: [
      {
        src: "/projects/coe_alm_1_blur.png",
        alt: "coe_alm_1",
        caption:
          "Replace this placeholder with your CoE Starter Kit screenshot.",
      },
        {
        src: "/projects/coe_alm_2_blur.png",
        alt: "coe_alm_2",
        caption:
          "Replace this placeholder with your CoE Starter Kit screenshot.",
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
    feedback: true,
    screenshots: [
      {
        src: "/projects/risk_register_1_blur.png",
        alt: "Risk Register screenshot 1",
        caption: "Risk Register 1",
      },
      {
        src: "/projects/risk_register_2_blur.png",
        alt: "Risk Register screenshot 2",
        caption: "Risk Register 2",
      },
      {
        src: "/projects/risk_register_3_blur.png",
        alt: "Risk Register screenshot 3",
        caption: "Risk Register 3",
      },
    ],
  },
  {
    title: "Opportunity Hub PowerApp - Business Innovation Team",
    slug: "opportunity-hub-powerapp",
    category: "microsoft-power-platform",
    tagline:
      "Digitized improvement suggestions, streamlined workflows, fostering collaboration and accelerating organizational innovation.",
    overview:
      "The Opportunity Hub PowerApp is a comprehensive solution designed to digitize improvement suggestions and streamline workflows for the Business Innovation Team. Built on the Microsoft Power Platform, it fosters collaboration and accelerates organizational innovation by providing a centralized platform for idea submission, evaluation, and implementation.",
    features: [
      "Centralized Idea Submission: Provides a user-friendly interface for employees to submit improvement suggestions and ideas.",
      "Streamlined Workflow Management: Automates the routing and approval of ideas to ensure timely evaluation and implementation. ",
      "Collaboration and Feedback: Enables team members to collaborate on ideas, provide feedback, and track the progress of suggestions.",

    ],
    techStack: [
      "Power Automate",
      "Power Apps",
      "Dataverse",
      "SharePoint",
      "Power Fx"
      
    ],
    feedback: true,
    screenshots: [
      {
        src: "/projects/opp_hub_1_blur.png",
        alt: "Opportunity Hub 1",
        caption:
          "Replace this placeholder with your Opportunity Hub screenshot.",
      },
       {
        src: "/projects/opp_hub_2_blur.png",
        alt: "Opportunity Hub 2 ",
        caption:
          "Replace this placeholder with your Opportunity Hub screenshot.",
      }
    ],
  },
   {
    title: "Hygiene Initiative Tracker PowerApp - IT Security Team",
    slug: "hygiene-initiative-tracker-powerapp",
    category: "microsoft-power-platform",
    tagline:
      "Automates reminders and compliance tracking for shared devices, reducing operational risk and ensuring hygiene standards.",
    overview:
      "The Hygiene Initiative Tracker PowerApp is a comprehensive solution designed to automate reminders and track compliance for shared devices within the IT Security Team. Built on the Microsoft Power Platform, it ensures hygiene standards are maintained and operational risks are minimized.",
    features: [
      "Automated Reminders: Sends timely reminders to ensure compliance with hygiene standards.",
      "Compliance Tracking: Monitors and records the hygiene status of shared devices.",
      "Centralized Dashboard: Provides a comprehensive view of compliance metrics and trends.",
    ],
    techStack: [
      "Power Automate",
      "Power Apps",
      "Dataverse",
      "SharePoint",
      "Power Fx"
      
    ],
    feedback: true,
    screenshots: [
      {
        src: "/projects/hyg_init_1_blur.png",
        alt: "Hygiene Initiative Tracker 1",
        caption:
          "Replace this placeholder with your Hygiene Initiative Tracker screenshot.",
      }
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
    feedback: true,
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

