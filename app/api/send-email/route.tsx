import Email from "@/emails/WelcomeTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    resend.emails.send({
        from: "...",
        to: "olusegunotunba@gmail.com",
        subject: "...",
        react: <Email name='sam' />,
    });
}
