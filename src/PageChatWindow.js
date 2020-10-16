import React, { Fragment } from 'react';
import RecentChats from './RecentChats';
import styles from './PageChatWindow.module.css';

function PageChatWindow(props) {
  function simMessages() {
    let messages = [];
    for(let i = 0; i < 20; i++) {
      const choice = Math.floor(Math.random()*2);
      messages.push(<div className={choice<1? styles.inc:styles.out}>some content</div>);
      console.log(messages);
    }
    return messages;
  }

  return (
    <Fragment>
      <div className={styles.chatWindow}>
        <div className={styles.chatWrap}>
          <div className={styles.messages}>
            {/* content has to be fetched */}
            {  simMessages() }
          </div>
          <div className={styles.composeMessage}>
            <div className={styles.typeMessage} contentEditable/>
            <button className={styles.sendMessage}>Send</button>
          </div>
        </div>
      </div>
      <RecentChats messages={['one', 'two', 'three', 'four', 'five', 'six']} />
    </Fragment>
  );
}

export default PageChatWindow;