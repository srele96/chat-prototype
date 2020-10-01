import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';
import Setting from './Setting';
import style from './ProfileSettings.module.css';

function ProfileSettings(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [clickedSetting, setClickedSetting] = useState(null);
  function renderSettings() {
    const settings = props.settings.map(el => {
      return (
        <li>
          <button className={style.setting} onClick={() => showSetting(el)}>
            {el}
          </button>
        </li>
      )
    });
    return <ul className={style.maxContent}>{settings}</ul>;
  }

  function showSetting(setting) {
    setIsModalVisible(true);
    setClickedSetting(setting);
  }

  function hideSetting() {
    setIsModalVisible(false);
  }

  return(
    <div className={style.settings}>
      {isModalVisible ? 
      (<Modal>
        <Setting setting={clickedSetting} hideSetting={hideSetting}  
        />
      </Modal>) : ''}
      <div className={style.settingsHeader}>
        <h2>
          <FontAwesomeIcon icon={faCog} />
          Settings
        </h2>
      </div>
      {renderSettings()}
    </div>
  );
}

export default ProfileSettings;