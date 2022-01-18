import Layout from "../../components/Layout/Layout";

//TODO: work on posts view
export default function Home({ allPostsData }) {
  return (
    <>
      <Layout title="Hamster Powered DevBlog">
        <div>
          <h2 className="text-center text-4xl font-sans font-bold">About Us</h2>
        </div>
        <section>
          <h2 className="text-3xl font-semibold mb-7">Introduction</h2>
          <p>
            We&apos;re a hobby-oriented game development group, aiming to actively
            participate in Game Jams such as Global Game Jam and Ludum Dare!
          </p>
          <p className="my-4">
            Currently our group consists of three main members:
          </p>
          <p>
            - Unbanshee: Capable of everything, leader of the group & main designer<br/>
            - SilverBranch: Blueprint Programmer, UI Designer<br/>
            - RulerOfCakes: C++ & Bluperint Programmer<br/>
          </p>
        </section>
      </Layout>
    </>
  );
}
