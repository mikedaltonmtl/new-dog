## The Why?

We're getting a new puppy this evening. The (rest of the) family is very excited and I know there will be a great many photos taken. This feels like a great opportunity to build a photo album app and practice some nice CSS effects.

### Project Structure

This ended up being a very simple project. I spent most of my time playing with the Framer Motion animations 
and figuring out their `variants` to write more efficient code.

- `page.tsx` fetches the images and information from santiy.io and passes it down to the Posts component. It contains only 2 components in total:
- `<Header>`: I imported the Poppins font from Google fonts as I hadn't used these before.
- `<Posts>`: The images from sanity are sequentially animated into the viewport as the user scrolls down the page. 
There are five different animations which are assigned automatically as the posts are mapped.


### What did I learn?

- I spent some time learning the basics of CSS transitions, which helped me understand Framer Motion a little better.
- A deeper understanding of Framer Motion, this is the first time I've used variants.
- It's also the first time that I use sanity, so there was a learning curve there too.
- Next 13... still getting used to it.
- TypeScript... I really need to do a deep dive here. Right now it seems like an annoyance, but I know it's something I'll be using as standard going forward. 


## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
