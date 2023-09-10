import Image from "next/legacy/image";
import Carousel, { imageInfo } from "../components/Utility/Carousel";
const images: imageInfo[] = [
  {
    src: "https://images.unsplash.com/photo-1642201344145-0d49517e76e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1523&q=80",
    alt: "test1",
  },
  {
    src: "https://images.unsplash.com/photo-1642277967961-6c5f8c7d746f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "test2",
  },
  {
    src: "https://images.unsplash.com/photo-1642193205798-1bd36383e2b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    alt: "test3",
  },
];
const test = () => {
  return (
    <div>
      <Carousel images={images}></Carousel>
    </div>
  );
};

export default test;
