import parse from "html-react-parser";
import Layout from "../../components/Layout/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/Layout/Date";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
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
//TODO: prevent xss injection
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="leading-4 font-semibold text-3xl tracking-tighter my-1">
          {postData.title}
        </h1>
        <div className="text-gray-800 my-3">
          <Date dateString={postData.date} />
        </div>
        <div>{parse(postData.contentHtml)}</div>
      </article>
    </Layout>
  );
}
