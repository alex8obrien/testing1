import Image from "next/image";
import styles from "../styles/Home.module.css";
import {navLinks} from "./NavLink";
import Link from "next/link";
import React, {useState} from "react";

export default function Header() {

  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href="/">
          <>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={200}
              height={50}
            />
          </>
        </Link>









        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
          </div>

        <div className={`${ navActive ? "active" : ""} nav__menu-list`}>
          {navLinks.map((link, index) => {
            return (
              <div
                onClick={() => {
                  setActiveIdx(index);
                  setNavActive(false);
                }}
                key={link.name}
              >
                <Link href={link.path} key={index} className={`nav__link`}>
                {link.name}
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  )
}