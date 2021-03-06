import { useState } from 'react'
import debounce from 'lodash'
import styles from '../../styles/Home.module.scss'

export default function FunFacts() {

    const [fact, setFact] = useState([]);

    const showFact = debounce(async value => {
      let facts = ["Animals are best friends", "Looking at animals makes you calm",
       "Petting a cat lowers blood pressure."];
       fact = facts[Math.floor(Math.random()*facts.length)];
  
      setFact([...fact, value]);
      console.log(fact);
    }, 1000);
    
      return (
       <div className={styles.funfactContainer}>
           <h3 className={styles.funfactTitle}>Fun Fact Of The Day</h3>
           <p className={styles.funfact} onLoad={e => showFact(e.target.value)}>{fact}</p>
       </div>
      )

}