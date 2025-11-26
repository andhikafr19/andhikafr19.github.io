"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, ContactFormData } from "@/lib/validators";

interface ContactFormProps {
  onSuccess?: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // For static export, use mailto: link
      const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(
        data.subject
      )}&body=${encodeURIComponent(
        `Nama: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
      )}`;
      
      window.open(mailtoLink, "_blank");
      
      setSubmitStatus({
        type: "success",
        message: "Email client akan terbuka. Silakan kirim email dari sana.",
      });
      reset();
      onSuccess?.();
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Gagal membuka email client. Silakan hubungi langsung via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Nama <span className="text-destructive">*</span>
        </label>
        <Input
          id="name"
          placeholder="Nama Anda"
          {...register("name")}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email <span className="text-destructive">*</span>
        </label>
        <Input
          id="email"
          type="email"
          placeholder="email@example.com"
          {...register("email")}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subjek <span className="text-destructive">*</span>
        </label>
        <Input
          id="subject"
          placeholder="Subjek pesan"
          {...register("subject")}
          aria-invalid={!!errors.subject}
        />
        {errors.subject && (
          <p className="text-sm text-destructive">{errors.subject.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Pesan <span className="text-destructive">*</span>
        </label>
        <Textarea
          id="message"
          placeholder="Tulis pesan Anda..."
          {...register("message")}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {submitStatus && (
        <div
          className={`p-4 rounded-lg ${
            submitStatus.type === "success"
              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
              : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
          }`}
          role="alert"
        >
          {submitStatus.message}
        </div>
      )}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Mengirim...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Kirim Pesan
          </>
        )}
      </Button>
    </form>
  );
}
