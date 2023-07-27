"use client";

import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";
import { motion } from "framer-motion";

const builder = imageUrlBuilder(client);

const effects = [
  {
    hidden: {
      x: '-100%',
      opacity: 0,
      scale: 1,
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        // duration: 1,
        type: 'spring',
        delay: 0.5,
      }
    },
  },
  {
    hidden: {
      x: '100%',
      opacity: 0,
      scale: 1,
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        // duration: 1,
        type: 'spring',
        delay: 0.5,
      }
    },
  },
  {
    hidden: {
      y: 100,
      opacity: 0,
      scale: 1,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        // duration: 1,
        type: 'spring',
        delay: 0.5,
      }
    },
  },
];

export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {

  const getDimensions = (photoRef: string) => {
    return {
      width: Number(photoRef.split('-')[2].split('x')[0]),
      height: Number(photoRef.split('-')[2].split('x')[1]),
    };
  };

  return (
    // <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
    <main className="flex flex-col items-center">

      {posts.map((post, index) => (
        <section key={post._id} className="border-2 border-blue-50 flex flex-nowrap justify-center w-full my-16">
          {/* <motion.div className="basis-1/3 border-2 border-blue-600">
            <h2 className="p-4 hover:bg-blue-50">Title: {post.title}</h2>
            <p>Desc: {post.desc}</p>
            <p>index: {index} dimensions: {getDimensions(post.photo.asset._ref).width} x {getDimensions(post.photo.asset._ref).height}</p>
          </motion.div> */}
          <motion.div
            variants={effects[index]}
            initial='hidden'
            whileInView='visible'
            className="m-0 basis-1/4 border-5 border-red-500"
          >
            {post?.photo ? (
              <Image
                priority
                src={builder.image(post.photo).width(getDimensions(post.photo.asset._ref).width).height(getDimensions(post.photo.asset._ref).height).url()}
                alt={post?.desc}
                width={getDimensions(post.photo.asset._ref).width}
                height={getDimensions(post.photo.asset._ref).height}
                className="rounded-lg"
              />
            ) : null}
          </motion.div>
        </section>
      ))}
    </main>
  );
}