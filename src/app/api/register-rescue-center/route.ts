import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

// Define the RescueCenterData type
interface RescueCenterData {
  centerName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  contactNumber: string;
  email: string;
  website: string;
  servicesOffered: string;
  operatingHours: string;
}

// Handler for POST requests
export async function POST(req: NextRequest) {
  const data: RescueCenterData = await req.json();

  const {
    centerName,
    address,
    city,
    state,
    zipCode,
    contactNumber,
    email,
    website,
    servicesOffered,
    operatingHours
  } = data;

  // Validate required fields
  if (
    !centerName ||
    !address ||
    !city ||
    !state ||
    !zipCode ||
    !contactNumber ||
    !email ||
    !email.includes('@') ||
    !website ||
    !servicesOffered ||
    !operatingHours
  ) {
    return NextResponse.json({ message: 'Invalid input. Please fill all the fields correctly.' }, { status: 422 });
  }

  const client = new MongoClient(process.env.MONGODB_URI as string);

  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('rescue_centers');

    await collection.insertOne({
      centerName,
      address,
      city,
      state,
      zipCode,
      contactNumber,
      email,
      website,
      servicesOffered,
      operatingHours
    });

    client.close();

    return NextResponse.json({ message: 'Stored successfully!' }, { status: 201 });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return NextResponse.json({ message: 'Storing registration failed.' }, { status: 500 });
  }
}
