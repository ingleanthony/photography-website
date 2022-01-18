import Image from "next/image";
import React, { FC } from "react";
import logo from "../svg/logo.svg";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

export const Navbar: FC = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.navbar}>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Portfolio</Link>
        <Image src={logo} alt="logo" />
        <Link href={"/"}>Packages</Link>
        <Link href={"/"}>Contact</Link>
      </nav>
    </header>
  );
};
