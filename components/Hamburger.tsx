import React from "react";
import styles from "../styles/Hamburger.module.css";

type HamburgerProps = {
  isOpen: boolean;
};

export default function Hamburger({ isOpen }: HamburgerProps) {
  return (
    <div className="hamburger">
      <div className="burger1"></div>
      <div className="burger2"></div>
      <div className="burger3"></div>
      <style jsx>
        {`
          .hamburger {
            display: none;
            width: 1.5rem;
            aspect-ratio: 1;
            display: flex;
            justify-content: space-around;
            flex-flow: column nowrap;
            z-index: 10;
          }

          .hamburger div {
            width: 1.5rem;
            height: 0.15rem;
            background-color: black;
            border-radius: 8pt;
            transform-origin: 1px;
            transition: all 0.3s;
          }

          .burger1 {
            transform: ${isOpen ? "rotate(45deg)" : "rotate(0)"};
          }
          .burger2 {
            opacity: ${isOpen ? 0 : 1};
          }
          .burger3 {
            transform: ${isOpen ? "rotate(-45deg)" : "rotate(0)"};
          }
        `}
      </style>
    </div>
  );
}
