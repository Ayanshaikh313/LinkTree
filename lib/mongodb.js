import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

let client;
let clientPromise;

if (!uri) {
  throw new Error('Add Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') { 
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect().catch(err => {
      console.error('Failed to connect to MongoDB:', err);
      throw err; // Rethrow the error after logging it
    });
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect().catch(err => {
    console.error('Failed to connect to MongoDB:', err);
    throw err; // Rethrow the error after logging it
  });
}

export default clientPromise;
