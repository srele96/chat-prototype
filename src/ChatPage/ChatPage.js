import React from 'react';
import ChatWindow from './ChatWindow';
import RecentChatsHandler from '../RecentChatsHandler'
import styles from './ChatPage.module.css';

function ChatPage() {
  function renderPeopleOnline() {
    let people = [];
    for(let i = 0; i < 4; i++) {
      people.push(
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "75px",
              height: "75px",
              borderRadius: "50%",
              backgroundImage: "url(https://picsum.photos/200)",
              backgroundPosition: 'center',
              'backgroundSize': 'cover'
            }}
          />
          <div
            style={{
              width: "75px",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            <p>Name LName</p>
          </div>
        </div>
      )
    }
    return (
      <div
        style={{
          width: "100px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4>People ready to chat</h4>
        <div style={{'padding': '10px 0'}}>{people}</div>
        <button
          style={{
            backgroundColor: "inherit",
            padding: "5px",
            borderRadius: "1rem",
          }}
        >
          Refresh
        </button>
      </div>
    )
  }

  return (
    <div className={styles.chatPage}>
      <div>
        { renderPeopleOnline() }
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