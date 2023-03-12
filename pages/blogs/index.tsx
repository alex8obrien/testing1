import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Blogs() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="This is my blog" />
        <meta name="viewport" content="width=device-width, initial-scale=device-height" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Blog page
          </p>
        </div>
      </main>
    </>
  )
}