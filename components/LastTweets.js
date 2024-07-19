import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Tweet from "./Tweets";

function LastTweets() {

    const [tweetsData, setTweetsData] = useState([]); 

    useEffect(() => {
        fetch('https://hackatweet-backend-ivory.vercel.app/tweets')
          .then(response => response.json())
          .then(data => {
            setTweetsData(data);
          });
      }, [])


    const tweets = tweetsData.map((data, i) => {
        return <Tweet key={i} {...data} />;
    })


    return (
        <div>   

            {tweets}
        </div>
    )
};

export default LastTweets;