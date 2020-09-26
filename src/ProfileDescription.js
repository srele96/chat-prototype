import React from 'react';
import style from './ProfileDescription.module.css';

// check for character input len, display char input max len
// used n of m available
function ProfileDescription() {
  return (
    <div className={style.description}>
      <form>
        <label>
          <p>About me</p>
          {/* <textarea className={style.aboutMe}/> */}
          <div className={style.aboutMe} contentEditable role="textbox" />
        </label>
      </form>
    </div>
  );
}

export default ProfileDescription;