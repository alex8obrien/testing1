import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Docs() {
  return (
    <>
      <Head>
        <title>Documents</title>
        <meta name="description" content="This is the documentation for the app" />
        <meta name="viewport" content="width=device-width, initial-scale=device-height" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Docs page
          </p>
        </div>
      </main>
    </>
  )
}