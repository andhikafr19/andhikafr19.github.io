This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js 14+, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with dark mode support
- **UI Components**: shadcn/ui (Button, Card, Badge, Input, Textarea, Dialog, Skeleton)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Form Validation**: Zod + React Hook Form
- **Testing**: Vitest + Testing Library
- **Deployment**: Vercel-ready

## ✨ Features

- **Home Page**: Hero section with animated text, skills badges, and featured projects
- **About Page**: Profile, experience timeline, and tech stack grid
- **Portfolio**: Filterable project grid with dynamic detail pages
- **CV Page**: Downloadable PDF resume with summary
- **Contact**: Form with validation and email integration placeholder
- **Dark Mode**: System-aware theme toggle
- **SEO**: Sitemap, robots.txt, Open Graph, JSON-LD structured data
- **Accessibility**: Semantic HTML, ARIA labels, focus states

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun


Open [http://localhost:3000](http://localhost:3000) in your browser.


## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy!

The project includes `vercel.json` with optimized settings.

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
# Add email service credentials when ready
# RESEND_API_KEY=your-api-key
```

## 📄 License

MIT License - feel free to use this template for your personal portfolio!

## 🙏 Credits

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [Framer Motion](https://www.framer.com/motion/)