import React from 'react'
import './Footer.scss'
import Visa from '../../assets/images/visa.jpg'
import MasterCard from '../../assets/images/MasterCard.jpg'
import PayPal from '../../assets/images/PayPal.jpg'
import WesternUnion from '../../assets/images/western-union.jpg'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-cr'>
            <p>2015 © Keenthemes. ALL Rights Reserved.</p>
        </div>
        <div className='footer-pay'>
            <ul className='footer-pay-lists'>
                <li><img src={Visa} /></li>
                <li><img src={MasterCard} /></li>
                <li><img src={PayPal} /></li>
                <li><img src={WesternUnion} /></li>
            </ul>
        </div>
        <div className='footer-powered'>
            <p>Powered by: <a href='#'>KeenThemes.com</a></p>
        </div>
    </div>
  )
}

export default Footer