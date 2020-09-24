import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

function ProfileSettings(props) {
  function renderSettings() {
    const settings = props.settings.map(el => {
      return <li><div role="button">{el}</div></li>
    });
    return <ul>{settings}</ul>;
  }

  return(
    <div>
      <div>
        <FontAwesomeIcon icon={faCog} />
        Settings
      </div>
      {renderSettings()}
    </div>
  );
}

export default ProfileSettings;