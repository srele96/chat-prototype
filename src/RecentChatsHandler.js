import React, { useState } from 'react';
import Modal from './Modal';
import RecentChats from './RecentChats';
import styles from './RecentChatsHandler.module.css';

function RecentChatsHandler() {
  const [chatsVisible, setChatsVisible] = useState(false)

  const messages = [
    "first ashjd ajhsd",
    "second",
    "third",
    "fourth",
    "fifth",
    "second",
    "third",
    "fourth",
    "fifth",
    "second",
    "third",
    "fourth",
    "fifth",
  ];

  return (
    <div>
      <button
        className={styles.showMessages}
        onClick={() => setChatsVisible(!chatsVisible)}
      >
        Show chats
      </button>
      {chatsVisible && (
        <Modal>
          <RecentChats messages={messages} />
        </Modal>
      )}
      <div className={styles.showHide}>
        <RecentChats messages={messages} />
      </div>
    </div>
  )
}

export default RecentChatsHandler;