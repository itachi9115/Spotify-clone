// export async function getStaticProps() {
//     // Get external data from the file system, API, DB, etc.
//     const data = ...
  
//     // The value of the `props` key will be
//     //  passed to the `Home` component
//     return {
//       props: ...
//     }
//   }
// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';

// const postsDirectory = path.join(process.cwd(), 'posts');

// export function getSortedPostsData() {
//   // Get file names under /posts
//   const fileNames = fs.readdirSync(postsDirectory);
//   const allPostsData = fileNames.map((fileName) => {
//     // Remove ".md" from file name to get id
//     const id = fileName.replace(/\.md$/, '');
//       // Read markdown file as string
//       const fullPath = path.join(postsDirectory, fileName);
//       const fileContents = fs.readFileSync(fullPath, 'utf8');
  
//       // Use gray-matter to parse the post metadata section
//       const matterResult = matter(fileContents);
  
//       // Combine the data with the id
//       return {
//         id,
//         ...matterResult.data,
//       };
//     });
//      // Sort posts by date
//   return allPostsData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
// }
// export async function getServerSideProps(context) {
//     return {
//       props: {
//         // props for your component
//       },
//     };
//   }
// import useSWR from 'swr';

// function Profile() {
//   const { data, error } = useSWR('/api/user', fetch);

//   if (error) return <div>failed to load</div>;
//   if (!data) return <div>loading...</div>;
//   return <div>hello {data.name}!</div>;
// }
// export async function getStaticPaths() {
//     const paths = getAllPostIds();
//     return {
//       paths,
//       fallback: false,
//     };
//   }
// import { NextApiRequest, NextApiResponse } from 'next';

// export default (req: NextApiRequest, res: NextApiResponse) => {
//   // ...
// };