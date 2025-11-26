import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Nama minimal 2 karakter" })
    .max(100, { message: "Nama maksimal 100 karakter" }),
  email: z
    .string()
    .email({ message: "Email tidak valid" }),
  subject: z
    .string()
    .min(5, { message: "Subjek minimal 5 karakter" })
    .max(200, { message: "Subjek maksimal 200 karakter" }),
  message: z
    .string()
    .min(10, { message: "Pesan minimal 10 karakter" })
    .max(5000, { message: "Pesan maksimal 5000 karakter" }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
