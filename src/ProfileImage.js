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
          src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
          alt="User profile"
          className={styles.avatar}
        />
      </div>
    </div>
  )
}

export default ProfileImage;