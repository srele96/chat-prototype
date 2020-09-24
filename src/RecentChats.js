import React  from 'react';

function RecentChats(props) {

  function renderMessages() {
    const messages = props.messages.map(message => <li>{message}</li>);
    return (
      <ul>
        {messages}
      </ul>
    );
  }

  return (
    <div>
      {renderMessages()}
    </div>
  );
}

export default RecentChats;