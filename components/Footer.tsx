import React from "react";
import Image from "next/image";
import logo from "../svg/logo.svg";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
import ImageLink from "./ImageLink";
import facebookSvg from "../svg/facebook.svg";
import instagramSvg from "../svg/instagram.svg";
import phoneSvg from "../svg/phone.svg";
import emailSvg from "../svg/email.svg";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Image src={logo} alt="logo" height={35} />
      <section className={styles.links}>
        <ImageLink
          src={instagramSvg}
          alt="instagram"
          link="https://www.instagram.com/ant.ing/"
        />
        <ImageLink
          src={facebookSvg}
          alt="facebook"
          link="https://www.facebook.com/anthonyinglephotography"
        />
        <ImageLink
          src={emailSvg}
          alt="email"
          link="mailto:contact@anthonyingle.photo"
        />
        <ImageLink src={phoneSvg} alt="phone" link="tel:7273310866" />
      </section>

      <ul>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/"}>Portfolio</Link>
        </li>
        <li>
          <Link href={"/"}>Packages</Link>
        </li>
        <li>
          <Link href={"/"}>Contact</Link>
        </li>
      </ul>

      <p className={styles.name}>Anthony Ingle Photography &#169; 2022</p>
    </footer>
  );
}
