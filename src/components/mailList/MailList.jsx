import React from 'react';
import './maillist.scss';

const MailList = () => {
  return (
    <div className='mail'>
      <div className="mailTitle">Save Time, Save Money!</div>
      <span className='mailDesc'>Sign Up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" name="email" id="email" placeholder='Your email'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList