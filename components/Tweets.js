import styles from '../styles/Tweet.module.css'

function Tweet(props) {


    return(
        <div className={styles.Tweet}>
            <h3>{props.author}</h3>
            <p>{props.content}</p>
            <p>{props.data}</p>
        </div>

    )
}

export default Tweet