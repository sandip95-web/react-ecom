import React, { useState } from 'react'

const ImageFile = ({ img  }) => {
  const [mainImage,setMainImage]=useState(img[0])
  const link=img.map((item)=>{
    return item.url
  })
  console.log(link);
  return (
    <>
      <figure>
        <img src={link[0]} alt="" className='pimg' />
      </figure>
    </>
  )
}

export default ImageFile