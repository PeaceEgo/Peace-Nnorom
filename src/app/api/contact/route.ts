import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();
    
    console.log('Received form data:', { name, email, message });

    // Validate the data
    if (!name || !email || !message) {
      console.log('Validation failed: Missing fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Validation failed: Invalid email');
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const userId = process.env.EMAILJS_USER_ID ;
    const accessToken = process.env.EMAILJS_ACCESS_TOKEN;  
    const toEmail = process.env.EMAILJS_TO_EMAIL ;

    if (!serviceId || !templateId || !userId || !accessToken || !toEmail) {
      console.error('Missing EmailJS env vars');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const emailjsData = {
      service_id: serviceId,
      template_id: templateId,
      user_id: userId,  
      accessToken: accessToken,  
      template_params: {
        from_name: name,
        from_email: email,
        message: message,
        to_email: toEmail,
        date: new Date().toLocaleDateString(),
      },
    };

    // console.log('Sending to EmailJS with data:', emailjsData);

    const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailjsData),
    });

    // console.log('EmailJS response status:', emailjsResponse.status);

    if (emailjsResponse.ok) {
      // console.log('Email sent successfully');
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      );
    } else {
      const errorText = await emailjsResponse.text();
      // console.error('EmailJS API error response:', errorText);
      return NextResponse.json(
        { error: `Failed to send email: ${errorText}` }, 
        { status: 500 }
      );
    }

  } catch (error) {
    // console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}