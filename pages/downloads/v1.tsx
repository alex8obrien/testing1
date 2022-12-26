import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function V1() {
  return (
    <>
      <Head>
        <title>V1 Download</title>
        <meta name="description" content="The download of version 1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>
            This is the download page for version 1 of the app.
          </h1>
        </div>
      </main>
    </>
  )
}