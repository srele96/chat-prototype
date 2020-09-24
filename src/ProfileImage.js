import React from 'react';

function ProfileImage() {
  return (
    <div className="avatar-wrapper">
      <label htmlFor="avatar-upload" title="Profile image upload">
        <input type="file" name="avatar-upload" id="avatar-upload" />
      </label>
      <img src="" alt="User profile" />
    </div>
  );
}

export default ProfileImage;