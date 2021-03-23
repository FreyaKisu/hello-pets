import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function LoginForm() {
  const Login = (event) => {
    event.preventDefault(); // don't redirect the page
    // where we'll add our form logic
  };

  return (
    <div className={styles.container}>
    <form className={styles.form} onSubmit={Login}>
      <label htmlFor="username">Pet Username</label>
      <input id="username" type="text" autoComplete="name" required />
      <label htmlFor="password">Pawsword</label>
      <input type="password" id="password" minLength="8" required />
      <button className={styles.loginButton} type="submit">
        Login
      </button>
      <p>Meow here? You can create an account here.</p>

      <Link href="/signup" passHref>
        <a className={styles.signupLink}>Sign Up</a>
      </Link>
      <Link href="/" passHref>
        <a className={styles.homeLink}>Home</a>
      </Link>
    </form>
    </div>
  );
}
