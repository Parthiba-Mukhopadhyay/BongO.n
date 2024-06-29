import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const client = new MongoClient(process.env.MONGODB_URI as string);
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('rescue_centers');

    const donors = await collection.find({}).toArray();

    const response = NextResponse.json(donors, { status: 200 });

    // Set headers to disable Vercel caching
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

    return response;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return NextResponse.json({ message: 'Failed to fetch data.' }, { status: 500 });
  } finally {
    await client.close();
  }
}
