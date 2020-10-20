import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom';
import ChatPage from './ChatPage/ChatPage';
import ProfilePage from './ProfilePage/ProfilePage';

function App() {
  return (
    <Router>
      <div >
        <nav style={
          {
            'margin': '0 auto',
            'width': '200px',
            'height': '20px',
          }
          }>
          <ul style={{
              'display': 'flex',
              'backgroundColor': 'hsl(0,0%, 40%)',
              'color': 'orange',
              'justifyContent': 'space-around'
            }}>
            <li>
              <Link to="/chat-prototype/profile">Profile</Link>
            </li>
            <li>
              <Link to="/chat-prototype/chat">Chat</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/chat-prototype/profile">
          <ProfilePage />
        </Route>
        <Route path="/chat-prototype/chat">
          <ChatPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;