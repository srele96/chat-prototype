import React  from 'react';
import style from './RecentChats.module.css';

function RecentChats(props) {

  function renderMessages() {
    const messages = props.messages.map(message => 
      <li><div className={style.message}>{message}</div></li>
    );
    return (
      <ul className={style.recentMessages}>
        {messages}
      </ul>
    );
  }

  return (
    <div className={style.maxContent}>
      {renderMessages()}
    </div>
  );
}

export default RecentChats;