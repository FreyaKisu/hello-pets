import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import FunFacts from "./FunFact";
import Link from "next/link";

export default function HomeView() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Pet Diary</title>
        <link rel="icon" href="/paw.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <Image src="/pets.jpg" alt="Pets logo" width="100" height="100" />
            <h1 className={styles.title}>Hello Pets</h1>
            <Link href="/login" passHref>
          <a className={styles.loginLink}>
              Login
            </a>
          </Link>

          <Link href="/signup" passHref>
            <a className={styles.signupLink}>
              Sign Up
            </a>
          </Link>
          </div>
         
          <div className={styles.funfact}>
            <FunFacts />
          </div>
        </div>
      </main>
      <footer className={styles.footer}>My pet diary 2021</footer>
    </div>
  );
}
