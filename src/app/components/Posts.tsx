import type { SanityDocument } from "@sanity/client";

export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {

  return (
    <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">

      {posts.map((post) => (
        <h2 key={post._id} className="p-4 hover:bg-blue-50">{post.title}</h2>
      ))}
      
    </main>
  );
}