import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const { method } = req;

  if (method === "POST") {
    try {
      // insert data in db
      const data = req.body;
      const { name, post, date } = data;

      const client = await MongoClient.connect(
        `${process.env.NEXT_PUBLIC_API_URL}`
      );
      const db = client.db();

      const posts = db.collection("posts");
      const result = await posts.insertOne(data);
      console.log(result);
      client.close();

      res.status(201).json({ message: "post added" });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
