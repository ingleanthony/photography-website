import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Contact.module.css";
import camera from "../svg/otherCamera.svg";

export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const About: NextPage = () => {
  let [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const sendMessage = (e: Event) => {
    e.preventDefault();
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let requestOptions: RequestInit = {
      method: "POST",
      headers,
      body: JSON.stringify(values),
      redirect: "follow",
    };

    fetch("/api/contact", requestOptions)
      .then((response) => response.json())
      .then(() => {
        console.log(
          "Thank you for contacting me! I will get back to you as soon as possible!"
        );
      })
      .catch((error) => console.error(error));
    setValues({ name: "", email: "", message: "" });
  };

  return (
    <div className="container">
      <Navbar />
      <main className={styles.main}>
        <form className={styles.contactForm} onSubmit={sendMessage}>
          <Image src={camera} alt="camera" />
          <h1>Contact Me!</h1>
          <div>
            <label>Name</label>
            <br />
            <input
              name="name"
              type="text"
              value={values.name}
              onChange={onChange}
            />
          </div>
          <div>
            <label>Email</label>
            <br />
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={onChange}
            />
          </div>
          <div>
            <label>Message</label>
            <br />
            <textarea
              name="message"
              value={values.message}
              onChange={onChange}
            />
          </div>
          <input type="submit" value="Send" />
        </form>
      </main>
      <Footer />
    </div>
  );
};
export default About;
