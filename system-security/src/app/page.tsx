import Image from "next/image";
import styles from "../app/style/layout.module.css"
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import { useContext } from "react";
import { UserContext } from "./userContext";



export default function Home() {





  return (
    <main className={styles.main}>
      <Header />
      <ContactForm />
    </main>
  );
}
