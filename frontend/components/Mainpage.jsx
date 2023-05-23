import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import './css/Mainpage.css';

function Mainpage() {
  return (
    <div>
      <Header />
      <div className='content'>
        <div className='Main_content'>
          <Sidebar />
          <Feed />
        </div>
      </div>
    </div>
  )
}

export default Mainpage;