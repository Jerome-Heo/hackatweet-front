import styles from '../styles/Tweet.module.css'

function Tweet(props) {


    return(
        <div className={styles.Tweet}>
           <div className={styles.TweetHead}> <h3 className={styles.author}>{props.author}</h3> <p>{props.date}</p> </div>
            <p>{props.content}</p>
            
        </div>

    )
}

export default Tweet