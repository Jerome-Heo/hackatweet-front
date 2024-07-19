import styles from '../styles/Tweet.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addATweet, getAllTweets } from '../reducers/tweets';

function Tweet(props) {


    return(
        <div className={styles.Tweet}>
           <div className={styles.TweetHead}> <h3 className={styles.author}>{props.authorName}@{props.authorUsername}</h3> <p>{props.date}</p> </div>
            <p>{props.content}</p>
            
        </div>

    )
}

export default Tweet;