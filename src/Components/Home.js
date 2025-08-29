import React from 'react'
import './Home.css'
import bannerlogo1 from '../Images/Untitled design (1) (1).png'
import bannerlogo2 from '../Images/Untitled design (2) 1.png'
import bannerlogo3 from '../Images/images (2).png'
import bannerlogo4 from '../Images/images.png'

import productimg1 from '../Images/Untitled design (3) (1).png'
import productimg2 from '../Images/Untitled design (4) (1).png'
import productimg3 from '../Images/Untitled design (7) 1.png'

import serviceimg1 from '../Images/Rectangle 41084.png'
import serviceimg2 from '../Images/Rectangle 41085.png'
import serviceimg3 from '../Images/Rectangle 41093.png'
import serviceimg4 from '../Images/Rectangle 41094.png'

import { Fade } from "react-awesome-reveal";




function Home() {
    return (
        <div>
            <div className='container-fluid home-banner-div1'>
                <div className='container'>
                    <div className='home-banner-text1'>
                        <Fade cascade damping={0.2} triggerOnce={true}>
                            <h4>SPECIALIZING IN</h4>
                            <h1>OPERATED <br /> DEMOLITION <br /> EQUIPMENT</h1>
                            <p>San Diego - Los Angeles - San Francisco</p>
                        </Fade>
                    </div>
                </div>
                <div className='container p-0'>
                    <div className='home-banner-text-div22'>
                        <Fade delay={200} triggerOnce={true}>
                            <h5>OUR MAJOR SUPPLIERS</h5>
                        </Fade>

                        <div className='home-banner-logo-div1'>
                            <Fade cascade damping={0.2} triggerOnce={true}>
                                <div>
                                    <img src={bannerlogo1} alt="" />
                                </div>
                                <div>
                                    <img src={bannerlogo2} alt="" />
                                </div>
                                <div>
                                    <img src={bannerlogo3} alt="" />
                                </div>
                                <div>
                                    <img src={bannerlogo4} alt="" />
                                </div>
                            </Fade>
                        </div>

                    </div>
                </div>
            </div>



















            {/* ##################   Section no  #### 2      ##########  */}

            <div className='container-fluid home-product-div1'>
                <div className='container p-0'>
                    <div className='row'>
                        <Fade triggerOnce={true} cascade damping={0.3} className='col-lg-4 pl-lg-0'>
                            <div className='for-mobile-responsive-home-card-div' style={{ 'paddingLeft': '15px' }} >
                                <div className='home-product-img-div1'>
                                    <div>
                                        <img src={productimg1} className='img-fluid' alt="" />
                                    </div>
                                    <h5>STANDARD EXCAVATOR</h5>
                                </div>
                            </div>

                            <div className=' pl-0'>
                                <div className='home-product-img-div1'>
                                    <div>
                                        <img delay={200} src={productimg2} className='img-fluid' alt="" />
                                    </div>
                                    <h5>HIGH REACH EXCAVATOR</h5>
                                </div>
                            </div>

                            <div className=' pl-0'>
                                <div className='home-product-img-div1'>
                                    <div>
                                        <img src={productimg3} className='img-fluid' alt="" />
                                    </div>
                                    <h5>ATTACHMENTS</h5>
                                </div>
                            </div>
                        </Fade>
                    </div>



                    <div className='home-form-div1'>
                        <Fade triggerOnce={true}>
                            <div className='home-form-text-div1'>
                                <p>Get the ball rolling</p>
                                <h4>REQUEST A CALLBACK</h4>
                            </div>
                            <div className='home-form-div22'>
                                <div>
                                    <form>
                                        <div class="form-row">
                                            <div class="col-lg-4">
                                                <input type="text" class="form-control home-input-field12" placeholder="Your Name" />
                                            </div>
                                            <div class="col-lg-4">
                                                <input type="text" class="form-control home-input-field12" placeholder="Your Email" />
                                            </div>
                                            <div class="col-lg-4">
                                                <input type="text" class="form-control home-input-field12" placeholder="Your Phone Number" />
                                            </div>
                                        </div>
                                        <div>
                                            <button className='home-form-btn12'>Request A Callback</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>



















            {/* ##################   Section no  #### 3      ##########  */}

            <div className='container-fluid home-services-div1'>
                <div className='container p-0'>
                    <div className='home-service-text-div1'>
                        <p>Award winning company</p>
                        <h1>SERVICES</h1>
                    </div>

                    <div className='row'>
                        <Fade triggerOnce={true} cascade damping={0.2} className='col-lg-6'>
                            <div className=''>
                                <div className='home-service-img-div1'>
                                    <img src={serviceimg1} className='img-fluid' alt="" />
                                    <h2>OPERATED DEMOLITION EQUIPMENT</h2>
                                </div>
                            </div>

                            <div className=''>
                                <div className='home-service-img-div1'>
                                    <img src={serviceimg2} className='img-fluid' alt="" />
                                    <h2>OPERATED HIGH REACH EXCAVATOR RENTAL</h2>
                                </div>
                            </div>

                            <div className=''>
                                <div className='home-service-img-div1'>
                                    <img src={serviceimg3} className='img-fluid' alt="" />
                                    <h2>ON-SITE <br /> CRUSHING</h2>
                                </div>
                            </div>

                            <div className=''>
                                <div className='home-service-img-div1'>
                                    <img src={serviceimg4} className='img-fluid' alt="" />
                                    <h2>TRUCKING AND HAULING SERVICES</h2>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home
