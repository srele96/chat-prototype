import React from 'react';
import styles from './ProfileImage.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons"

function ProfileImage() {
  return (
    <div className={styles.avatarWrapper}>
      <div className={styles.centerAvatar}>
        <label
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
          src="https://picsum.photos/500"
          alt="User profile"
          className={styles.avatar}
        />
      </div>
    </div>
  )
}

export default ProfileImage;