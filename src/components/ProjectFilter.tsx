"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProjectFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200",
            activeCategory === category
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {activeCategory === category && (
            <motion.span
              layoutId="activeFilter"
              className="absolute inset-0 bg-primary rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </button>
      ))}
    </div>
  );
}

// Logic for filtering projects - used in tests
export function filterProjectsByCategory<T extends { category: string }>(
  projects: T[],
  category: string
): T[] {
  if (category === "All") return projects;
  return projects.filter((project) => project.category === category);
}
