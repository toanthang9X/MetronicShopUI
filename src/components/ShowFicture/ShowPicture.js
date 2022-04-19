import React from 'react'
import './ShowPicture.scss'


function ShowPicture({ product, setShowimg}) {
    const { id, name, img, price } = product;
    const handleClose = () => setShowimg(false)
    
  return (
    <div className='modal__itempc' onClick={handleClose}>
        <div className='itempc' onClick={(e)=>{e.stopPropagation()}}>
            <button className='itempc__closepc' onClick={handleClose}>X</button>
            <div className='itempc__imagepc'>
                <img src={img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ShowPicture