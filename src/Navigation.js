import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { TiMessages } from 'react-icons/ti';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { BsPersonFill } from "react-icons/bs";
import styles from './Navigation.module.css';

function Navigation(props) {
  return(
    <div>
      <nav className={styles.nav}>
        <button
        className={styles.toggleNav}
        onClick={props.handleClick}>
          <FaAngleDoubleLeft className={props.isActive?styles.active:styles.inactive}/>
        </button>
        <div className={styles.navMenu}>
          <ul className={styles.navList}>
            <li>
              <Link
                to="/chat-prototype/profile" 
                className={styles.navLink}>
                <BsPersonFill />
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/chat-prototype/chat"
                className={styles.navLink}>
                <TiMessages />
                Chat
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;