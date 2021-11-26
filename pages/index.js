import Date from "../components/Layout/Date";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import { getSortedPostsData } from "../lib/posts";

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
            YOUVE JUST BEEN VECTORED
          </h2>
        </div>
        <section>
          <h2 className="text-3xl font-semibold mb-7">Posts</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => {
              return (
                <li className="my-2" key={id}>
                  <Link href={`/posts/${id}`}>
                    <a className="font-semibold hover:text-blue-500">{title}</a>
                  </Link>
                  <br/>
                  <small><Date dateString={date}/></small>
                </li>
              );
            })}
          </ul>
        </section>
      </Layout>
    </>
  );
}
