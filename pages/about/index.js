import Layout from "../../components/Layout/Layout";

//TODO: work on posts view
export default function Home({ allPostsData }) {
  return (
    <>
      <Layout title="Hamster Powered DevBlog">
        <div>
          <h2 className="text-center text-4xl font-sans font-bold">
            About Us
          </h2>
        </div>
        <section>
          <h2 className="text-3xl font-semibold mb-7">Introduction</h2>
          
        </section>
      </Layout>
    </>
  );
}
