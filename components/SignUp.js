import styles from '../styles/SignUp.module.css';
import Link from 'next/link';

function SignUp() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Sign Up
        </h1>
        <Link href="/">Home</Link>
        <Link href="/signin">Sign In</Link>
        <Link href="/login">Login</Link>
        
      </main>
    </div>
  );
}

export default SignUp;