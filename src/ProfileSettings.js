import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import style from './ProfileSettings.module.css';
import EditName from './EditName';
import EditPassword from './EditPassword';

function ProfileSettings(props) {
  return(
    <div className={style.settings}>
      <div className={style.settingsHeader}>
        <h2>
          <FontAwesomeIcon icon={faCog} />
          Settings
        </h2>
      </div>
      <div style={{'maxHeight': '200px', 'overflowY': 'scroll'}}>
        <EditName />
        <EditPassword />
      </div>
    </div>
  );
}

export default ProfileSettings;