import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";

export default function Footer() {
  return (
    <footer className={`footer`}>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className={styles.vercelLogo}
          width={200}
          height={50}
        />
    </footer>
  )
}