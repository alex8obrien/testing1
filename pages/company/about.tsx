import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function About() {
  return (
    <>

      <Head>
        <title>About Us</title>
        <meta name="description" content="About Us Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            About Us
          </p>
        </div>
      </main>
      
    </>
  )
}