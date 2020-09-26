import React, { useEffect, useRef } from 'react';
import style from './Setting.module.css';

function Setting(props) {
  const btnRef = useRef(null);
  useEffect(() => {
    btnRef.current.focus();
  });

  return(
    <div role="dialog" className={style.modalOverlay}>
      <button ref={btnRef} onClick={props.hideSetting}>Close</button>
      <p>{props.setting}</p>
    </div>
  );
}

export default Setting;