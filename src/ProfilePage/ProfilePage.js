import React from 'react';
import Profile from './Profile';
import RecentChats from '../RecentChats';
import styles from './ProfilePage.module.css';

function ProfilePage() {
  const messages = ['one', 'two', 'three', 'four'];
  return (
    <div className={styles.profilePage}>
      <div>
        <Profile />
      </div>
      <div className={styles.showHide}>
        <RecentChats messages={messages}/>
      </div>
    </div>
  )
}

export default ProfilePage;