import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Tweet from "./Tweet";
import styles from '../styles/Tweet.module.css'; 

function LastTweets() {

    const [tweetsData, setTweetsData] = useState([]);
    const User = useSelector((state) => state.user.value)
    useEffect(() => {
        fetch('https://hackatweet-backend-ivory.vercel.app/tweets')
            .then(response => response.json())
            .then(data => {
                setTweetsData(data);
            });
    }, [])

    // const handleDeleteTweet = (token) => {
    //     setTweetContent(tweetContent.filter(Tweet => Tweet.token !== token))
    // }
    const tweets = tweetsData.map((data, i) => {
        let isHost = false 
        if (User.name === data.name) {
           isHost = true 
        }
        const likedBy = tweetsData.some(e => e.name === data.name)
        return <Tweet key={i} {...data} likedBy = {likedBy} isHost = {isHost}/>; 
    })



    return (
        <div className={styles.tweetCont}>

            {tweets}
        </div>
    )
};

export default LastTweets;