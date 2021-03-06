import React from 'react';
import styles from './ProfileDescription.module.css';

function ProfileDescription() {
  return (
    <div className={styles.descWrap}>
      <div className={styles.desc}>
        <div className={styles.descriptionWrap}>
          <p className={styles.descriptionTitle}>Description</p>
          <div className={styles.description} contentEditable="true" />
        </div>
        <div className={styles.aboutMeWrap}>
          <div className={styles.aboutMeHeader}>
            <p>About me</p>
          </div>
          <div className={styles.listWrap}>
            <ul className={styles.aboutMeList}>
              <li className={styles.item}>
                <div>something about me</div>
              </li>
              <li className={styles.item}>
                <div>something about me</div>
              </li>
              <li className={styles.item}>
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