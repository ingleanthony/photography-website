import { NextPage } from "next";
import Image from "next/image";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import styles from "../styles/About.module.css";
import camera from "../svg/otherCamera.svg";

const About: NextPage = () => {
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
    <div className="container">
      <Navbar />
      <main className={styles.main}>
        <article className={styles.aboutMe}>
          <div>
            <Image src={camera} alt="Camera" />
          </div>
          <h1>Hi, I&apos;m Anthony!</h1>
          <p>
            I am a Computer Science major at Florida State University. However,
            one of my favorite activities is taking pictures. I love capturing
            moments for people that they will remember forever.
          </p>
        </article>
        <div className={styles.portrait}>
          <Image
            src="https://ik.imagekit.io/anthonyinglephoto/anthony?ik-sdk-version=javascript-1.4.3&updatedAt=1645385311819"
            alt="Anthony Ingle"
            height={2700}
            width={1800}
            objectFit="cover"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default About;
