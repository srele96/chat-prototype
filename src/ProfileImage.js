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
          <FontAwesomeIcon icon={faFolderPlus} className={styles.faFolderPlus} />
          <input
            type="file"
            name="image"
            className={styles.avatarUpload}
            id="avatar-upload"
          />
        </label>
        <img
          src="http://localhost:8000/image?e=1Sw0j2zdbsnbSr6160AYQKx0p5IDtFgQTTF6Yng4Qr0c2"
          alt="User profile"
          className={styles.avatar}
        />
      </div>
      <div className={styles.blurBg}></div>
    </div>
  )
}

export default ProfileImage;