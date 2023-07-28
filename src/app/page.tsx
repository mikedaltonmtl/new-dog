import Posts from "@/app/components/Posts";
import Header from "./components/Header";
import { cachedClient } from "../../sanity/lib/client";
import { postsQuery } from "../../sanity/lib/queries";

export default async function Home() {

  const posts = await cachedClient(postsQuery);

  return (
    <main>
      <Header/>
      <Posts posts={posts} />
    </main>
  );
}
