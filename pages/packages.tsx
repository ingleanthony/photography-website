import { NextPage } from "next";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Packages.module.css";

const Packages: NextPage = () => {
  return (
    <div className="container">
      <Navbar />
      <main className={styles.main}>
        <p>Work in progress!</p>
      </main>
      <Footer />
    </div>
  );
};

export default Packages;
