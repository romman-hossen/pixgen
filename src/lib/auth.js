  import { betterAuth } from "better-auth";
  import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";


  const client = new MongoClient(process.env.PIXGENDB_URI);
  const db = client.db("pixgen");


  export const auth = betterAuth({
      database: mongodbAdapter(db, {
      client
    }),
      emailAndPassword: { 
      enabled: true, 
    }, 
      // 
      // 
  });