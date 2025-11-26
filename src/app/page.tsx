"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { getFeaturedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { getAssetPath } from "@/lib/utils";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
  "REST API",
  "GraphQL",
];

const socialLinks = [
  { href: "https://github.com/username", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/username", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com/username", icon: Twitter, label: "Twitter" },
];

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  // JSON-LD structured data for Person
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nama Saya",
    url: "https://namasaya.com",
    jobTitle: "Software Engineer",
    description:
      "Software Engineer yang fokus pada pengembangan web aplikasi performa tinggi.",
    sameAs: [
      "https://github.com/username",
      "https://linkedin.com/in/username",
      "https://twitter.com/username",
    ],
    knowsAbout: skills,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section - Full Width */}
      <section className="relative w-full overflow-hidden gradient-bg">
        <div className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground"
              >
                Assalamualaikum, Hello My Name
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                <span className="gradient-text">Andhika Firdaus R</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-muted-foreground"
              >
                Software Engineer
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-3xl text-muted-foreground max-w-lg"
              >
                "Learning New Technology, Move Fast and Development Great Products."
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg">
                <Link href="/projects">
                  Lihat Portofolio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/cv">
                  <Download className="mr-2 h-5 w-5" />
                  Unduh CV
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-primary/50 to-primary/30 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl transform transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src={getAssetPath("/linkedin_avatar_andhika.jpg")}
                  alt="Andhika Firdaus Ramadhan"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
            </div>
          </motion.div>
        </div>
        </div>
      </section>

      {/* Skills Section */}
      <Section className="bg-muted/30">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Skills & Teknologi</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Teknologi dan tools yang saya gunakan dalam pengembangan aplikasi modern.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <Badge
                  variant="tech"
                  className="text-sm py-2 px-4 hover:scale-105 transition-transform cursor-default"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </Section>

      {/* Featured Projects Section */}
      <Section>
        <RevealOnScroll>
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Proyek Unggulan</h2>
              <p className="text-muted-foreground">
                Beberapa proyek terbaik yang telah saya kerjakan.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/projects">
                Lihat Semua
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-muted/30">
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Tertarik Bekerja Sama?</h2>
            <p className="text-muted-foreground text-lg">
              Saya selalu terbuka untuk diskusi proyek baru, ide kreatif, atau
              kesempatan untuk menjadi bagian dari tim Anda.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Hubungi Saya</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Tentang Saya</Link>
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </Section>
    </>
  );
}
