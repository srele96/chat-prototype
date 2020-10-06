import React  from 'react';
import styles from './RecentChats.module.css';

function RecentChats(props) {

  function renderMessages() {
    const messages = props.messages.map(message => 
      (<li>
        <div className={styles.message}>
          <div className={styles.width100}>
            <p className={styles.senderName}>Sender</p>
            <div className={styles.messageContent}>
              {message}
            </div>
          </div>
          <div className={styles.messageSender}>
            <div className={styles.mask}>
              <img src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" alt="Sender" className={styles.senderImg}/>
            </div>
          </div>
        </div>
      </li>)
    );
    return (
      <ul className={styles.recentMessages}>
        {messages}
      </ul>
    );
  }

  return (
    <div className={styles.recentChats}>
      <div className={styles.recentChatsHeader}>
        <h3>Recent messages</h3>
      </div>
      <div className={styles.recentChatsContainer}>
        {renderMessages()}
      </div>
    </div>
  );
}

export default RecentChats;