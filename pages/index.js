import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import SignupLoginView from './views/SignupLoginView'
import Image from 'next/image'
import FunFactView from './views/FunFactView'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Pet Diary</title>
        <link rel="icon" href="/paw.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.wrapper}>
        <div className={styles.header}>
          <Image
            src="/pets.jpg"
            alt="Pets logo"
            width="100"
            height="100"
          />
        <h1 className={styles.title}>
          Hello Pets
        </h1>
        </div>
        <div className={styles.funfact}><FunFactView/></div>
        <div className={styles.content}><SignupLoginView/></div>
        </div>
      </main>
      <footer className={styles.footer}>
      My pet diary 2021
      </footer>
    </div>
  )
}
