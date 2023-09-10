import { serialize } from "next-mdx-remote/serialize";
import { getPostData } from "../../../lib/posts";
import PostPage from "./postpage";

// export async function generateStaticParams() {
//   const sanityPosts = await client
//     .fetch(postPathsQuery)
//     .then((arg) => arg.map((post) => post.params));
//   const builtinPosts = getAllPostIds();
//   console.log(sanityPosts.concat(builtinPosts));
// }

//DO NOT PASS USER INPUT INTO MDXRemote
export default async function PostWrapper({ params }: { params }) {
  const { content, head: postHead } = getPostData(params.slug);
  const postData = await serialize(content, { scope: postHead });
  return (
    <>
      <PostPage postHead={postHead} postData={postData} />
    </>
  );
}
