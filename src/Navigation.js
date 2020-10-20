import React from 'react';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import styles from './Navigation.module.css';

function Navigation(props) {
  return(
    <div>
      <nav className={styles.nav}>
        <button
          className={styles.toggleNav}
          onClick={props.handleClick}
        >
          <FaAngleDoubleLeft className={props.isActive?styles.active:styles.inactive}/>
        </button>
        <div className={styles.navMenu}>
          {props.children}
        </div>
      </nav>
    </div>
  );
}

export default Navigation;