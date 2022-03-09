import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from "../components/Nav"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tudor Alexandru - An enthusiastic developer</title>
        <meta name="description" content="Hi, I'm Tudor Alexandru and I like to make websites for the WWW." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
    
    </div>
  )
}
