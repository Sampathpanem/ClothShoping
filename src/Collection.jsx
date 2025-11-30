import React from 'react'

const Collection = (props) => {
  const {title,image1,image2,image3,image4,image5}=props.images;
  return (
    <div className='collectionsection'>
    <h2>{title}</h2>
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

export default Collection