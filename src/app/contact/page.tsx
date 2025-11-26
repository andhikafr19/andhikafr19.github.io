import { Metadata } from "next";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { Section } from "@/components/Section";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi saya untuk diskusi proyek, kolaborasi, atau pertanyaan lainnya.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "email@example.com",
    href: "mailto:email@example.com",
  },
  {
    icon: MapPin,
    label: "Lokasi",
    value: "Jakarta, Indonesia",
    href: null,
  },
  {
    icon: Phone,
    label: "Telepon",
    value: "+62 812 3456 7890",
    href: "tel:+6281234567890",
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/username" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/username" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/username" },
];

export default function ContactPage() {
  return (
    <>
      <Section>
        <Breadcrumb items={[{ label: "Kontak" }]} />

        <RevealOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Hubungi Saya</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Punya proyek yang ingin didiskusikan? Atau hanya ingin say hi? Jangan
              ragu untuk menghubungi saya melalui form di bawah atau melalui kontak
              lainnya.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <RevealOnScroll className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </RevealOnScroll>

          {/* Contact Info Sidebar */}
          <RevealOnScroll delay={0.2} className="space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Info Kontak</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Media Sosial</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                        aria-label={social.label}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle>Ketersediaan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-sm">
                    Tersedia untuk proyek freelance & kolaborasi
                  </p>
                </div>
              </CardContent>
            </Card>
          </RevealOnScroll>
        </div>
      </Section>
    </>
  );
}
