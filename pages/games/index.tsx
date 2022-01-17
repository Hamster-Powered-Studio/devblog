import Layout from "../../components/Layout/Layout";
import Carousel, { imageInfo } from "../../components/Utility/Carousel";
import HPDM_cover from '../../public/images/games/HPDM_cover.png'
import HPES_cover from '../../public/images/games/HPES_cover.png'
const images: imageInfo[] = [
  {
    src: "/images/games/HPDM_cover.png",
    alt: "Hamster Powered Drilling Machine",
  },
  {
    src: "/images/games/HPES_cover.png",
    alt: "Hamster Powered Elevator Shaft",
  },
];
export default function Home({ allPostsData }) {
  return (
    <>
      <Layout title="Hamster Powered DevBlog">
        <div>
          <h2 className="text-center text-4xl font-sans font-bold">
            Our Games
          </h2>
        </div>
        <div className="flex justify-center my-5">
          <Carousel images={images} />
        </div>
        <section>
          <h2 className="text-3xl font-semibold mb-7">HPES</h2>
        </section>
      </Layout>
    </>
  );
}
