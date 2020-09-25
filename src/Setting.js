import React from 'react';

function Setting(props) {
  return(
    <div>
      <div role="button" onClick={props.hideSetting}>X</div>
      <p>{props.setting}</p>
    </div>
  );
}

export default Setting;