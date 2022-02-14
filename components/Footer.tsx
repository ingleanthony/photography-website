import React from "react";
import Image from "next/image";
import logo from "../svg/logo.svg";
import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Image src={logo} alt="logo" height={35} />
      <ul>
        <li>
          <Link href={"/"}>About</Link>
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
      <Link href="https://www.facebook.com/anthonyinglephotos" passHref>
        <i className="fa fa-facebook"></i>
      </Link>
      <Link href="https://www.instagram.com/ant.ing/" passHref>
        <i className="fa fa-instagram"></i>
      </Link>
      <p className={styles.name}>Anthony Ingle Photography &#169; 2022</p>
    </footer>
  );
}
