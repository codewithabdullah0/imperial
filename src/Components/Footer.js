import React from 'react'
import './Footer.css'
import footerpersonimg1 from '../Images/image 1898.png'
import footerlogo1 from '../Images/Group 1000008816.png'

import footersocialicon1 from '../Images/Vector (15).svg'
import footersocialicon2 from '../Images/Vector (10).svg'
import footersocialicon3 from '../Images/Group 1000008815.svg'
import footersocialicon4 from '../Images/Vector (13).svg'

import footersocialicon5 from '../Images/Group (26).svg'
import footersocialicon6 from '../Images/Vector (11).svg'


function Footer() {
  return (
    <div>
      <div className='container-fluid footer-sec1-div1'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 position-relative'>
              <div className='footer-person-img-div'>
                <img src={footerpersonimg1} className='img-fluid'/>
              </div>
            </div>
            <div className='col-lg-7 d-flex align-items-center'>
              <div className='footer-sec1-text-div'>
                <p>Get Support</p>
                <h2>Need help finding the right equiqment?</h2>
                <p>Call us at 909-575-0600 and we’ll make it happen. </p>
              </div>
            </div>
          </div>
        </div>
      </div>















      <div className='container-fluid footer-sec2-div1'>
        <div className='container pl-0 pr-0'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='footer-logo-div11'>
                <img src={footerlogo1} alt="" />
              </div>
            </div>
            <div className='col-lg-6 d-flex align-items-center justify-content-lg-end justify-content-center'>
              <div className='footer-social-div1'>
                <div>
                  <img src={footersocialicon1} alt="" />
                </div>
                <div>
                  <img src={footersocialicon2} alt="" />
                </div>
                <div>
                  <img src={footersocialicon3} alt="" />
                </div>
                <div>
                  <img src={footersocialicon4} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className='footer-line-div11'></div>

          <div className='footer-call-main-div row'>
            <div className='col-lg-6'>
              <div className='footer-call-text-div2'>
                <div>
                  <p><img src={footersocialicon5} alt="" />  909-575-0600</p>
                </div>
                <div>
                  <p>Mon - Fri 08:30 - 17:30</p>
                </div>
              </div>
            </div>

            <div className='col-lg-6 d-flex justify-content-lg-end justify-content-center'>
              <div className='footer-call-text-div33'>
                <p><img src={footersocialicon6} alt="" />  11185 Roswell Avenue Pomona CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
