import React from 'react';
import farBg from '../../../images/far_bg.png';
import forBg from '../../../images/for_bg_two.png';
import './Header.css';


const Header = () => (
  <div className='main_container'>
    <div className='bg_container'>
      <div className='far_bg_cris'>
          <p className='cris_p'>crystal...</p>
          <button className='bn'></button>
      </div>

    </div>
    <div className='bg_container'>
      <div className='far_bg'>
          <p className='grant_p'>...grant</p>
      </div>

    </div>
  </div>
)

export default Header;
