import React from 'react';
import styles from './ChatWindow.module.css';

function PageChatWindow() {
  function simMessages() {
    let messages = [];
    for(let i = 0; i < 20; i++) {
      const choice = Math.floor(Math.random()*2);
      messages.push(<div className={choice<1? styles.inc:styles.out}>some conten dwahod awdhawhiodaw dhawdhdawhadhiowdahioj awhjoid wat</div>);
    }
    return messages;
  }

  return (
    <div className={styles.chatWindow}>
      <div className={styles.messages}>
        {  simMessages() }
      </div>
      <div className={styles.composeMessage}>
        <div className={styles.typeMessage} contentEditable/>
        <button className={styles.sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default PageChatWindow;