import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
export const siteTitle = "Hamster Powered DevBlog";

//TODO: add new toggled view for home view + styling
const Header = ({ home, title }: { home?: boolean; title: string }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Developer Blog of BBTTT Studios" />
        {/*
      TODO: add new og:image
      */}
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{title}</title>
      </Head>
      <header className="py-2 bg-orange-200">
        <div>
          <div
            className="container flex justify-between items-center mx-auto px-8 
            md:px-14 lg:px-24 w-full
            font-sans"
          >
            <Link href="/">
              <a className="text-3xl font-extrabold text-gray-700">
                H<span className="text-orange-500">P</span>S
              </a>
            </Link>
            <div className="hidden md:flex gap-x-12 items-center font-semibold">
              <Link href="/games">
                <a className="">Games</a>
              </Link>
              <Link href="/posts">
                <a className="">Posts</a>
              </Link>
              <Link href="/about">
                <a className="">About</a>
              </Link>
            </div>
          </div>
          {home && (
            <div className={`${styles.header} z-20`}>
              <Image
                priority
                src="/images/HamsterPoweredStudioTmp.png"
                height={144}
                width={144}
                alt={siteTitle}
                className="rounded-full"
              />
              <h1 className="text-3xl m-3 font-mono font-bold">{siteTitle}</h1>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
