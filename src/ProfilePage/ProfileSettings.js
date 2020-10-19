import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import styles from './ProfileSettings.module.css';
import EditName from './EditName';
import EditPassword from './EditPassword';

function ProfileSettings() {
  return(
    <div className={styles.settings}>
      <div className={styles.settingsHeader}>
        <h2 style={{'marginRight': '1rem'}}>
          <FontAwesomeIcon icon={faCog} />
        </h2>
        <h2>
          Settings
        </h2>
      </div>
      <div className={styles.settingsList}>
        <EditName />
        <EditPassword />
      </div>
    </div>
  );
}

export default ProfileSettings;