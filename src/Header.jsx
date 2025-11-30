import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
      <div className="left">
       <div > Fashionhub</div>
      </div>
      <div className="center">
        <ul>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">Kids</a></li>
          
        </ul>
      </div>
      <div className="search-wrapper">
  <input type="text" placeholder="Search..." className="search-input" />
  <button className="search-btn">Search</button>
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