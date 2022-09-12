import React from 'react'
import './Footer.scss'
import Visa from '../../assets/images/visa.jpg'
import MasterCard from '../../assets/images/MasterCard.jpg'
import PayPal from '../../assets/images/PayPal.jpg'
import WesternUnion from '../../assets/images/western-union.jpg'
import {AiOutlineRight, AiOutlineWifi, AiFillFacebook, AiOutlineTwitter,AiFillLinkedin, AiFillSkype} from 'react-icons/ai'
import {TiSocialGooglePlus, TiSocialYoutubeCircular} from 'react-icons/ti'
import {BsVimeo} from 'react-icons/bs'

function Footer() {
    const listInfor = [
      "Delivery Information",
      "Customer Service",
      "Order Tracking",
      "Shipping & Returns",
      "Contact Us",
      "Careers",
      "Payment Methods",
    ]
  return (
    <>
        <div className='preFooter'>
            <div className='container-preFT'>
                <div className='container-preFT-about'>
                    <h2 className='container-preFT-title'>ABOUT US</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam sit nonummy nibh euismod tincidunt ut laoreet dolore magna aliquarm erat sit volutpat. Nostrud exerci tation ullamcorper suscipit lobortis nisl aliquip commodo consequat.</p>
                    <br />
                    <p>Duis autem vel eum iriure dolor vulputate velit esse molestie at dolore.</p>
                </div>
                <div className='container-preFT-info'>
                    <h2 className='container-preFT-title'>INFORMATION</h2>
                    <ul>
                        {
                            listInfor.map((e, index) => (
                                <li key={index}>
                                  <AiOutlineRight className='ic-outline' />
                                  {e}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='container-preFT-tweets'>
                    <h2 className='container-preFT-title'>LATEST TWEETS</h2>
                    <a href='/'>Loading tweets by @keenthemes...</a>
                </div>
                <div className='container-preFT-contact'>
                    <h2 className='container-preFT-title'>OUR CONTACTS</h2>
                    <address>
                        35, Lorem Lis Street, Park Ave
                        <br />
                        California, US
                        <br />
                        Phone: 300 323 3456
                        <br />
                        Fax: 300 323 1456
                        <br />
                        Email: <a href='/'>info@metronic.com</a>
                        <br />
                        Skype: <a href='/'>metronic</a>
                    </address>
                </div>
            </div>
            <div className='ct-seperate'></div>
            <div className='container-info'>
                <ul>
                    <li><AiOutlineWifi /></li>
                    <li><AiFillFacebook /></li>
                    <li><AiOutlineTwitter /></li>
                    <li><TiSocialGooglePlus /></li>
                    <li><AiFillLinkedin /></li>
                    <li><TiSocialYoutubeCircular /></li>
                    <li><BsVimeo /></li>
                    <li><AiFillSkype /></li>
                </ul>
                <div className='container-info-email'>
                    <h2>NEWSLETTER</h2>
                    <input type='email' placeholder='youemail@gmail.com' />
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
        <div className='footer'>
            <div className='footer-cr'>
                <p>2015 © Keenthemes. ALL Rights Reserved.</p>
            </div>
            <div className='footer-pay'>
                <ul className='footer-pay-lists'>
                    <li><img src={Visa} alt=""/></li>
                    <li><img src={MasterCard} alt=""/></li>
                    <li><img src={PayPal} alt=""/></li>
                    <li><img src={WesternUnion} alt=""/></li>
                </ul>
            </div>
            <div className='footer-powered'>
                <p>Powered by: <a href='/'>KeenThemes.com</a> </p>
            </div>
        </div>
    </>
  )
}

export default Footer