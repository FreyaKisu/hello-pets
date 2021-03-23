import styles from "../styles/Home.module.scss";

import Link from "next/link";

export default function SignUpForm() {
  const registerUser = (event) => {
    event.preventDefault(); // don't redirect the page
    // where we'll add our form logic
  };

  return (
    <div className={styles.container}>
    <form className={styles.form} onSubmit={registerUser}>
      <p>
        Hello there, eager beaver! Give us some info to set up your pet profile.
      </p>
      <label htmlFor="username">Pet Username</label>
      <input id="username" type="text" autoComplete="name" required />
      <label htmlFor="password">Pawsword</label>
      <input type="password" id="password" minLength="8" required />
      <button className={styles.signupButton} type="submit">
        Sign Up
      </button>

      <p>Already have a shed? Come on in!</p>
      <Link href="/login" passHref>
        <a className={styles.loginLink}>Login</a>
      </Link>
      <Link href="/" passHref>
        <a className={styles.homeLink}>Home</a>
      </Link>
    </form>
    </div>
  );
}
