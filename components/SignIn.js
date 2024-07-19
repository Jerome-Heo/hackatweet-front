import styles from '../styles/SignIn.module.css';
import Link from 'next/link';
import { Modal } from 'antd';

function SignIn() {
  const modalContent = '';
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Sign In
        </h1>
        <Link href="/">Home</Link>
        <Link href="/signup">Sign Up</Link>
        <Link href="/login">Login</Link>
        <Modal getContainer="#react-modals" className={styles.modal} visible={isModalVisible} closable={false} footer={null}>
					{modalContent}
				</Modal>
      </main>
    </div>
  );
}

export default SignIn;