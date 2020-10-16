import React, { useState } from 'react';

function EditPassword(props) {
  const [isVisible, setIsVisible] = useState(false);

  function toggle() {
    setIsVisible(!isVisible);
  }

  return(
    <div >
      <button onClick={toggle}>Edit password</button>
      {/* div has to be hidden/shown */}
      {isVisible && 
      <div>
        {/* current username has to be fetched */}
        <p>Edit password</p>
        <div>
          <label htmlFor="currentPW">
            <p>Current password</p>
            <input type="password" id="currentPW" required/>
          </label>
          <div>
            <label htmlFor="confirmPWone">
              <p>New password</p>
              <input type="password" id="confirmPWone" required/>
            </label>
          </div>
          <div>
            <label htmlFor="confirmPWone">
              <p>Confirm new password</p>
              <input type="password" id="confirmPWone" required/>
            </label>
          </div>
          <div>
            <button>Change password</button>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default EditPassword;