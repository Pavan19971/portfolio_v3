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
      "Built on Branch and Release workflows by Microsoft, it contains reusable YAML pipelines, safety checks for automated build and release processes.",
    features: [
      "Continuous Integration - Build validation on every PR to ensure code quality and catch issues early.",
      "Continuous Deployment - Automated Deployment of source code and environment setup on completion of a PR.",
      "Environment Specific safety gates - Implemented environment specific checks and approvals to ensure safe deployments.",
      "Artifact Management - Leveraged Azure Artifacts for efficient package management and version control.",
    ],
    techStack: [
      "Azure DevOps",
      "Yaml Pipelines",
      ".NET Core",
      "Kubernetes",
      "On-Prem Agents"
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
      "CORE - The parent C# library holding multiple database contexts and respective models.",
      "API - The controller Web API project. Leveraging the CORE library, it exposes RESTful endpoints for managing DER data.",
      "Repository - The data access layer, implementing the repository pattern to abstract database interactions and ensure clean separation of concerns.",
      "Application Logic - Decoupled business logic from the UI layer, ensuring maintainability and testability.",
      "WebApp - A Blazor server application built using premium Telerik UI components, providing a rich and interactive user interface for managing DER data and visualizing insights.",
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
    title: "Performance Management Application | Human Resources",
    slug: "performance-management",
    category: "full-stack-devops",
    tagline:
      "A performance management application for human resources, designed to streamline employee evaluations and feedback processes.",
    overview:
      "The Performance Management Application is a comprehensive tool for HR departments to manage employee performance evaluations, track progress, and provide constructive feedback. Built with .NET Core and Entity Framework, the platform ensures a seamless user experience and efficient performance management workflows.",
    features: [
      "Real-time performance tracking and evaluation across departments.",
      "Categorized performance metrics with actionable insights.",
      "Automated feedback collection and comprehensive reporting.",
      "Seamless integration with existing HR systems for data synchronization.",
      "Customizable evaluation templates and configurable workflows.",
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
      "The Center of Excellence (CoE) Starter Kit provides a comprehensive framework for establishing and maintaining governance practices across Power Platform environments. It ensures organizational compliance with best practices and minimizes operational and security risks.",
    features: [
      "Admin dashboard for managing governance settings and monitoring compliance across environments.",
      "ALM Accelerator integration with Azure DevOps for streamlined application lifecycle management and CI/CD automation.",
    ],
    techStack: [
  
   "ALM",
      "Dataverse",
      "Azure DevOps"
      
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
      "Risk Register is a comprehensive enterprise risk management solution that helps organizations identify, assess, and mitigate risks effectively. Leveraging the Microsoft Power Platform ecosystem, it provides integrated risk tracking, visualization, and automated workflows for seamless risk management.",
    features: [
      "Risk Identification and Assessment - Systematically identify and assess risks across departments and projects.",
      "Risk Mitigation Planning - Develop and implement targeted risk mitigation strategies with clear ownership.",
      "Real-time Risk Monitoring - Continuously track risk factors and visualize organizational impact.",
      "Power Platform Integration - Leverage Power Apps, Power Automate, and Power BI for seamless workflows.",
      "Customizable Dashboards - Interactive, role-based dashboards for visualizing risk data and KPIs.",
      "Automated Reporting - Generate stakeholder reports with actionable insights and compliance tracking.",
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
      "Opportunity Hub is a comprehensive innovation management solution that digitizes improvement suggestions and streamlines workflows. Built on the Microsoft Power Platform, it fosters cross-team collaboration and accelerates organizational innovation through centralized idea submission, evaluation, and implementation tracking.",
    features: [
      "Centralized Idea Submission - User-friendly interface for employees to submit and categorize improvement suggestions.",
      "Streamlined Workflow Management - Automated routing and approval workflows for timely evaluation and implementation.",
      "Collaboration and Feedback - Real-time collaboration tools for team feedback and progress tracking throughout the innovation lifecycle.",
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
      "Hygiene Initiative Tracker automates reminders and compliance tracking for shared IT devices. Built on the Microsoft Power Platform, it ensures organizational hygiene standards are consistently maintained while reducing operational risk and security incidents.",
    features: [
      "Automated Reminders - Intelligent scheduling sends timely hygiene compliance notifications to device users.",
      "Compliance Tracking - Comprehensive monitoring and recording of device hygiene status across the organization.",
      "Centralized Dashboard - Real-time visibility into compliance metrics, trends, and device health status.",
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
      "EA BDD Approval Flows is a robust Power Automate solution that manages and automates approval processes for the Enterprise Architecture team. It streamlines BDD approvals, eliminates manual bottlenecks, and ensures consistent workflow execution across the organization.",
    features: [
      "Automated BDD approval workflows tailored for Enterprise Architecture requirements.",
      "Real-time notifications with approval status tracking and escalation management.",
      "Seamless integration with enterprise systems for automated data flow and synchronization.",
      "Customizable approval templates and business rules aligned with organizational policies.",
      "Intuitive interface design for improved usability and stakeholder adoption.",
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
