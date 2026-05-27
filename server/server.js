import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

import dotenv from "dotenv";

dotenv.config();


// Configure SMTP transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// API endpoint for your React form
app.post("/send-email", async (req, res) => {
  const { user_name, user_email, user_phone, message } = req.body;

  try {
    const info = await transporter.sendMail({
      from: `Contact Form <${process.env.SMTP_USER}>`,
      to: "info@testbasesolutions.co.uk",
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family:Arial, sans-serif; padding:20px;">
          <h2 style="color:#0066ff;">📩 New Contact Request</h2>
          <p><strong>Name:</strong> ${user_name}</p>
          <p><strong>Email:</strong> ${user_email}</p>
          <p><strong>Phone:</strong> ${user_phone}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        </div>
      `
    });
    res.json({ success: true, info });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
