import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

// Define the SubscriptionData type
interface SubscriptionData {
  firstName: string;
  lastName: string;
  state: string;
  city: string;
  address: string;
  pinCode: string;
  age: string;
  bloodGroup: string;
  medicalHistory: string;
  email: string;
}

// Handler for POST requests
export async function POST(req: NextRequest) {
  const data: SubscriptionData = await req.json();

  const {
    firstName,
    lastName,
    state,
    city,
    address,
    pinCode,
    age,
    bloodGroup,
    medicalHistory,
    email
  } = data;

  if (
    !firstName ||
    !lastName ||
    !state ||
    !city ||
    !address ||
    !pinCode ||
    !age ||
    !bloodGroup ||
    !medicalHistory ||
    !email ||
    !email.includes('@')
  ) {
    return NextResponse.json({ message: 'Invalid input. Please fill all the fields correctly.' }, { status: 422 });
  }

  const client = new MongoClient(process.env.MONGODB_URI as string);

  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('subscribers');

    await collection.insertOne({
      firstName,
      lastName,
      state,
      city,
      address,
      pinCode,
      age: parseInt(age, 10), // ensure age is stored as a number
      bloodGroup,
      medicalHistory,
      email
    });

    client.close();

    return NextResponse.json({ message: 'Subscription stored successfully!' }, { status: 201 });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return NextResponse.json({ message: 'Storing subscription failed.' }, { status: 500 });
  }
}
