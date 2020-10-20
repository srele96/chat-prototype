import React from 'react';
import styles from './RecentChats.module.css';

function RecentChats(props) {
  const staticURL = 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80';
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
            <div className={styles.mask} 
              style={{'backgroundImage': `url(${staticURL})`, 
                'backgroundPosition': 'center', 
                'backgroundSize': 'cover'}}>
            </div>
          </div>
        </div>
      </li>)
    );
    return (
      <ul className={styles.messagesContainer}>
        {messages}
      </ul>
    );
  }

  return (
    <div className={styles.recentChats}>
      <div className={styles.recentChatsHeader}>
        <h3 className={styles.headerTitle}>Recent chats</h3>
      </div>
      <div className={styles.recentChatsContainer}>
        {renderMessages()}
      </div>
    </div>
  );
}

export default RecentChats;