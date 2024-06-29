import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

// Define the ClinicData type
interface ClinicData {
  clinicName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  email: string;
  website: string;
  servicesOffered: string;
  workingHours: string;
}

// Handler for POST requests
export async function POST(req: NextRequest) {
  const data: ClinicData = await req.json();

  const {
    clinicName,
    address,
    city,
    state,
    zipCode,
    phoneNumber,
    email,
    website,
    servicesOffered,
    workingHours
  } = data;

  // Validate required fields
  if (
    !clinicName ||
    !address ||
    !city ||
    !state ||
    !zipCode ||
    !phoneNumber ||
    !email ||
    !email.includes('@') ||
    !website ||
    !servicesOffered ||
    !workingHours
  ) {
    return NextResponse.json({ message: 'Invalid input. Please fill all the fields correctly.' }, { status: 422 });
  }

  const client = new MongoClient(process.env.MONGODB_URI as string);

  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('clinics');

    await collection.insertOne({
      clinicName,
      address,
      city,
      state,
      zipCode,
      phoneNumber,
      email,
      website,
      servicesOffered,
      workingHours
    });

    client.close();

    return NextResponse.json({ message: 'Stored successfully!' }, { status: 201 });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return NextResponse.json({ message: 'Storing registration failed.' }, { status: 500 });
  }
}
