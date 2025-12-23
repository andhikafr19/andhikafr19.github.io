

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  coverImage: string;
  images: string[];
  technologies: string[];
  category: string;
  features: string[];
  role: string;
  challenges: string;
  results: string;
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
  createdAt: string;
}

export const projects: Project[] = [
  {
    slug: "adpmet-website",
    title: "ADPMET Website",
    description: "An institution's website with authentication and CMS features.",
    longDescription: "An institution's website with authentication and CMS features. Development using Bootstrap and Laravel technologies.",
    coverImage: "/projects/adpmet-project.png",
    images: ["/projects/adpmet-1.png", "/projects/adpmet-2.png"],
    technologies: ["Bootstrap", "Laravel", "MySQL", "PHP", "JavaScript"],
    category: "Laravel",
    features: [
      "User authentication and authorization",
      "CMS",
      "Responsive design"
    ],
    role: "Frontend Developer",
    challenges: "because at that time it was my first role as a developer, so I was still using simple technology like bootstrap and there was no UI/UX so the appearance was still not perfect.",
    results: "Until now the website is still used by the institution.",
    demoUrl: "https://demo-ecommerce.example.com",
    repoUrl: "https://github.com/username/adpmet-website",
    featured: true,
    createdAt: "2020-06-15"
  },
  {
    slug: "ppt-revamp-app",
    title: "Revamp PPT Application",
    description: "Product Pricing Tools is an application that is used to simplify the process of implementing new product and rate requests",
    longDescription: "Product Pricing Tools is an application that is used to simplify the process of implementing new product and rate requests, from modeling until the product and rate are live. This application is built using Next.js for the frontend and Django for the backend.",
    coverImage: "/projects/ppt-revamp.png",
    images: ["/projects/ppt-revamp-1.jpg", "/projects/ppt-revamp-2.jpg"],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Material-UI", "Django"],
    category: "Next.js",
    features: [
      "Dashboard analytics",
      "Create and manage product",
      "Master Catalogue",
      "Product Approval workflow",
    ],
    role: "Frontend Developer",
    challenges: "This application is already half way through development, the challenge is for me to continue the code that was created by the previous developer.",
    results: "The application is used by Telkom users.",
    demoUrl: "https://demo-taskapp.example.com",
    repoUrl: "https://github.com/username/taskapp",
    featured: true,
    createdAt: "2024-04-20"
  },
  {
    slug: "enterprise-product-catalogue",
    title: "Enterprise Product Catalogue",
    description: "EPC (Enterprise Product Catalog) is an integrated platform that manages the entire product lifecycle from start to finish, covering the ideation, design, configuration, publishing, until the product operates Go-to-Market / Go Live and finally the product enters the retirement phase / product closure.",
    longDescription: "EPC (Enterprise Product Catalog) is an integrated platform that manages the entire product lifecycle from start to finish, covering the ideation, design, configuration, publishing, until the product operates Go-to-Market / Go Live and finally the product enters the retirement phase / product closure. This application combines the capabilities of Product Design Time and Product Run Time into a single integrated digital flow to accelerate time-to-market and improve consistency between systems. This application is built using React for the frontend and Nest.js for the backend.",
    coverImage: "/projects/epc-app.png",
    images: ["/projects/epc-1.jpg", "/projects/epc-2.jpg"],
    technologies: ["React", "TypeScript", "Nest.js", "PostgreSQL"],
    category: "Web Application",
    features: [
      "Product lifecycle management",
      "Progress tracking",
      "Approval Product workflows",
      "Integration with external systems",
    ],
    role: "Frontend Developer",
    challenges: "we are using micro frontend technology and i am new to it, so i have to learn about micro frontend architecture and implementation.",
    results: "The application is used by Telkom users.",
    demoUrl: "https://demo-epc.example.com",
    repoUrl: "https://github.com/username/epc-app",
    featured: true,
    createdAt: "2025-06-05"
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects;
  return projects.filter((project) => project.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getAllCategories(): string[] {
  const categories = new Set(projects.map((project) => project.category));
  return ["All", ...Array.from(categories)];
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
