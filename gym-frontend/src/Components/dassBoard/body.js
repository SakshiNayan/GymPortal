import React from 'react'
import Dasheader from './D-header';
import Dashboard from './dashboard';
import Description from './description/content';

import Mainfooter from './D-Footer/mainfooter';
function UserBoard() {
  return (
    <div>
      <Dasheader/>
      <Dashboard/>
      
      <Description/>
      <Mainfooter/>

    </div>
  )
}

export default UserBoard;
