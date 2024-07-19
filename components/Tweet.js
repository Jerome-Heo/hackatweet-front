import styles from '../styles/Tweet.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addATweet, getAllTweets } from '../reducers/tweets';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faHeart } from '@fortawesome/free-solid-svg-icons'

function Tweet(props) {
    const url = 'https://hackatweet-backend-ivory.vercel.app';
    const token = "3qfkXa48tbdRyNluB1SzEkb2OAJYMavJ";
    const handleLikeTweet = () => {
        props.updateLikedTweets(props.content);
      };
      let heartIconStyle = { 'cursor': 'pointer' };
      if (props.isLiked) {
        heartIconStyle = { 'color': '#e74c3c', 'cursor': 'pointer' };
      }
      
      const deleteTweet = () => {
        fetch(`${url}/tweets/${token}`, {
            method: 'DELETE',
            headers: {
          'Content-Type': 'application/json',
          'Authorization': "3qfkXa48tbdRyNluB1SzEkb2OAJYMavJ"
        }
    }
)}
      let trashIconStyle = { 'cursor': 'pointer' };

    return(
        <div className={styles.Tweet}>
           <div className={styles.TweetHead}> <h3 className={styles.author}>{props.authorName}@{props.authorUsername}</h3> <p>{props.date}</p> </div>
            <p>{props.content}</p>
            <span><FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteTweet()} style ={trashIconStyle} className="delete"/></span>
            <span><FontAwesomeIcon icon={faHeart} onClick={() => handleLikeTweet()} style={heartIconStyle} className="like" /></span>
            
        </div>

    )
}

export default Tweet;