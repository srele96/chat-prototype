import React, { useState } from 'react';
import mutualStyles from './EditNamePW.module.css';

function EditName() {
  const [isVisible, setIsVisible] = useState(false);

  function toggle() {
    setIsVisible(!isVisible);
  }

  return(
    <div >
      <button onClick={toggle} className={mutualStyles.toggle}>Edit name</button>
      {isVisible && 
      <div className={mutualStyles.wrap}>
        <p>Current username</p>
        <div>
          <div className={mutualStyles.centerRow}>
            <label htmlFor="editText">
              <input type="text" id="editText" className={mutualStyles.input}/>
            </label>
          </div>
          <div className={mutualStyles.centerRow}>
            <label htmlFor="confirmEdit" style={{'padding': '5px 0'}}>
              <p>Confirm changing current username</p>
              <input type="checkbox" id="confirmEdit" required/>
            </label>
          </div>
          <div>
            <button className={mutualStyles.confirm}>Change name</button>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default EditName;