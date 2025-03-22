import { google } from 'googleapis';
import { NextResponse } from 'next/server';

// กำหนดค่า OAuth2 client
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY 
  ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n') 
  : '';
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL || '';
const GOOGLE_CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || '';


export async function GET(request: Request) {
  console.log('Client email exists:', !!process.env.GOOGLE_CLIENT_EMAIL);
  console.log('Private key exists:', !!process.env.GOOGLE_PRIVATE_KEY);
  console.log('Calendar ID exists:', !!process.env.GOOGLE_CALENDAR_ID);
  const { searchParams } = new URL(request.url);
  const start = searchParams.get('start');
  const end = searchParams.get('end');
  
  if (!start || !end) {
    return NextResponse.json(
      { error: 'Start and end dates are required' },
      { status: 400 }
    );
  }
  
  try {
    // ตรวจสอบการตั้งค่า
    if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_CALENDAR_ID) {
      console.error('Missing Google Calendar credentials');
      return NextResponse.json(
        { error: 'Server configuration error - missing credentials' },
        { status: 500 }
      );
    }
    
    // สร้าง JWT auth client
    const auth = new google.auth.JWT({
      email: GOOGLE_CLIENT_EMAIL,
      key: GOOGLE_PRIVATE_KEY,
      scopes: ['https://www.googleapis.com/auth/calendar.readonly']
    });

    // สร้าง calendar client
    const calendar = google.calendar({ version: 'v3', auth });
    
    // เรียกใช้ API Google Calendar
    const response = await calendar.events.list({
      calendarId: GOOGLE_CALENDAR_ID,
      timeMin: `${start}T00:00:00Z`,
      timeMax: `${end}T23:59:59Z`,
      singleEvents: true,
      orderBy: 'startTime',
    });
    
    return NextResponse.json({ events: response.data.items || [] });
  } catch (error: any) {
    console.error('Error fetching calendar events:', error);
    
    return NextResponse.json(
      {
        error: 'Failed to fetch calendar events',
        message: error.message || 'Unknown error',
        details: error.response?.data?.error || {},
      },
      { status: 500 }
    );
  }

  
}