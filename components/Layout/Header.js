import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
export const siteTitle = "Hamster Powered DevBlog";

//TODO: add new toggled view for home view + styling
const Header = ({ home, title }) => {
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
      <header className="bg-blue-200">
        <div>
          {home ? (
            <div className={`${styles.header} z-20`}>
              <Image
                priority
                src="/images/HamsterPoweredStudioTmp.png"
                height={144}
                width={144}
                alt={siteTitle}
                className="rounded-full"
              />
              <h1 className="text-3xl m-3 font-serif">{siteTitle}</h1>
            </div>
          ) : (
            <div className={`${styles.header} z-20`}>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/HamsterPoweredStudioTmp.png"
                    height={144}
                    width={144}
                    alt={siteTitle}
                    className="rounded-full"
                  />
                </a>
              </Link>
              <h2>
                <Link href="/">
                  <a className="text-3xl m-3 font-serif">{siteTitle}</a>
                </Link>
              </h2>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
