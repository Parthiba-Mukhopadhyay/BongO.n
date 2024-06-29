import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export const revalidate = 0;

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

export async function GET(req: NextRequest){
    const client = new MongoClient(process.env.MONGODB_URI as string);
    try{
        await client.connect();
        const db = client.db();
        const collection = db.collection('petMedicalCamps');

        const camps = (await collection.find().toArray()).reverse();

        return NextResponse.json(camps);

    }catch(e){
        console.error('Error connecting to MongoDB:', e);
        return NextResponse.json({ message: 'Fetching Camp Details failed.' }, { status: 500 });

    }
}