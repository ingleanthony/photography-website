import Image from "next/image";
import React, { FC, MutableRefObject, useState } from "react";
import logo from "../svg/logo.svg";
import Link from "next/link";
import Hamburger from "./Hamburger";

export const Navbar: FC = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="mobile-logo">
        <Link href="/">
          <a>
            <Image src={logo} alt="logo" height={35} />
          </a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>Gallery</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <Link href={"/"} passHref>
            <div className="logo">
              <Image src={logo} alt="logo" />
            </div>
          </Link>
          <li>
            <Link href={"/packages"}>Packages</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="mobile" onClick={() => setHamburgerOpen(!hamburgerOpen)}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>

      <style jsx>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem 0;
        }

        .navbar nav {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .navbar a {
          font-weight: 300;
        }

        .navbar ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          flex-direction: row;
          font-size: 14pt;
          font-weight: 200;
          width: 100%;
          max-width: 50rem;
        }

        .navbar nav {
          z-index: 10;
          transition: all 0.3s;
        }

        .mobile {
          display: none;
          cursor: pointer;
          z-index: 99;
        }

        .mobile-logo {
          display: none;
        }

        .logo {
          display: block;
          width: 100%;
          max-width: 15rem;
          cursor: pointer;
        }

        @media (max-width: 767px) {
          .mobile {
            display: block;
            position: absolute;
            right: 1.5rem;
          }

          .navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 10;
            background-color: rgb(255, 255, 255, 0.95);
            height: 3rem;
            padding: 1rem 0;
          }

          .navbar ul {
            flex-direction: column;
            gap: 1em;
            margin-bottom: 1em;
            align-items: flex-start;
            justify-content: flex-start;
            font-size: calc(1em + 1vh);
            transition: 0.4s all;
            opacity: ${hamburgerOpen ? "1" : "0"};
            transform: translateX(${hamburgerOpen ? "0" : "100%"});
          }

          .navbar nav {
            align-items: flex-start;
            width: auto;
            position: fixed;
            z-index: 10;
            inset: 0 0 0 30%;
            padding: 12vh 2rem;
            background-color: rgb(255, 255, 255, 0.98);
            transform: translateX(${hamburgerOpen ? "0" : "100%"});
          }

          @supports (backdrop-filter: blur(1rem)) {
            .navbar ul {
              background-color: rgb(255, 255, 255, 0.7);
              backdrop-filter: blur(1rem);
            }
          }

          .mobile-logo {
            display: block;
            cursor: pointer;
          }

          .logo {
            max-width: 10rem;
            order: -1;
          }
        }
      `}</style>
    </header>
  );
};
