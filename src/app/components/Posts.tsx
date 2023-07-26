"use client";

import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";
import { motion, AnimatePresence } from "framer-motion";

const builder = imageUrlBuilder(client);

export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {

  const getDimensions = (photoRef: string) => {
    return {
      width: Number(photoRef.split('-')[2].split('x')[0]),
      height: Number(photoRef.split('-')[2].split('x')[1]),
    };
  };

  return (
    <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">

      {posts.map((post, index) => (
        <section key={post._id} className="border-violet-700 bg-orange-300">
          <h2 className="p-4 hover:bg-blue-50">Title: {post.title}</h2>
          <p>Desc: {post.desc}</p>
          <p>index: {index}</p>
          {/* {post?.photo ? (
            <Image
              className="float-left m-0 w-1/3 mr-4 rounded-lg in-from-left"
              src={builder.image(post.photo).width(getDimensions(post.photo.asset._ref).width).height(getDimensions(post.photo.asset._ref).height).url()}
              width={getDimensions(post.photo.asset._ref).width}
              height={getDimensions(post.photo.asset._ref).height}
              alt={post?.desc}
            />
          ) : null} */}

          <motion.div
            initial={{
              x: '100%',
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 10,
            }}
            className="float-left m-0 w-1/3 mr-4"
          >
            <Image
              priority
              src={builder.image(post.photo).width(getDimensions(post.photo.asset._ref).width).height(getDimensions(post.photo.asset._ref).height).url()}
              alt={post?.desc}
              // layout="fill"
              // objectFit="contain"
              width={getDimensions(post.photo.asset._ref).width}
              height={getDimensions(post.photo.asset._ref).height}
              className="rounded-lg"
            />
          </motion.div>
        </section>
      ))}
    </main>
  );
}