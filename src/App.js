import React, { useState } from 'react';
import {
  HashRouter as Router,
  Switch, Route
} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import ChatPage from './ChatPage/ChatPage';
import ProfilePage from './ProfilePage/ProfilePage';
import Navigation from './Navigation';
import PageScroll from './PageScroll';
import SideMenu from './SideMenu';

function App() {
  const [isActive, setIsActive] = useState(false);
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
    <Router basename='/'>
      <Navigation 
        handleClick={handleClick} 
        isActive={isActive} 
        hideMenu={hideMenu}/>
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
          <Route exact path="/">
            <PageScroll>
              <HomePage />
            </PageScroll>
            <SideMenu hideMenu={hideMenu}/>
          </Route>
          <Route path="/profile">
            <PageScroll>
              <ProfilePage />
            </PageScroll>
            <SideMenu hideMenu={hideMenu}/>
          </Route>
          <Route path="/chat">
            <PageScroll>
              <ChatPage />
            </PageScroll>
            <SideMenu hideMenu={hideMenu}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;