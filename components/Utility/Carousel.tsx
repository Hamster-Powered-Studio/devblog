import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.scss";

export interface imageInfo {
  src: string | StaticImageData;
  alt: string;
}

const Carousel = ({
  images,
  width = 600,
  height = 400,
}: {
  images: imageInfo[];
  width?: number;
  height?: number;
}) => {
  const childrenLength = images.length;

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

  useEffect(() => {
    const timerId = setInterval(
      () => setCurrentSlide((state) => (state + 1) % childrenLength),
      5000
    );
    return () => {
      clearInterval(timerId);
    };
  }, [currentSlide, childrenLength]);

  return (
    <section
      className="relative overflow-hidden bg-slate-200 rounded-lg"
      aria-label="Image Carousel"
      style={{ width: `${width}px`, height: `${height}px` }}
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
            className={`${styles.slide} ${
              i === currentSlide ? styles.active : ""
            }`}
            key={i}
          >
            {typeof src !== "string" ? (
              <Image
                src={src}
                alt={alt}
                layout="intrinsic"
                className="block object-cover object-center"
                objectFit="contain"
              />
            ) : (
              <Image
                src={src}
                alt={alt}
                layout="intrinsic"
                width={width}
                height={height}
                className="block object-cover object-center"
                objectFit="contain"
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Carousel;
