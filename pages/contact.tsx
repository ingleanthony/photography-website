import { NextPage } from "next";
import Image from "next/image";
import React, { useState } from "react";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Contact.module.css";
import chatSvg from "../svg/chat.svg";
import facebookSvg from "../svg/facebook.svg";
import instagramSvg from "../svg/instagram.svg";
import phoneSvg from "../svg/phone.svg";
import emailSvg from "../svg/email.svg";
import ImageLink from "../components/ImageLink";

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

  const onChange = (e: React.ChangeEvent<any>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
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
          <Image src={chatSvg} alt="camera" />
          <h1>Contact Me!</h1>

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

          <small className={styles.linebreak}>OR</small>

          <div>
            <label>Name</label>
            <br />
            <input
              name="name"
              type="text"
              placeholder="Name"
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
              placeholder="Email"
              value={values.email}
              onChange={onChange}
            />
          </div>
          <div>
            <label>Message</label>
            <br />
            <textarea
              name="message"
              placeholder="Message"
              value={values.message}
              onChange={onChange}
              rows={4}
            />
          </div>
          <input className={styles.button} type="submit" value="Send" />
        </form>
      </main>
      <Footer />
    </div>
  );
};
export default About;
