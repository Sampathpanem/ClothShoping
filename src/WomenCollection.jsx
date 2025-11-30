import React from 'react'

function WomenCollection(props) {
  const{title,image1,image2,image3,image4,image5}=props.womenimages
  console.log(title);
  return (
    
    <div className='collectionsection'>
    <h2>{title}</h2>
    <div className="bannerbox">
        <img src="./LadiesBanner.gif" alt="banner" />
      </div>
   
    <div className="menimages">
      <img src={image1}  alt="one" />
      <img src={image2}  alt="two" />
      <img src={image3}  alt="three" />
      <img src={image4}  alt="four" />
      <img src={image5}  alt="five" />
      <img src={image2}  alt="two" />
     
    </div>
    </div>
  )
}

export default WomenCollection