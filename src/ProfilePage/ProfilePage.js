import React from 'react';
import Profile from './Profile';
import RecentChatsHandler from '../RecentChatsHandler';
import styles from './ProfilePage.module.css';

function ProfilePage() {
  return (
    <div className={styles.profilePage}>
      <div>
        <Profile />
      </div>
      <div>
        <RecentChatsHandler />
      </div>
    </div>
  )
}

export default ProfilePage;