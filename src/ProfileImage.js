import React, { useEffect } from 'react';
import styles from './ProfileImage.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons"

function ProfileImage() {
  function fetchProfileImage(e) {
    console.log(this);
    console.log(e.target.files[0]);
  }

  return (
    <div className={styles.avatarWrapper}>
      <div className={styles.centerAvatar}>
        <label
          onChange={fetchProfileImage}
          htmlFor="avatar-upload"
          title="Profile image upload"
          className={styles.imageUploadLabel}
        >
          <input
            type="file"
            name="image"
            className={styles.avatarUpload}
            id="avatar-upload"
          />
        </label>
        <FontAwesomeIcon icon={faFolderPlus} className={styles.faFolderPlus} />
        <img
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          alt="User profile"
          className={styles.avatar}
        />
      </div>
    </div>
  )
}

export default ProfileImage;