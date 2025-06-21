"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

const emailSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

export async function sendEmail(formData) {
  try {
    const validatedData = emailSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    // Create Gmail transporter - Fixed the method name
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password (not regular password)
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "khoirunasmuhammad@gmail.com",
      subject: `New Message from ${validatedData.name}`,
      html: `
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: validatedData.email,
    });

    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Email sending error:", error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation error",
        errors: error.errors.reduce((acc, err) => {
          acc[err.path[0]] = err.message;
          return acc;
        }, {}),
      };
    }

    return {
      success: false,
      message: "Failed to send email. Please try again.",
    };
  }
}
