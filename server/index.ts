import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import { handleDemo } from "./routes/demo";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Email route
  app.post("/api/send-email", async (req, res) => {
    const { to, subject, text, admin_subject, admin_text } = req.body;

    // SMTP configuration from environment variables
    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const adminEmail = process.env.ADMIN_EMAIL || user;

    if (!host || !user || !pass) {
      console.warn("SMTP credentials not set. Skipping email sending.");
      return res.status(200).json({ message: "SMTP not configured" });
    }

    try {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465, // true for port 465, false for other ports
        auth: { user, pass },
      });

      // Send confirmation to user
      await transporter.sendMail({
        from: user,
        to,
        subject,
        text,
      });

      // Send notification to admin
      if (adminEmail) {
        await transporter.sendMail({
          from: user,
          to: adminEmail,
          subject: admin_subject || "Admin Notification",
          text: admin_text || text,
        });
      }

      res.status(200).json({ message: "Emails sent successfully" });
    } catch (error: any) {
      console.error("Failed to send email:", error);
      res.status(500).json({ error: error.message || "Failed to send email" });
    }
  });

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  return app;
}
