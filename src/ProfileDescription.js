import React from 'react';
import styles from './ProfileDescription.module.css';

// check for character input len, display char input max len
// used n of m available
function ProfileDescription() {
  return (
    <div className={styles.descWrap}>
      <div className={styles.desc}>
        <div className={styles.descriptionWrap}>
          <div className={styles.description} contentEditable="true" />
        </div>
        <div className={styles.aboutMeWrap}>
          <div className={styles.aboutMeHeader}>
            <p>About me</p>
          </div>
          <div className={styles.listWrap}>
            <ul className={styles.aboutMeList}>
              <li>
                <div>something about me</div>
              </li>
              <li>
                <div>something about me</div>
              </li>
              <li>
                <div>something about me</div>
              </li>
              <li>
                <div>something about me</div>
              </li>
              <li>
                <div>something about me</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDescription;