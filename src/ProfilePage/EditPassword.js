import React, { useState } from 'react';
import mutualStyles from './EditNamePW.module.css';

function EditPassword() {
  const [isVisible, setIsVisible] = useState(false);

  function toggle() {
    setIsVisible(!isVisible);
  }

  return(
    <div >
      <button onClick={toggle} className={mutualStyles.toggle}>Edit password</button>
      {isVisible && 
      <div>
        <div className={mutualStyles.wrap}>
          <div className={mutualStyles.centerRow}>
            <label htmlFor="currentPW">
              <p>Current password</p>
              <input 
                type="password" 
                id="currentPW" 
                required 
                className={mutualStyles.input}
              />
            </label>
          </div>
          <div className={mutualStyles.centerRow}>
            <label htmlFor="confirmPWone">
              <p>New password</p>
              <input 
                type="password" 
                id="confirmPWone" 
                required 
                className={mutualStyles.input}  
              />
            </label>
          </div>
          <div className={mutualStyles.centerRow}>
            <label htmlFor="confirmPWone">
              <p>Confirm new password</p>
              <input
                type="password"
                id="confirmPWone"
                required
                className={mutualStyles.input}
              />
            </label>
          </div>
          <div>
            <button className={mutualStyles.confirm}>Change password</button>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default EditPassword;