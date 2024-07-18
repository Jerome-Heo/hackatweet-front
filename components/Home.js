import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Tweet from './Tweets';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Home() {

  const [tweetsData, setTweetsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/tweets')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setTweetsData(data);
    });
  }, [])


  const tweets = tweetsData.map((data, i) => {
    return <Tweet key={i} {...data} />;
  })

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          TEST
        </h1>
        {tweets}
        
      </main>
    </div>
  );
}

export default Home;
