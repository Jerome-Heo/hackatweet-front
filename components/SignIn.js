import styles from '../styles/SignIn.module.css';
import Link from 'next/link';

function SignIn() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Sign In
        </h1>
        <Link href="/">Home</Link>
        <Link href="/signup">Sign Up</Link>
        <Link href="/login">Login</Link>
        
      </main>
    </div>
  );
}

export default SignIn;