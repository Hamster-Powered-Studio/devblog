import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import Carousel, { imageInfo } from "../../components/Utility/Carousel";
import HPDM_cover from "../../public/images/games/HPDM_cover.png";
import HPES_cover from "../../public/images/games/HPES_cover.png";
const images: imageInfo[] = [
  {
    src: "/images/games/HPDM_cover.png",
    alt: "Hamster Powered Drilling Machine",
  },
  {
    src: "/images/games/HPES_cover.png",
    alt: "Hamster Powered Elevator Shaft",
  },
  {
    src: "/images/games/Bloop_cover.png",
    alt: "Bloop",
  },
  {
    src: "/images/games/Skyship_cover.png",
    alt: "Skyship Simulator 2021",
  }
];
export default function Home({ allPostsData }) {
  return <>
    <Layout title="Hamster Powered DevBlog">
      <div>
        <h2 className="text-center text-4xl font-sans font-bold">
          Our Games
        </h2>
        <p className="text-center mt-5">
          Currently all of our games are made for game jams(mostly Ludum
          Dare), <br />
          You can view the details here.
        </p>
      </div>
      <div className="flex justify-center my-5">
        <Carousel images={images} />
      </div>
      <section>
        <h2 className="text-3xl font-semibold my-7">
          HPES - Hamster Powered Elevator Shaft
        </h2>
        <article>
          Climb the elevator shaft of a crumbling tower. Get as high as you
          can before the building comes crumbling down. Oh... and watch out
          for falling elevators. Featuring a global leaderboard for you to
          climb also. Show off your skills and stand above everyone else. DLSS
          and Raytracing supported.
        </article>
        <Link
          href="https://unbansheee.itch.io/hamster-powered-elevator-shaft"
          className="text-blue-400">
          Download Link
        </Link>
        <h2 className="text-3xl font-semibold my-7">
          HPDM - Hamster Powered Drilling Machine
        </h2>
        <article>
          Drill your way down into the depths of the earth and find treasures
          untold. Upgrade your drill and dig deeper than ever before. Fight
          your way to the top (bottom?) of the leaderboard and claim your
          throne. DISCLAIMER: No hamsters were harmed in the making of this
          game.
        </article>
        <Link href="https://unbansheee.itch.io/hpdm" className="text-blue-400">
          Download Link
        </Link>
        <h2 className="text-3xl font-semibold my-7">
          Bloop
        </h2>
        <article>
        Help Bloop reach his destination with the power of colour!
        Made for Kiwijam 2021
        </article>
        <Link href="https://unbansheee.itch.io/bloop" className="text-blue-400">
          Download Link
        </Link>
        <h2 className="text-3xl font-semibold my-7">
          Skyship Simulator 2021
        </h2>
        <article>
        A small proof of concept project for a physics driven airship flight system utilising vector math
        </article>
        <Link
          href="https://unbansheee.itch.io/airship-simulator-2021"
          className="text-blue-400">
          Download Link
        </Link>
      </section>
    </Layout>
  </>;
}
