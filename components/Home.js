import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Tweet from './Tweet';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import LastTweets from './LastTweets';
import { useRouter } from 'next/router';
import { logout } from '../reducers/user';
import { addATweet, getAllTweets } from '../reducers/tweets';


function Home() {

  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const tweets = useSelector((state) => state.tweets.value);
  
  const [tweetContent, setTweetContent] = useState("")
  const [tweetsData, setTweetsData] = useState([]);
  // const token = useSelector((state) => state.user.value.token)
  const token = "3qfkXa48tbdRyNluB1SzEkb2OAJYMavJ";
  const url = 'https://hackatweet-backend-ivory.vercel.app';

  const Tweet = () => {
    fetch(`${url}/tweets/${token}`,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({content: tweetContent}),
      }).then(response => response.json())
        .then(data => {
          if(data.result) {
            dispatch(addATweet(data.tweet));
          }
        })
  }

  const Logout = () => {
    dispatch(logout())
    router.push('/')
  }


  return (
    <div>
      <main className={styles.main}>

        <div className={styles.leftCont}>
        <img className={styles.logo} src="twitter_logo.png" alt="Hack a Tweet" width={55} height={45}/>
            <div>
              <div className={styles.Profile}>
                <img src="egg-flat.png" width={70} height={70}/>
                  <div >
                    <div className={styles.profileUserName}>{user.username} </div>
                    <div className={styles.profileName}> @{user.name}</div>
                  </div>
              </div>
              <button className={styles.logoutButton} onClick={() => Logout()}>logout</button>
            </div>
        </div>

          <div className={styles.centerCont}>
              <div>
                <h1 className={styles.title}>Home</h1>
                <input className={styles.tweetInput} type="text" value={tweetContent} onChange={(e) => setTweetContent(e.target.value)} placeholder="What's up?"/>
                <div><button className={styles.tweetPost} type="tweet" onClick={() => Tweet()}>Tweet</button></div>
              </div>
          {<LastTweets/>}
          </div>
        
        <div className={styles.rightCont}> 
          <p>Trends</p>
          <Link href="/hashtag"> page hashtag </Link>
        </div>

      </main>
    </div>
  );
}

export default Home;
