import React from 'react'
import './Contact.css'
import { Fade } from "react-awesome-reveal";


function Contact() {
  return (
    <div>
      <div className='container-fluid contact-div1'>
        <div className='container'>
          <div className='contact-drop-text-div1'>
            <Fade cascade damping={0.2} triggerOnce={true}>
              <h2>DROP US A LINE</h2>
              <p>Have any questions regarding your building project? Do not hesitate to call us on 909-575-0600 drop us a line using the contact form below, we are very happy to discuss your project in detail and offer advice where necessary. We can do this at absolutely no cost or obligation to take us up on our services.</p>
            </Fade>
          </div>
          <div className='contact-banner-form-div1'>
            <div>
              <form>
                <div class="form-row">
                  <div class="col-lg-6">
                    <input type="text" class="form-control input-field12" placeholder="First name" />
                  </div>
                  <div class="col-lg-6">
                    <input type="text" class="form-control input-field12" placeholder="Last name" />
                  </div>
                  <div class="col-lg-6">
                    <input type="text" class="form-control input-field12" placeholder="Phone" />
                  </div>
                  <div class="col-lg-6">
                    <input type="text" class="form-control input-field12" placeholder="Email" />
                  </div>
                </div>
                <div class="">
                  <textarea class="form-control text-area12" rows={8} placeholder='Message'></textarea>
                </div>
                <div>
                  <button className='form-btn12'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
