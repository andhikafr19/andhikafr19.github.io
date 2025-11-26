"use client";

import { useState } from "react";
import { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ProjectCard, ProjectCardSkeleton } from "@/components/ProjectCard";
import { ProjectFilter, filterProjectsByCategory } from "@/components/ProjectFilter";
import { projects, getAllCategories } from "@/lib/projects";

export default function ProjectsPage() {
  const categories = getAllCategories();
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = filterProjectsByCategory(projects, activeCategory);

  return (
    <>
      <Section>
        <Breadcrumb items={[{ label: "Portofolio" }]} />

        <RevealOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Portofolio</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Koleksi proyek yang telah saya kerjakan. Setiap proyek menunjukkan
              kemampuan saya dalam mengembangkan solusi digital yang efektif.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <ProjectFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Tidak ada proyek yang ditemukan untuk kategori ini.
            </p>
          </div>
        )}
      </Section>
    </>
  );
}
