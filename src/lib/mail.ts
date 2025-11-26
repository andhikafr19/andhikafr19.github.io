import { ContactFormData } from "./validators";

interface SendMailResult {
  success: boolean;
  message: string;
}

/**
 * Send email using external service
 * Currently logs to console - integrate with Resend/SendGrid/EmailJS for production
 */
export async function sendMail(data: ContactFormData): Promise<SendMailResult> {
  // In production, integrate with your email service:
  // - Resend: https://resend.com
  // - SendGrid: https://sendgrid.com
  // - EmailJS: https://emailjs.com
  
  try {
    // Placeholder: Log email to console
    console.log("===== NEW CONTACT FORM SUBMISSION =====");
    console.log(`From: ${data.name} <${data.email}>`);
    console.log(`Subject: ${data.subject}`);
    console.log(`Message: ${data.message}`);
    console.log("========================================");
    
    // Example Resend integration (uncomment when ready):
    /*
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'contact@yourdomain.com',
      to: 'your-email@example.com',
      subject: `[Contact Form] ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });
    */
    
    return {
      success: true,
      message: "Email berhasil dikirim! Kami akan segera menghubungi Anda.",
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      message: "Gagal mengirim email. Silakan coba lagi nanti.",
    };
  }
}
