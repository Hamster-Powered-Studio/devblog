import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import { getSortedPostsData } from "../../lib/posts";
import PostList from "../../components/Utility/PostList";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

//TODO: work on posts view
export default function Home({ allPostsData }) {
  return (
    <>
      <Layout title="Hamster Powered DevBlog">
        <div>
          <h2 className="text-center font-sans font-bold">
            Recent Posts
          </h2>
        </div>
        <PostList postData={allPostsData}/>
      </Layout>
    </>
  );
}
