import Link from "next/link";
import Layout from "../components/Layout/Layout";
import Rainbow from "../components/MDX/Rainbow"
import { getSortedPostsData } from "../lib/posts";
import PostList from "../components/Utility/PostList";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home title="Hamster Powered DevBlog">
        <div>
          <h2 className="text-center font-sans font-bold">
            <Rainbow>Work In Progress</Rainbow>
          </h2>
        </div>
        <PostList postData={allPostsData}/>
      </Layout>
    </>
  );
}
