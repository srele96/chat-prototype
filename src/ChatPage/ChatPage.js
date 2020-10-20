import React from 'react';
import ChatWindow from './ChatWindow';
import PeopleOnline from './PeopleOnline';
import RecentChats from '../RecentChats';
import styles from './ChatPage.module.css';

function ChatPage() {
  const messages = ['a','b','c','d','h','a', 'asd', 'a', 'a'];
  return (
    <div className={styles.chatPage}>
      <div className={styles.showHide}>
        <PeopleOnline />
      </div>
      <div>
        <ChatWindow />
      </div>
      <div className={styles.showHide}>
        <RecentChats messages={messages}/>
      </div>
    </div>
  )
}

export default ChatPage;