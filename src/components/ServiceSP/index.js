import React from 'react'
import {AiFillGift} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdLocalShipping} from 'react-icons/md'
import './style.scss'

function ServiceSP() {
  return (
    <div className='service'>
        <div className='service__ship service__common'>
            <MdLocalShipping className='service__ic'/>
            <h3>Free shipping</h3>
            <span>EXPRESS DELIVERY WITHING 3 DAYS</span>
        </div>
        <div className='service__gift service__common'>
            <AiFillGift className='service__ic'/>
            <h3>DAILY GIFTS</h3>
            <span>3 GIFTS DAILY FOR LUCKY CUSTOMERS</span>
        </div>
        <div className='service__phone service__common'>
            <BsFillTelephoneFill className='service__ic'/>
            <h3>477 505 8877</h3>
            <span>24/7 CUSTOMER CARE AVAILABLE</span>
        </div>
    </div>
  )
}

export default ServiceSP