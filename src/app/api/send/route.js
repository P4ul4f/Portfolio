// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const {email, subject, message} = await req.json();
  console.log(email, subject, message);

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      replyTo: email,
      react: (
      <>
      <h1>{subject}</h1>
      <p>¡Gracias por contactarse!</p>
      <p>Nuevo mensaje enviado:</p>
      <p>{message}</p>
      </>
      ),
    });
    
   return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({error});
  }
}
