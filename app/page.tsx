import Link from "next/link";
import Layout from "../components/Layout/Layout";
import Rainbow from "../components/MDX/Rainbow";
import { getSortedPostsData } from "../lib/posts";
import PostList from "../components/Utility/PostList";
import { InferGetStaticPropsType } from "next";
import { SanityDocument, createClient } from "next-sanity";
import { client } from "../sanity/lib/client";
import SanityPostList from "../components/Sanity/SanityPostList";
import { sanityFetch } from "../sanity/lib/fetch";
import { postsQuery } from "../sanity/lib/queries";

const allPostsData = getSortedPostsData();

export default async function Home() {
  const sanityPosts = await sanityFetch<SanityDocument[]>({
    query: postsQuery,
  });
  console.log(sanityPosts);
  return (
    <>
      <Layout home title="Hamster Powered DevBlog">
        <div>
          <h2 className="text-center font-sans font-bold">
            <Rainbow>Work In Progress</Rainbow>
          </h2>
        </div>
        <PostList postData={allPostsData} />
        <SanityPostList posts={sanityPosts} />
      </Layout>
    </>
  );
}
