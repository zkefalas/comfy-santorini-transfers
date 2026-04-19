import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_6ZAnEyhu_4G9Jj2BywLrtDC2VcbWA6QhH');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      serviceType, pickup, dropoff, fullName, email, 
      phone, date, time, adults, kids, suitcases, bags,
      message // Προσθέσαμε το message εδώ
    } = body;

    const { data, error } = await resend.emails.send({
      from: 'Comfy Website <onboarding@resend.dev>',
      to: ['comfysantorinitransfers@gmail.com'], 
      subject: `New Message: ${serviceType} - ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; color: #333;">
          <h2 style="color: #000; text-align: center; text-transform: uppercase; letter-spacing: 2px;">New Request / Message</h2>
          
          <div style="background: #f9f9f9; padding: 15px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #000;">
            <p><strong>Type/Service:</strong> ${serviceType}</p>
            ${pickup !== 'N/A' ? `<p><strong>Route:</strong> From <strong>${pickup}</strong> to <strong>${dropoff}</strong></p>` : ''}
            ${date !== 'N/A' ? `<p><strong>Date & Time:</strong> ${date} at ${time}</p>` : ''}
          </div>

          <h3 style="border-bottom: 1px solid #eee; padding-bottom: 5px;">Customer Details</h3>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>

          ${message ? `
            <h3 style="border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top: 20px;">Message / Inquiry Content</h3>
            <div style="background: #fff8e1; padding: 15px; border-radius: 10px; font-style: italic;">
              ${message}
            </div>
          ` : ''}

          ${adults !== '0' ? `
            <h3 style="border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top: 20px;">Capacity & Luggage</h3>
            <p><strong>Passengers:</strong> ${adults} Adults, ${kids} Kids</p>
            <p><strong>Baggage:</strong> ${suitcases} Suitcases, ${bags} Bags</p>
          ` : ''}
          
          <p style="font-size: 11px; color: #aaa; margin-top: 40px; text-align: center; border-top: 1px solid #eee; padding-top: 10px;">
            This email was sent from the Comfy Santorini Transfers Contact Form
          </p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}