"use client";

import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import * as MDXComponents from "../../../components/MDX/index";
import Head from "next/head";
import Date from "../../../components/Layout/Date";

// export async function generateStaticParams() {
//   const sanityPosts = await client
//     .fetch(postPathsQuery)
//     .then((arg) => arg.map((post) => post.params));
//   const builtinPosts = getAllPostIds();
//   console.log(sanityPosts.concat(builtinPosts));
// }

//DO NOT PASS USER INPUT INTO MDXRemote
export default function PostPage({
  postHead,
  postData,
}: {
  postHead: Record<string, any>;
  postData: Awaited<
    ReturnType<
      typeof serialize<Record<string, unknown>, Record<string, unknown>>
    >
  >;
}) {
  return (
    <>
      <Head>
        <title>{postHead.title}</title>
      </Head>
      <article>
        <h1 className="leading-4 font-semibold text-3xl tracking-tighter my-1 dark:text-white">
          {postHead.title}
        </h1>
        <div className="text-gray-800 dark:text-gray-300 my-3">
          <Date dateString={postHead.date} />
          <p className="font-medium">{"by " + postHead.author}</p>
        </div>
        <div className="prose dark:prose-invert">
          <MDXRemote {...postData} components={MDXComponents} />
        </div>
      </article>
    </>
  );
}
