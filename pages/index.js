import { MongoClient } from "mongodb";

import Hero from "../components/Hero";
import Card from "../components/Card";

export default function Home({ posts }) {
  return (
    <div>
      <Hero />
      <Card posts={posts} />
    </div>
  );
}

export async function getServerSideProps() {
  const client = await MongoClient.connect(
    `${process.env.NEXT_PUBLIC_API_URL}`
  );

  const db = client.db();
  const postsCollection = db.collection("posts");
  const posts = await postsCollection.find().toArray();

  client.close();

  return {
    props: {
      posts: posts.map((post) => ({
        id: post._id.toString(),
        name: post.name,
        post: post.post,
        date: post.date,
      })),
    },
  };
}
