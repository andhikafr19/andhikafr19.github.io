import { describe, it, expect } from "vitest";
import { filterProjectsByCategory } from "@/components/ProjectFilter";

describe("filterProjectsByCategory", () => {
  const mockProjects = [
    { slug: "project-1", title: "Project 1", category: "Next.js" },
    { slug: "project-2", title: "Project 2", category: "React" },
    { slug: "project-3", title: "Project 3", category: "Next.js" },
    { slug: "project-4", title: "Project 4", category: "Node.js" },
  ];

  it("should return all projects when category is 'All'", () => {
    const result = filterProjectsByCategory(mockProjects, "All");
    expect(result).toHaveLength(4);
    expect(result).toEqual(mockProjects);
  });

  it("should filter projects by specific category", () => {
    const result = filterProjectsByCategory(mockProjects, "Next.js");
    expect(result).toHaveLength(2);
    expect(result[0].category).toBe("Next.js");
    expect(result[1].category).toBe("Next.js");
  });

  it("should return empty array for non-existent category", () => {
    const result = filterProjectsByCategory(mockProjects, "Mobile");
    expect(result).toHaveLength(0);
  });

  it("should filter correctly for single match", () => {
    const result = filterProjectsByCategory(mockProjects, "Node.js");
    expect(result).toHaveLength(1);
    expect(result[0].slug).toBe("project-4");
  });
});
