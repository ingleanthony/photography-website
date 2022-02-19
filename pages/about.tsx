import { NextPage } from "next";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import styles from "../styles/About.module.css";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}></main>
      <Footer />
    </div>
  );
};
export default About;
