import { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

const FACTS = [
  "Animals are best friends",
  "Looking at animals makes you calm",
  "Petting a cat lowers blood pressure.",
];

const getRandomFact = () => {
  const randomIndex = Math.floor(Math.random() * FACTS.length);
  return FACTS[randomIndex];
};

export default function FunFacts() {
  const [fact, setFact] = useState("");

  useEffect(() => {
    setFact(getRandomFact());
  }, []);

  return (
    <div className={styles.funfactContainer}>
      <div className={styles.funfactTitleWrapper}>
      <Image src="/FunFactTitle.svg" alt="daily fun fact" width="50" height="auto"/>
      </div>
      <div className={styles.funfactTextWrapper}>
        <p className={styles.funfact}>{fact}</p>
      </div>
    </div>
  );
}
