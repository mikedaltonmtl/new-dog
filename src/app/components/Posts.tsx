"use client";

import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";
import { motion } from "framer-motion";

const builder = imageUrlBuilder(client);

const effectTemplate = function(fromLeft: boolean, roll: boolean) {
  const xValue: string = fromLeft ? '-100%' : '100%';
  return roll ? {
    hidden: {
      x: xValue, y: 50,
      opacity: 0,
      scale: 0.2,
    },
    visible: {
      x: 0, y: 0,
      opacity: 1,
      scale: 1,
      rotate: 720,
      transition: {
        duration: 1.5,
        delay: 0.25,
      }
    },
  } : {
    hidden: {
      x: xValue, y: 0,
      opacity: 0,
      scale: 1,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        type: 'spring',
        stiffness: 100,
        delay: 0.75,
      }
    }
  };
};

const getEffect = function(index: number) {
  switch (index % 5 || 0) {
  case 4:
    // Roll in from right (fromLeft?, roll?)
    return effectTemplate(false, true);
  case 3:
    // Slide in from left (fromLeft?, roll?)
    return effectTemplate(true, false);
  case 2:
    // Appear from center
    return {
      hidden: {
        x: 0, y: 0,
        opacity: 0,
        scale: 0,
      },
      visible: {
        x: 0, y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1.5,
          delay: 0,
        }
      },
    };
  case 1:
    // Roll in from left (fromLeft?, roll?)
    return effectTemplate(true, true);
  default:
    // Slide in from right (fromLeft?, roll?)
    return effectTemplate(false, false);
  }
};

export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {

  const getDimensions = (photoRef: string) => {
    return {
      width: Number(photoRef.split('-')[2].split('x')[0]),
      height: Number(photoRef.split('-')[2].split('x')[1]),
    };
  };

  return (
    <main className="flex flex-col items-center">

      {posts.map((post, index) => (
        <section key={post._id} className="flex flex-nowrap justify-center w-full my-16">
          <motion.div
            variants={getEffect(index || 0)}
            initial='hidden'
            whileInView='visible'
            viewport={{ margin: "-50px 0px -50px 0px", once: true }}
            className="m-0 basis-1/3 shadow-lg shadow-gray-600 overflow-hidden rounded-lg relative"
          >
            {post?.photo ? (
              <Image
                priority
                src={builder.image(post.photo).width(getDimensions(post.photo.asset._ref).width).height(getDimensions(post.photo.asset._ref).height).url()}
                alt={post?.desc}
                width={getDimensions(post.photo.asset._ref).width}
                height={getDimensions(post.photo.asset._ref).height}
                className="photo"
              />
            ) : null}
            <motion.div
              className="overlay text-slate-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              viewport={{ once: true }}
            >
              {post.title && <p className="text-base">{post.title}</p>}
              {post.desc && <p className="text-sm">{post.desc}</p>}
              {post.date && <p className="text-sm">{post.date}</p>}
            </motion.div>
          </motion.div>
        </section>
      ))}
    </main>
  );
}