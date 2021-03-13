import styles from '../styles/Home.module.scss'

export default function LoginForm() {
    const Login = event => {
      event.preventDefault() // don't redirect the page
      // where we'll add our form logic
    }
  
    return (
      <form className={styles.form} onSubmit={Login}>
        <label htmlFor="username">Pet Username</label>
        <input id="username" type="text" autoComplete="name" required />
        <label htmlFor="password">Pawsword</label>
        <input type="password" id="password" minLength="8" required />
        <button className={styles.loginButton} type="submit">Login</button>
        <p>Meow here? You can create an account here.</p>
        <button className={styles.signupButton} type="submit">Sign Up</button>
      </form>
    )
  }