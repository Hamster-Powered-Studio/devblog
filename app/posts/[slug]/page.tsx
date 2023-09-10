import { serialize } from "next-mdx-remote/serialize";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import PostPage from "./postpage";
import { client } from "../../../sanity/lib/client";
import { postPathsQuery, postQuery } from "../../../sanity/lib/queries";
import { sanityFetch } from "../../../sanity/lib/fetch";
import { SanityDocument } from "next-sanity";
import Post from "../../../components/Sanity/SanityPost";

export async function generateStaticParams() {
  const sanityPosts = await client
    .fetch(postPathsQuery)
    .then((arg) => arg.map((post) => post.params));
  const builtinPosts = getAllPostIds().map((slug) => ({ slug }));
  return sanityPosts.concat(builtinPosts);
}

const builtinPostIds = getAllPostIds();

export default async function PostWrapper({ params }: { params }) {
  if (builtinPostIds.includes(params.slug)) {
    const { content, head: postHead } = getPostData(params.slug);
    const postData = await serialize(content, { scope: postHead });
    return (
      <>
        <PostPage postHead={postHead} postData={postData} />
      </>
    );
  }
  const sanityPost = await sanityFetch<SanityDocument>({
    query: postQuery,
    params,
  });
  return <Post post={sanityPost} />;
}
