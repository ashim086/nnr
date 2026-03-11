import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactData {
    email: string;
    phone: string;
    question: string;
}

export async function POST(request: NextRequest) {
    try {
        const data: ContactData = await request.json();

        if (!data.email || !data.phone || !data.question) {
            return NextResponse.json(
                { success: false, message: "Email, phone and question are required" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_EMAIL,
            to: "magarashim69086@gmail.com",
            subject: `New Contact Enquiry from ${data.email}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
                        📩 New Contact Enquiry
                    </h2>
                    
                    <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="margin-top: 0; color: #555;">Contact Details</h3>
                        <p><strong>📧 Email:</strong> ${data.email}</p>
                        <p><strong>📞 Phone:</strong> ${data.phone}</p>
                    </div>
                    
                    <div style="background: #f0f7ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="margin-top: 0; color: #555;">Question</h3>
                        <p>${data.question}</p>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
                        <p>This email was sent from Namaste Nepal Removals contact form.</p>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Contact email error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to send email" },
            { status: 500 }
        );
    }
}
