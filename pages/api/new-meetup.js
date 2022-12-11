import { MongoClient } from 'mongodb';

// URL ===  api/new-meetup   ---> It triggers a function that i define 
// in this file.

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

                            //PASS CHANGED SO DONT TRY TO CONNECT TO MY CLUSTER
      const client = await MongoClient.connect("mongodb+srv://lukacc008:123456789@cluster0.lept9un.mongodb.net/meetups?retryWrites=true&w=majority");
      const db = client.db();

      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne({data});

      console.log(result);

      client.close();

      res.status(201).json({ message: "Meetup inserted!" });
    }
}

export default handler;