import React from 'react';
import ProfileImage from './ProfileImage';
import ProfileSettings from './ProfileSettings';
import ProfileDescription from './ProfileDescription';
import styles from './Profile.module.css';

function Profile() {
  return(
    <div >
      <div className={styles.profileImgSet}>
        <ProfileImage />
        <ProfileSettings settings={['one', 'two', 'three']} />
      </div>
      <div className={styles.profileDesc}>
        <ProfileDescription />
      </div>
    </div>
  );
}

export default Profile;