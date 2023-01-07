import Image from "next/image";
import styles from "../styles/Home.module.css";
import {navLinks} from "./NavLink";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className={styles.nav}>
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

        <div className={styles.nav}>
          {navLinks.map((link, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Link href={link.path} key={index} className={`nav__link`}>
                <padding className={styles.nav__link}>{link.name}</padding>
                <!--{link.name}-->

              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  )
}