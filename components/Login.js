import styles from '../styles/Home.module.css';
import Link from 'next/link';

function Login() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Login
        </h1>
        <Link href="/">Home</Link>
        <Link href="/signin">Sign In</Link>
        <Link href="/signup">Sign Up</Link>
        
      </main>
    </div>
  );
}

export default Login;
