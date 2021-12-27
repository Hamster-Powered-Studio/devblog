import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import * as MDXComponents from "../../components/MDX/index";
import Layout from "../../components/Layout/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/Layout/Date";

export async function getStaticProps({ params }) {
  const { content, head } = getPostData(params.id);
  const postData = await serialize(content, { scope: head });
  //console.log(postData);
  return {
    props: {
      head,
      postData,
    },
  };
}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
//DO NOT PASS USER INPUT INTO MDXRemote
export default function Post({ head: postHead, postData }) {
  return (
    <Layout>
      <Head>
        <title>{postHead.title}</title>
      </Head>
      <article>
        <h1 className="leading-4 font-semibold text-3xl tracking-tighter my-1">
          {postHead.title}
        </h1>
        <div className="text-gray-800 my-3">
          <Date dateString={postHead.date} />
        </div>
        <div className="prose dark:prose-invert">
          <MDXRemote {...postData} components={MDXComponents} />
        </div>
      </article>
    </Layout>
  );
}
