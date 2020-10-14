import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import style from './ProfileSettings.module.css';

function ProfileSettings(props) {
  const [showIndex, setShowIndex] = useState(null);
  const [isOn, setIsOn] = useState(false);
  const setting = useRef();
  function renderSettings() {
    const settings = props.settings.map((el, index) => {
      return (
        <li>
          <button ref={setting} className={style.setting} onClick={(e) => show(index)}>
            {el}
          </button>
          <div style={{ display: showIndex === index && isOn ? "" : "none" }}>
            Some setting here...
            {/* test block */}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* render here setting to be shown */}
          </div>
        </li>
      )
    });
    return <ul className={style.settingsList}>{settings}</ul>
  }

  useEffect(() => {
    document.addEventListener('keydown', escFun, false);
  });

  const escFun = useCallback((e) => {
    if(e.keyCode === 27) setIsOn(false);
  }, []);

  function show(index) {
    showIndex !== index ? setIsOn(true) : setIsOn(!isOn);
    setShowIndex(index);
  }

  return(
    <div className={style.settings}>
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