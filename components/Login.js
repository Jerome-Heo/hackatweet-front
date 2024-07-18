import styles from "../styles/Login.module.css";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { login, logout } from '../reducers/user'
import { useRouter } from 'next/router'

function Login() {


const URL = 'http://localhost:3000'
const dispatch = useDispatch()

const [signInUsername, setSignInUsername] = useState('')
const [signInPassword, setSignInPassword] = useState('')
const [signUpUsername, setSignUpUsername] = useState('')
const [signUpName, setSignUpName] = useState('')
const [signUpPassword, setSignUpPassword] = useState('')
const [erreurUP, setErreurUp] = useState(false) //sagouin faudra que ça dégage
const [erreurIn, setErreurIn] = useState(false) //sagouin faudra que ça dégage

//sagouin faudra que ça dégage
const resetFields = () => {
      setSignUpName('');
      setSignUpUsername('');
      setSignUpPassword('');
      setSignInUsername('');
      setSignInPassword('');
}

const handleSignUp = () => {
  fetch(`${URL}/users/signup`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name: signUpName, username: signUpUsername, password: signUpPassword}),
    }).then(response => response.json())
      .then(data => {
        console.log(data)
        if(data.result) {
          dispatch(login({username: signUpUsername, token: data.token}));
          resetFields();
          window.location.href = `/home`; 
        } else {
          resetFields();
          setErreurUp(true) //sagouin faudra que ça degage
        }
      })
}

const handleSignIn = () => {
  fetch(`${URL}/users/signin`,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username: signInUsername, password: signInPassword}),
    }).then(response => response.json())
      .then(data => {
        if(data.result) {
          dispatch(login({username: signInUsername, token: data.token}));
          resetFields();
          window.location.href = `/home`;
        } else {
          setErreurIn(true) //sagouin faudra que ça dégage
        }
      })
}

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>LOGIN</h1>
        <img
          src="twitter_logo.png"
          alt="Hack a Tweet"
          width={120}
          height={120}
        />

        <div className={styles.cont}>

          <p>Sign Up {erreurUP && <p>y'a eu une erreur</p>}</p> {/* sagouin faudra que ça dégage*/}

          <input type="text" placeholder="name" value={signUpName} onChange={(e) => setSignUpName(e.target.value)} />
          <input type="text" placeholder="username" value={signUpUsername} onChange={(e) => setSignUpUsername(e.target.value)}/>
          <input type="password" placeholder="password" value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)}/>
          <button onClick={() => handleSignUp()}>sign up</button>
        </div>


        <div className={styles.cont}>

          <p>Sign In {erreurIn && <p>user not found</p>}</p> {/* sagouin faudra que ça dégage*/}

          <input type="text" placeholder="username" value={signInUsername} onChange={(e) => setSignInUsername(e.target.value)}/>
          <input type="password" placeholder="password" value={signInPassword} onChange={(e) => setSignInPassword(e.target.value)}/>
          <button onClick={() => handleSignIn()}>sign in</button>
        </div>

      </main>
    </div>
  );
}

export default Login;
