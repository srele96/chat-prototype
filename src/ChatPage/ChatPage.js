import React from 'react';
import ChatWindow from './ChatWindow';
import RecentChats from '../RecentChats'

function ChatPage() {
  return (
    <div>
      <ChatWindow />
      <RecentChats messages={['oneas djia hdas dhuas dhasd sadjaj sdijas djasd uhaoduh auodh awhd auiwdh uiawhd auhd auiwd awud uawdh d h uahddiuah diuawhd auihd adhauihdwiauh daw', 'two', 'three']}/>
    </div>
  );
}

export default ChatPage;