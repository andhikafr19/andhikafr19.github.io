import { Metadata } from "next";
import { FileText, Briefcase, GraduationCap, Code2 } from "lucide-react";
import { Section } from "@/components/Section";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { DownloadCVButton } from "@/components/DownloadCVButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "CV",
  description: "Unduh CV saya dan pelajari lebih lanjut tentang pengalaman profesional saya.",
};

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel", "Figma"] },
];

const recentExperience = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company ABC",
    period: "2022 - Sekarang",
    highlights: [
      "Memimpin tim 5 developer dalam pengembangan platform e-commerce",
      "Meningkatkan performa aplikasi sebesar 40%",
      "Mengimplementasikan CI/CD pipeline",
    ],
  },
  {
    title: "Software Engineer",
    company: "Startup XYZ",
    period: "2020 - 2022",
    highlights: [
      "Mengembangkan fitur-fitur core product",
      "Mentoring 2 junior developer",
      "Migrasi codebase ke TypeScript",
    ],
  },
];

export default function CVPage() {
  return (
    <>
      <Section>
        <Breadcrumb items={[{ label: "CV" }]} />

        <RevealOnScroll>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Curriculum Vitae</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Unduh CV lengkap saya untuk melihat detail pengalaman, skill, dan proyek
              yang telah saya kerjakan.
            </p>
            <DownloadCVButton />
          </div>
        </RevealOnScroll>

        {/* Quick Summary */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <RevealOnScroll delay={0.1}>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>5+ Tahun</CardTitle>
                  <p className="text-sm text-muted-foreground">Pengalaman</p>
                </div>
              </CardHeader>
            </Card>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>20+ Proyek</CardTitle>
                  <p className="text-sm text-muted-foreground">Diselesaikan</p>
                </div>
              </CardHeader>
            </Card>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>S1 Teknik Informatika</CardTitle>
                  <p className="text-sm text-muted-foreground">Pendidikan</p>
                </div>
              </CardHeader>
            </Card>
          </RevealOnScroll>
        </div>

        {/* Skills Preview */}
        <RevealOnScroll>
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Ringkasan Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h3 className="font-medium mb-3">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge key={skill} variant="tech">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </RevealOnScroll>

        {/* Recent Experience */}
        <RevealOnScroll>
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Pengalaman Terbaru</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {recentExperience.map((exp, index) => (
                <div
                  key={index}
                  className={index !== recentExperience.length - 1 ? "pb-6 border-b" : ""}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <Badge variant="secondary">{exp.period}</Badge>
                  </div>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </RevealOnScroll>

        {/* Download CTA */}
        <RevealOnScroll>
          <div className="text-center bg-muted/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Lihat Detail Lengkap</h2>
            <p className="text-muted-foreground mb-6">
              Unduh CV untuk melihat pengalaman lengkap, proyek-proyek, dan sertifikasi.
            </p>
            <DownloadCVButton />
          </div>
        </RevealOnScroll>
      </Section>
    </>
  );
}
