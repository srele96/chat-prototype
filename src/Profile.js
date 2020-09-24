import React from 'react';
import ProfileImage from './ProfileImage';
import ProfileSettings from './ProfileSettings';
import ProfileDescription from './ProfileDescription';

function Profile() {
  return(
    <div>
      <div>
        <ProfileImage />
        <ProfileSettings settings={['one', 'two', 'three']} />
      </div>
      <div>
        <ProfileDescription />
      </div>
    </div>
  );
}

export default Profile;