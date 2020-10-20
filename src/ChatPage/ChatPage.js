import React from 'react';
import ChatWindow from './ChatWindow';
import RecentChatsHandler from '../RecentChatsHandler';
import PeopleOnline from './PeopleOnline';
import styles from './ChatPage.module.css';

function ChatPage() {


  return (
    <div className={styles.chatPage}>
      <div>
         <PeopleOnline />
      </div>
      <div>
        <ChatWindow />
      </div>
      <div>
        <RecentChatsHandler />
      </div>
    </div>
  )
}

export default ChatPage;