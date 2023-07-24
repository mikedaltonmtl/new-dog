import { groq } from "next-sanity";

// Get all posts
// export const postsQuery = groq`*[_type == "post"]{
//     ...,
//   }`;
export const postsQuery = groq`*[_type == "post"]`;