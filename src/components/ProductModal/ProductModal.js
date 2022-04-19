import React, { useLayoutEffect, useState } from 'react'
import './ProductModal.scss'
import {AiFillCaretDown,AiFillCaretUp} from 'react-icons/ai'


function ProductModal({ product, setShowModal}) {
    const { id, name, img, price, size, description} = product;
    const [type, setType] = useState('M');
    const handleClose = () => setShowModal(false)

    const [amount,setAmount] = useState(1);
    const handleDown = () =>{
        setAmount(amount - 1);
    }
    const handleUp = () => {
        setAmount(amount + 1);
    }

    useLayoutEffect(()=>{
        if(amount <= 0){
            setAmount(1);
        }
    },[amount])

  return (
    <div className='modal__item' onClick={handleClose}>
        <div className='item' onClick={(e)=>{e.stopPropagation()}}>
            <button className='item__close' onClick={handleClose}>X</button>
            <div className='item__image'>
                <img src={img} alt="" />
            </div>
            <div className='item__content'>
                <h2 className='item__name'>{name}</h2>
                <span className='item__price'>${price}</span>
                <p className="item__desc">{description}</p>
                <div className='item__action'>
                    <div className='item__select'>
                        <span className='item__select-amount'>{amount}</span>
                        <div className='item__select-wrap'>
                            <button> 
                                <AiFillCaretUp onClick={handleUp} className='item__select-up'/>
                            </button>
                            <button>
                                <AiFillCaretDown onClick={handleDown} className='item__select-down'/>
                            </button>
                        </div>
                        <div className='item__select-btn'>
                            <span className='item__select-size'>SIZE: </span>
                            {
                                size.map((size, index)=>(
                                <button key={index} className={type === size ? 'item__select-btn-on' : ''} onClick={()=> setType(size)}>{size}</button>
                                ))
                            }
                        </div>
                    </div> 
                    <button className='item__action-addcart'>ADD TO CART</button>
                    <button className='item__action-more'>MORE DETAILS</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductModal