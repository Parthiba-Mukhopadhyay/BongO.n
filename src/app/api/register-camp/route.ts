import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

// Define the CampData type
interface CampData {
  campName: string;
  location: string;
  city: string;
  state: string;
  zipCode: string;
  contactNumber: string;
  email: string;
  website: string;
  servicesProvided: string;
  eventDates: string;
}

// Handler for POST requests
export async function POST(req: NextRequest) {
  const data: CampData = await req.json();

  const {
    campName,
    location,
    city,
    state,
    zipCode,
    contactNumber,
    email,
    website,
    servicesProvided,
    eventDates
  } = data;

  // Validate required fields
  if (
    !campName ||
    !location ||
    !city ||
    !state ||
    !zipCode ||
    !contactNumber ||
    !email ||
    !email.includes('@') ||
    !website ||
    !servicesProvided ||
    !eventDates
  ) {
    return NextResponse.json({ message: 'Invalid input. Please fill all the fields correctly.' }, { status: 422 });
  }

  const client = new MongoClient(process.env.MONGODB_URI as string);

  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('petMedicalCamps');

    await collection.insertOne({
      campName,
      location,
      city,
      state,
      zipCode,
      contactNumber,
      email,
      website,
      servicesProvided,
      eventDates
    });

    client.close();

    return NextResponse.json({ message: 'Stored successfully!' }, { status: 201 });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return NextResponse.json({ message: 'Storing registration failed.' }, { status: 500 });
  }
}
