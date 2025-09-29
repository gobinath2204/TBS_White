import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Resend } from "resend";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const resend = new Resend("re_K8DewUTd_DC7qHTc33bF4eJMHeNkx8J6K"); // put your Resend API key

// API endpoint for your React form
app.post("/send-email", async (req, res) => {
  const { user_name, user_email, user_phone, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Resend requires verified sender domain later
      to: "gobinath2204@gmail.com",
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

    res.json({ success: true, data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
