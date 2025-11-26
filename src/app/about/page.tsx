import { Metadata } from "next";
import Image from "next/image";
import { Briefcase, GraduationCap, Code2, Heart } from "lucide-react";
import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Tentang Saya",
  description:
    "Pelajari lebih lanjut tentang perjalanan, pengalaman, dan nilai-nilai saya sebagai Software Engineer.",
};

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company ABC",
    period: "2022 - Sekarang",
    description:
      "Memimpin pengembangan aplikasi web dengan Next.js dan TypeScript. Bertanggung jawab untuk arsitektur sistem dan mentoring tim.",
    type: "work",
  },
  {
    title: "Software Engineer",
    company: "Startup XYZ",
    period: "2020 - 2022",
    description:
      "Mengembangkan fitur-fitur baru untuk platform e-commerce menggunakan React dan Node.js.",
    type: "work",
  },
  {
    title: "Junior Developer",
    company: "Digital Agency",
    period: "2018 - 2020",
    description:
      "Membangun website dan aplikasi web untuk berbagai klien menggunakan JavaScript dan PHP.",
    type: "work",
  },
  {
    title: "S1 Teknik Informatika",
    company: "Universitas ABC",
    period: "2014 - 2018",
    description: "Lulus dengan predikat Cum Laude. Fokus pada pengembangan perangkat lunak.",
    type: "education",
  },
];

const techStack = [
  { name: "TypeScript", level: 95, category: "Language" },
  { name: "JavaScript", level: 95, category: "Language" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "Next.js", level: 90, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Express", level: 85, category: "Backend" },
  { name: "PostgreSQL", level: 80, category: "Database" },
  { name: "MongoDB", level: 80, category: "Database" },
  { name: "Tailwind CSS", level: 90, category: "Styling" },
  { name: "Docker", level: 75, category: "DevOps" },
  { name: "Git", level: 90, category: "Tools" },
  { name: "REST API", level: 90, category: "Architecture" },
];

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Menulis kode yang bersih, terbaca, dan mudah dipelihara adalah prioritas utama saya.",
  },
  {
    icon: Heart,
    title: "User Experience",
    description:
      "Fokus pada pengalaman pengguna yang intuitif dan menyenangkan di setiap proyek.",
  },
  {
    icon: Briefcase,
    title: "Problem Solving",
    description:
      "Menikmati tantangan dan mencari solusi kreatif untuk masalah yang kompleks.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section>
        <Breadcrumb items={[{ label: "Tentang" }]} />

        {/* Profile Section */}
        <RevealOnScroll>
          <div className="grid md:grid-cols-3 gap-12 items-start mb-16">
            <div className="md:col-span-1">
              <div className="relative w-full aspect-square max-w-[300px] mx-auto rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/avatar.jpg"
                  alt="Nama Saya"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
            </div>
            <div className="md:col-span-2 space-y-6">
              <h1 className="text-4xl font-bold">Tentang Saya</h1>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Halo! Saya adalah seorang Software Engineer dengan pengalaman lebih
                  dari 5 tahun dalam pengembangan web. Saya memiliki passion yang besar
                  untuk membangun aplikasi yang tidak hanya berfungsi dengan baik,
                  tetapi juga memberikan pengalaman pengguna yang luar biasa.
                </p>
                <p>
                  Perjalanan saya di dunia teknologi dimulai sejak kuliah, di mana saya
                  pertama kali belajar programming. Sejak saat itu, saya terus belajar
                  dan berkembang, mengikuti perkembangan teknologi terbaru untuk
                  memberikan solusi terbaik bagi setiap proyek.
                </p>
                <p>
                  Saat ini, saya fokus pada pengembangan web dengan Next.js, TypeScript,
                  dan teknologi modern lainnya. Saya percaya bahwa kombinasi antara
                  kemampuan teknis dan pemahaman bisnis adalah kunci untuk menciptakan
                  produk yang sukses.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Values Section */}
        <RevealOnScroll>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Nilai & Prinsip</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index}>
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>

        {/* Timeline Section */}
        <RevealOnScroll>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Pengalaman & Pendidikan
            </h2>
            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
              <div className="space-y-8">
                {experiences.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`hidden md:block md:w-1/2 ${
                        index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"
                      }`}
                    >
                      <Card>
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            {item.type === "work" ? (
                              <Briefcase className="h-5 w-5 text-primary" />
                            ) : (
                              <GraduationCap className="h-5 w-5 text-primary" />
                            )}
                            <Badge variant="secondary">{item.period}</Badge>
                          </div>
                          <CardTitle>{item.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {item.company}
                          </p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                    {/* Mobile card */}
                    <div className="md:hidden pl-16">
                      <Card>
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            {item.type === "work" ? (
                              <Briefcase className="h-5 w-5 text-primary" />
                            ) : (
                              <GraduationCap className="h-5 w-5 text-primary" />
                            )}
                            <Badge variant="secondary">{item.period}</Badge>
                          </div>
                          <CardTitle>{item.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {item.company}
                          </p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="hidden md:block md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Tech Stack Grid */}
        <RevealOnScroll>
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <Card key={index} className="group">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{tech.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {tech.category}
                      </Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-500 group-hover:bg-primary/80"
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 text-right">
                      {tech.level}%
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </Section>
    </>
  );
}
