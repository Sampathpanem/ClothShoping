import React from 'react'

const Footer = () => {
  return (
    <div>
    

 
    <footer>
      <div className="footer-container">

        <h2 className="footer-brand">FashionHub</h2>

        <ul className="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} FashionHub. All rights reserved.
      </p>
    </footer>



      

  
      
    
    </div>
  )
}

export default Footer