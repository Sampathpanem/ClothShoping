import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
      <div className="left">
       <div > shopping</div>
      </div>
      <div className="center">
        <ul>
          <li>women</li>
          <li>men</li>
          <li>kids</li>
        </ul>
      </div>
      <div className="search"> 
      <input type="text" placeholder='Search'></input>
      </div>
      <div className="right">
        <div className="signin">
          Signin/SignUp
        </div>
        <div className="cart"> Cart</div>
      </div>
    </div>
  )
}

export default Header