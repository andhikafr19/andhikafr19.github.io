import { getAssetPath } from "./utils";

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
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "Platform e-commerce modern dengan fitur pembayaran terintegrasi dan dashboard admin.",
    longDescription: "Sebuah platform e-commerce full-stack yang dibangun dengan Next.js dan Node.js. Fitur termasuk autentikasi pengguna, keranjang belanja, checkout dengan berbagai metode pembayaran, dan dashboard admin untuk manajemen produk.",
    coverImage: getAssetPath("/projects/ecommerce-cover.jpg"),
    images: [getAssetPath("/projects/ecommerce-1.jpg"), getAssetPath("/projects/ecommerce-2.jpg")],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    category: "Next.js",
    features: [
      "Autentikasi dan otorisasi pengguna",
      "Keranjang belanja real-time",
      "Integrasi pembayaran Stripe",
      "Dashboard admin",
      "Pencarian dan filter produk",
      "Responsive design"
    ],
    role: "Full Stack Developer",
    challenges: "Mengimplementasikan sistem keranjang real-time yang sinkron di berbagai device dan menangani edge cases pada proses checkout.",
    results: "Berhasil meningkatkan konversi checkout sebesar 25% dan mengurangi cart abandonment rate.",
    demoUrl: "https://demo-ecommerce.example.com",
    repoUrl: "https://github.com/username/ecommerce",
    featured: true,
    createdAt: "2024-06-15"
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    description: "Aplikasi manajemen tugas kolaboratif dengan fitur real-time dan notifikasi.",
    longDescription: "Aplikasi produktivitas untuk tim dengan fitur drag-and-drop kanban board, real-time collaboration, deadline reminders, dan integrasi dengan berbagai tools.",
    coverImage: getAssetPath("/projects/taskapp-cover.jpg"),
    images: [getAssetPath("/projects/taskapp-1.jpg"), getAssetPath("/projects/taskapp-2.jpg")],
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Framer Motion"],
    category: "React",
    features: [
      "Kanban board dengan drag-and-drop",
      "Real-time collaboration",
      "Notifikasi dan reminders",
      "Time tracking",
      "Team management"
    ],
    role: "Frontend Developer",
    challenges: "Membangun sistem real-time yang efisien dengan optimistic updates untuk pengalaman pengguna yang mulus.",
    results: "Aplikasi digunakan oleh 500+ pengguna aktif dengan rating 4.8/5.",
    demoUrl: "https://demo-taskapp.example.com",
    repoUrl: "https://github.com/username/taskapp",
    featured: true,
    createdAt: "2024-04-20"
  },
  {
    slug: "api-gateway-service",
    title: "API Gateway Service",
    description: "Microservice API gateway dengan rate limiting, authentication, dan monitoring.",
    longDescription: "API Gateway yang dibangun dengan Node.js untuk menangani autentikasi, rate limiting, request routing, dan monitoring untuk arsitektur microservices.",
    coverImage: getAssetPath("/projects/api-gateway-cover.jpg"),
    images: [getAssetPath("/projects/api-gateway-1.jpg")],
    technologies: ["Node.js", "Express", "Redis", "Docker", "Kubernetes", "Prometheus"],
    category: "Node.js",
    features: [
      "JWT authentication",
      "Rate limiting dengan Redis",
      "Request routing dan load balancing",
      "Metrics dan monitoring",
      "Docker containerization"
    ],
    role: "Backend Developer",
    challenges: "Mendesain sistem yang dapat menangani high throughput dengan latency minimal.",
    results: "Berhasil menangani 10,000+ requests per second dengan latency rata-rata < 50ms.",
    repoUrl: "https://github.com/username/api-gateway",
    featured: false,
    createdAt: "2024-02-10"
  },
  {
    slug: "mobile-fitness-app",
    title: "Mobile Fitness App",
    description: "Aplikasi fitness mobile dengan tracking workout dan integrasi wearables.",
    longDescription: "Aplikasi fitness cross-platform yang dibangun dengan React Native. Fitur termasuk workout tracking, progress analytics, dan integrasi dengan smartwatch.",
    coverImage: getAssetPath("/projects/fitness-cover.jpg"),
    images: [getAssetPath("/projects/fitness-1.jpg"), getAssetPath("/projects/fitness-2.jpg")],
    technologies: ["React Native", "TypeScript", "Node.js", "MongoDB", "HealthKit"],
    category: "Mobile",
    features: [
      "Workout tracking",
      "Progress analytics",
      "Social features",
      "Wearable integration",
      "Offline support"
    ],
    role: "Mobile Developer",
    challenges: "Mengintegrasikan berbagai wearable devices dengan API yang berbeda-beda.",
    results: "Aplikasi mencapai 10,000+ downloads dengan rating 4.6 di App Store.",
    demoUrl: "https://apps.apple.com/app/fitness",
    repoUrl: "https://github.com/username/fitness-app",
    featured: true,
    createdAt: "2024-01-05"
  },
  {
    slug: "cms-headless",
    title: "Headless CMS Dashboard",
    description: "Dashboard untuk content management system dengan editor WYSIWYG.",
    longDescription: "Headless CMS dashboard yang dibangun dengan Next.js, menyediakan editor konten yang powerful, media management, dan API untuk frontend consumption.",
    coverImage: getAssetPath("/projects/cms-cover.jpg"),
    images: [getAssetPath("/projects/cms-1.jpg")],
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "TipTap", "AWS S3"],
    category: "Next.js",
    features: [
      "WYSIWYG editor",
      "Media management",
      "Role-based access control",
      "API generation",
      "Versioning"
    ],
    role: "Full Stack Developer",
    challenges: "Membangun editor WYSIWYG yang fleksibel dan mendukung berbagai tipe konten.",
    results: "CMS digunakan oleh 3 klien enterprise dengan 100+ content editors.",
    demoUrl: "https://demo-cms.example.com",
    featured: false,
    createdAt: "2023-11-20"
  },
  {
    slug: "real-time-chat",
    title: "Real-Time Chat Application",
    description: "Aplikasi chat real-time dengan fitur group, media sharing, dan end-to-end encryption.",
    longDescription: "Aplikasi chat modern dengan WebSocket untuk komunikasi real-time, mendukung chat pribadi dan grup, berbagi media, dan enkripsi end-to-end untuk privasi.",
    coverImage: getAssetPath("/projects/chat-cover.jpg"),
    images: [getAssetPath("/projects/chat-1.jpg"), getAssetPath("/projects/chat-2.jpg")],
    technologies: ["Next.js", "Socket.io", "Node.js", "MongoDB", "Redis", "Tailwind CSS"],
    category: "Next.js",
    features: [
      "Real-time messaging",
      "Group chats",
      "Media sharing",
      "Message reactions",
      "Online status"
    ],
    role: "Full Stack Developer",
    challenges: "Memastikan message delivery yang reliable dengan berbagai kondisi jaringan.",
    results: "Aplikasi menangani 1,000+ concurrent connections dengan message delivery rate 99.9%.",
    demoUrl: "https://demo-chat.example.com",
    repoUrl: "https://github.com/username/realtime-chat",
    featured: true,
    createdAt: "2023-09-15"
  }
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
