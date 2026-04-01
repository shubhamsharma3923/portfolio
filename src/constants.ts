import { Experience, Project, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Shubham Sharma",
  role: "Senior .NET Developer",
  location: "Kanpur, Uttar Pradesh, India",
  email: "shubham.sharma3923@gmail.com",
  phone: "+91-9005803923",
  github: "https://github.com/shubhamsharma3923",
  linkedin: "https://www.linkedin.com/in/shubham-sharma-3923/",
  summary: "Results-driven and detail-oriented .NET Developer with over 5 years of experience in developing and deploying scalable web applications. Proficient in C#, .NET Core, Web API, ASP.NET, SQL Server, and front-end technologies.",
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["C#", "SQL", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "Web Technologies",
    skills: ["ASP.NET Core", "MVC", "ASP.NET", "Web API", "jQuery"]
  },
  {
    title: "Databases",
    skills: ["MSSQL Server", "MySQL"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Visual Studio", "Git", "Bitbucket", "TFS", "DevExpress"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Software Developer",
    company: "Preview Technologies (P) Ltd.",
    location: "Noida",
    period: "Jan 2024 – Present",
    description: [
      "Developing web applications using ASP.NET Core, C#, and SQL Server.",
      "Involved in project development for Delhi Development Authority (DDA)."
    ]
  },
  {
    role: "Software Developer",
    company: "Digital Corn Pvt. Ltd.",
    location: "Noida",
    period: "May 2022 – Dec 2023",
    description: [
      "Designed and developed web applications using ASP.NET, .NET Core, and DevExpress.",
      "Using MVC architecture for scalable and maintainable systems.",
      "Unit testing and peer code reviews for quality assurance.",
      "Integrated third-party APIs for various business features."
    ]
  },
  {
    role: "Software Developer",
    company: "Saitec International Computer Consultants",
    location: "Noida",
    period: "Aug 2019 – May 2022",
    description: [
      "Developed and maintained enterprise applications using ASP.NET, .NET Core, and SQL Server.",
      "Implemented responsive UI with HTML, CSS, and JavaScript.",
      "Managed the complete Software Development lifecycle (SDLC) from analysis to deployment.",
      "Contributed to new modules and improved system performance."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Payroll System (DDA)",
    tech: ["C#", "MVC", "SQL Server"],
    description: "Automates salary, tax, and allowances processing for DDA employees.",
    imageSeed: "payroll-dda"
  },
  {
    title: "Water Bill Management (DDA)",
    tech: ["C#", ".NET 7", "SQL Server"],
    description: "Enables online water bill payment and report generation.",
    imageSeed: "water-bill"
  },
  {
    title: "Gaushala Management (UP Govt.)",
    tech: ["C#", "ASP.NET Core", "SQL Server"],
    description: "Tracks cow data, medical history, and milk production.",
    imageSeed: "cow-farm"
  },
  {
    title: "Dairy Dugdha-Neti (UP Govt.)",
    tech: ["C#", "ASP.NET Core", "SQL Server"],
    description: "Manages dairy scheme applications and approvals.",
    imageSeed: "dairy-milk"
  },
  {
    title: "Fleet Tracker/Route Sale",
    tech: ["C#", "ASP.NET Core", "SQL Server"],
    description: "Real-time GPS tracking of vehicles and driver analytics.",
    imageSeed: "fleet-tracking"
  }
];

export const EDUCATION = [
  { degree: "B.Sc.", school: "University of Kanpur", year: "2018" },
  { degree: "Diploma in IT", school: "Technical Board", year: "2015" }
];
