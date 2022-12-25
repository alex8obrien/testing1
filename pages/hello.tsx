import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer/footer'

export default function HelloPage() {
  return (
    <>
      <Head>
        <title>Hello Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Hello Page
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}