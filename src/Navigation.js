import React from 'react';
import logo from './glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg';
import { Link } from 'react-router-dom';
import { TiMessages } from 'react-icons/ti';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { BsPersonFill } from "react-icons/bs";
import { MdHome } from "react-icons/md";
import styles from './Navigation.module.css';

function Navigation(props) {
  return(
    <div>
      <nav className={styles.nav}>
        <Link
          style={{marginLeft: '10px'}}
          to="/"
          className={styles.navLink}>
            <img style={{
              background: '#2a2a2a',
              boxShadow: '-5px 5px 10px #232323, 5px -5px 10px #313131',
              maxWidth: '75px',
              borderRadius: '5px'
            }} src={logo} alt="Logo hands typing on laptop" title="Logo Credit: glenn-carstens-peter unsplash"/>
        </Link>

        <button
        className={styles.toggleNav}
        onClick={props.handleClick}>
          <FaAngleDoubleLeft className={props.isActive?styles.active:styles.inactive}/>
        </button>
        <div className={styles.navMenu}>
          <ul className={styles.navList}>
            <li>
              <Link
                to="/" 
                className={styles.navLink}>
                <MdHome />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/profile" 
                className={styles.navLink}>
                <BsPersonFill />
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/chat"
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