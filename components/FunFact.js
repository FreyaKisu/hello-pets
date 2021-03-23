import { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import axios from "axios";
import { API_ROUTES } from "../consts/routes";

const fetchRandomFact = async () => {
  const response = await axios.get(API_ROUTES.DAILY_FACT);
  const { data } = response;
  return data.fact;
};

export default function FunFacts() {
  const [fact, setFact] = useState("");

  useEffect( async () => { 
    const fact = await fetchRandomFact()
    setFact(fact);
  }, []);

  return (
    <div className={styles.funfactContainer}>
      <div className={styles.funfactTitleWrapper}>
        <Image
          src="/FunFactTitle.svg"
          alt="daily fun fact"
          width="50"
          height="auto"
        />
      </div>
      <div className={styles.funfactTextWrapper}>
        <p className={styles.funfact}>{fact}</p>
      </div>
    </div>
  );
}
