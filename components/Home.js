import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Tweet from './Tweets';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import LastTweets from './LastTweets';
import { useRouter } from 'next/router';

function Home() {

  
  const [tweetContent, setTweetContent] = useState(" ")
  // const token = useSelector((state) => state.user.value.token)
  const token = "3qfkXa48tbdRyNluB1SzEkb2OAJYMavJ"
  console.log(token)


  const Tweet = () => {
    fetch(`http://localhost:3000/tweets/${token}`,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({content: tweetContent}),
      }).then(response => response.json())
        .then(data => {
          if(data.result) {
            //il faudra mettre un reducer
          } else {
            setErreurIn(true) //sagouin faudra que ça dégage
          }
        })
  }

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          TEST
        </h1>
        <input type="text" value={tweetContent} onChange={(e) => setTweetContent(e.target.value)} placeholder="What's up?"/>
        <button type="tweet" onClick={() => Tweet()}>Tweet</button>
        <p>{`${token}`}</p>
        <LastTweets/>
      </main>
    </div>
  );
}

export default Home;
