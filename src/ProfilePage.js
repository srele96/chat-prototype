import React from 'react';
import Profile from './Profile';
import RecentChats from './RecentChats';
import styles from './ProfilePage.module.css';

function ProfilePage() {
  return (
    <div className={styles.profilePage}>
      <div className={styles.profile}>
        <Profile />
      </div>
      <div>
        <RecentChats
          className={styles.recentChats}
          messages={[
            "first ashjd ajhsd",
            "second",
            "third",
            "fourth",
            "fifth",
            "second",
            "third",
            "fourth",
            "fifth",
            "second",
            "third",
            "fourth",
            "fifth",
          ]}
        />
      </div>
    </div>
  )
}

export default ProfilePage;