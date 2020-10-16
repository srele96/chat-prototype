import React, { useState } from 'react';

function EditName(props) {
  const [isVisible, setIsVisible] = useState(false);

  function toggle() {
    setIsVisible(!isVisible);
  }

  return(
    <div >
      <button onClick={toggle}>Edit name</button>
      {/* div has to be hidden/shown */}
      {isVisible && 
      <div>
        {/* current username has to be fetched */}
        <p>Current username</p>
        <div>
          <label htmlFor="editText">
            <input type="text" id="editText"/>
          </label>
          <div>
            <label htmlFor="confirmEdit">
              Confirm changing current username
              <input type="checkbox" id="confirmEdit" required/>
            </label>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default EditName;