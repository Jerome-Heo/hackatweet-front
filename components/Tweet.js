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

           <div className={styles.TweetHead}>
              <img className={styles.eggIcon} src="egg-flat.png" width={50} height={50}/>
              <p>{props.authorUsername}</p><p className={styles.author}>@{props.authorName} - </p> 
              <p>{props.date}</p> 
            </div>

            <p className={styles.content}>{props.content}</p>
              <div className={styles.iconCont}>
                <span className={styles.icons}><FontAwesomeIcon icon={faHeart} onClick={() => handleLikeTweet()} style={heartIconStyle} className="like" /></span>
                <span className={styles.icons}><FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteTweet()} style ={trashIconStyle} className="delete"/></span>
              </div>
        </div>

    )
}

export default Tweet;