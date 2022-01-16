import Image from "next/image";
import React, { useState } from "react";
import styles from "./Carousel.module.scss";

export interface imageInfo {
  src: string;
  alt: string;
}

const Carousel = ({ images }: { images: imageInfo[] }) => {
  const childrenLength = images.length;
  const width = 2000;
  const height = 1000;
  const [currentSlide, setCurrentSlide] = useState(0);
  const changeSlide = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    if (event.target instanceof HTMLButtonElement) {
      const cList = (event.target as HTMLButtonElement).classList;
      setCurrentSlide((state) =>
        cList.contains("prev")
          ? (state + childrenLength - 1) % childrenLength
          : (state + 1) % childrenLength
      );
      console.log("carousel state modified");
    }
  };

  return (
    <section
      className="relative h-48 w-96"
      aria-label="Image Carousel"
    >
      <button
        onClick={changeSlide}
        className={`${styles["carousel-button"]} ${styles.prev}`}
      >
        &#8656;
      </button>
      <button
        onClick={changeSlide}
        className={`${styles["carousel-button"]} ${styles.next}`}
      >
        &#8658;
      </button>
      <ul className="list-none p-0">
        {images.map(({ src, alt }, i) => (
          <li
            className={`${styles.slide} ${(i === currentSlide ? styles.active : "")}`}
            key={i}
          >
            <Image
              src={src}
              alt={alt}
              layout="intrinsic"
              width={width}
              height={height}
              className="block object-cover object-center"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Carousel;
