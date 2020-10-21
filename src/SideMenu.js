import React, { useState } from 'react';
import Modal from './Modal';
import PeopleOnline from './ChatPage/PeopleOnline';
import RecentChats from './RecentChats';
import { BsFillChatSquareDotsFill,
  BsPeopleFill, BsPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { TiMessages } from 'react-icons/ti';
import styles from './SideMenu.module.css';

function Navigation(props) {
  const [chosen, setChosen] = useState(false);
  const people = 'people';
  const chats = 'chats';

  function open(selected) {
    setChosen(selected);
  }

  function close() {
    setChosen(false);
  }

  return(
    <div>
      {chosen && <Modal close={close}>
        {chosen === people ? <PeopleOnline /> : ''}
        {chosen === chats ? <RecentChats messages={['a','b','c','d','e']}/>: ''}
      </Modal>}
      <nav className={styles.nav}>
        <div className={styles.navMenu}>
          <div className={styles.title}>
            <h3>Pages</h3>
          </div>
          <ul className={styles.navList}>
            <li>
              <Link
                onClick={props.hideMenu}
                to="/chat-prototype/profile" 
                className={styles.navLink}>
                <BsPersonFill />
                Profile
              </Link>
            </li>
            <li>
              <Link
                onClick={props.hideMenu}
                to="/chat-prototype/chat"
                className={styles.navLink}>
                <TiMessages />
                Chat
              </Link>
            </li>
          </ul>
          <div className={styles.title}>
            <h3>Accesible windows</h3>
          </div>
          <ul className={styles.navList}>
            <li>
              <button onClick={() => open(chats)} className={styles.option}>
                <BsFillChatSquareDotsFill style={{fontSize: '1.5rem'}} />
                Show recent chats
              </button>
            </li>
            <li>
              <button onClick={() => open(people)} className={styles.option}>
                <BsPeopleFill style={{fontSize: '1.5rem'}} />
                Show people online
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;