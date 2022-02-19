import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { SRLWrapper } from "simple-react-lightbox";
import useFetch from "../hooks/useFetch";
import Masonry from "react-masonry-css";
import Script from "next/script";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const { loading, error, data } = useFetch(`/api/portfolio`);

  const urlEndpoint = "https://ik.imagekit.io/anthonyinglephoto/";
  const imageKitLoader = ({ src, width, quality }: any) => {
    if (src[0] === "/") src = src.slice(1);
    const params = [`w-${width}`];

    if (quality) {
      params.push(`q-${quality}`);
    }
    const paramsString = params.join(",");
    let urlEndpointTemp = urlEndpoint;

    if (urlEndpointTemp[urlEndpointTemp.length - 1] === "/")
      urlEndpointTemp = urlEndpointTemp.substring(
        0,
        urlEndpointTemp.length - 1
      );

    return `${urlEndpointTemp}/${src}?tr=${paramsString}`;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Anthony Ingle Photography</title>
        <meta name="description" content="Tallahassee Portrait Photography" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Script
        src={
          "https://runtime.imagekit.io/0gr1w07bzr6iu/v1/js/network-based-adaption.js?v=" +
          new Date().getTime()
        }
        strategy="beforeInteractive"
      />

      <Navbar />

      {/* <SRLWrapper
        options={{
          caption: { showCaption: false },
          buttons: { showDownloadButton: false },
        }}
      > */}
      <Masonry
        breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((photo, index) => {
          return (
            <div className={styles.imageContainer} key={photo.fileId}>
              <Image
                className={styles.image}
                height={photo.height}
                width={photo.width}
                // placeholder="blur"
                // blurDataURL={photo.thumbnail}
                src={photo.url}
                objectFit="cover"
                alt={`photo${index}`}
                quality={75}
                srl_gallery_image="true"
              />
            </div>
          );
        })}
      </Masonry>
      {/* </SRLWrapper> */}
      <Footer />
    </div>
  );
};

export default Home;
