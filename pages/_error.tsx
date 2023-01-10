import { NextPage, NextPageContext } from 'next';
import Head from "next/head";
import styles from '../styles/Home.module.css';

interface Props {
  statusCode?: number
}

const Error: NextPage<Props> = ({ statusCode }) => {
  return (
    <>
      <Head>
        <title>Error {statusCode}</title>
        <meta name="description" content="This is the error page" />
        <meta name="viewport" content="width=device-width, initial-scale=device-height" />
      </Head>

      <div className={styles.main}>
        <h1>Error {statusCode}</h1>
      </div>

    </>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
