import React from 'react';
import Profile from './Profile';
import RecentChats from './RecentChats';

function ProfilePage() {
  return(
    <div>
      <div>
        <Profile />
      </div>
      <div>
        <RecentChats 
          messages={['first ashjd ajhsd', 'second', 'third', 'fourth', 'fifth']} 
        />
      </div>
    </div>
  );
}

export default ProfilePage;