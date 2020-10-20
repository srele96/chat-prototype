import React from 'react';
import styles from './PeopleOnline.module.css';

function PeopleOnline() {
  function simOnlinePeople() {
    let people = [];
    for(let i = 0; i < 3; i++) {
      people.push(
        <div className={styles.person}>
          <div className={styles.icon}/>
          <div className={styles.name}>
            <p>Name LName</p>
          </div>
        </div>
      );
    }
    return people;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.peopleOnline}>
        <div className={styles.title}>
          <h4>People ready to chat</h4>
        </div>
        <div className={styles.container}>
          { simOnlinePeople() }
        </div>
        <button className={styles.refresh}>
          Refresh
        </button>
      </div>
    </div>
  );
}

export default PeopleOnline;