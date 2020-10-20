import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import ChatPage from './ChatPage/ChatPage';
import ProfilePage from './ProfilePage/ProfilePage';
import Navigation from './Navigation';
import NavMenu from './NavMenu';
import Modal from './Modal';
import PeopleOnline from './ChatPage/PeopleOnline';
import RecentChats from './RecentChats';

function App() {
  const [isActive, setIsActive] = useState(false);
  const [chosen, setChosen] = useState(false);
  const [level, setLevel] = useState(0);
  function handleClick() {
    setIsActive(!isActive);

    level === 0 ?
    setLevel(1) :
    setLevel(0);
  }

  function hideMenu() {
    setIsActive(false);
    setLevel(0);
  }

  return (
    <Router>
      <Navigation handleClick={handleClick} isActive={isActive}>
        <NavMenu hideMenu={hideMenu} />
      </Navigation>
      {level > 0 &&
      <Modal>
        <NavMenu hideMenu={hideMenu} />
        <button onClick={() => {
            setLevel(2);
            setChosen(0);
          }}
          style={{
            margin: '10px 0 0 0',
            border: 'none',
            borderRadius: '10px',
            background: '#2a2a2a',
            boxShadow:  '-5px 5px 10px #232323, 5px -5px 10px #313131',
            display: 'flex',
            textDecoration: 'none',
            padding: '10px',
          }}>Recent chats</button>
        <button onClick={() => {
            setLevel(2);
            setChosen(1);
          }}
          style={{
            margin: '10px 0 0 0',
            border: 'none',
            borderRadius: '10px',
            background: '#2a2a2a',
            boxShadow:  '-5px 5px 10px #232323, 5px -5px 10px #313131',
            display: 'flex',
            textDecoration: 'none',
            padding: '10px',
          }}>People online</button>
      </Modal>}
      {level > 0 &&
      <Modal>
        <button onClick={()=> setLevel(1)}
          style={{
            margin: '10px 0 0 0',
            border: 'none',
            borderRadius: '10px',
            background: '#2a2a2a',
            boxShadow:  '-5px 5px 10px #232323, 5px -5px 10px #313131',
            display: 'flex',
            textDecoration: 'none',
            padding: '10px',
          }}>hide</button>
        {chosen === 0 &&
          <RecentChats messages={['a','b','c','d','h','a', 'asd', 'a', 'a']}/>
        }
        {
          chosen === 1 && <PeopleOnline />
        }
      </Modal>}
      <div id="page"
        style={level===0? {
          transition: '0.5s ease-in-out',
          transform: 'translatex(0)'
        } : {
          transition: '0.5s ease-in-out',
          transform: `translatex(-${level * 100}vw)`
        }}
      >
        <Switch>
          <Route path="/chat-prototype/profile">
            <ProfilePage />
          </Route>
          <Route path="/chat-prototype/chat">
            <ChatPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;