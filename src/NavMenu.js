import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { TiMessages } from 'react-icons/ti';
import styles from './NavMenu.module.css';

function NavMenu(props) {
  return (
    <div>
      <ul className={styles.navList}>
        <li>
          <Link
            onClick={props.hideMenu}
            to="/chat-prototype/profile" 
            className={styles.navLink}>
            <FaHome />
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
    </div>
  );
}

export default NavMenu;