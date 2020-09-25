import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';
import Setting from './Setting';

function ProfileSettings(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function renderSettings() {
    const settings = props.settings.map(el => {
      return (
        <li>
          <div role="button" onClick={() => showSetting()}>
            {el}
          </div>
          {isModalVisible ? 
          (<Modal>
            <Setting setting={el} hideSetting={hideSetting}/>
          </Modal>) : ''}
        </li>
      )
    });
    return <ul>{settings}</ul>;
  }

  function showSetting() {
    setIsModalVisible(true);
  }

  function hideSetting() {
    setIsModalVisible(false);
  }

  return(
    <div className="settings">
      <div>
        <FontAwesomeIcon icon={faCog} />
        Settings
      </div>
      {renderSettings()}
    </div>
  );
}

export default ProfileSettings;