import React from 'react'
import './About.css'
import aboutimg1 from '../Images/Rectangle 41098.png'
import aboutimg2 from '../Images/Rectangle 41102.png'
import aboutimg3 from '../Images/Rectangle 41093 (1).png'
import aboutimg4 from '../Images/Rectangle 41103.png'

import vissionimg1 from '../Images/Rectangle 41104.png'
import { Fade } from "react-awesome-reveal";




function About() {
    return (
        <div>
            <div className='container-fluid about-banner-div1'>
                <div className='container'>
                    <div className='about-banner-text1'>
                        <Fade cascade damping={0.2} triggerOnce={true}>
                            <h4>Who we are</h4>
                            <h1>ABOUT IMPERIAL <br /> EQUIPMENT <br /> RENTAL</h1>
                        </Fade>
                    </div>
                </div>
            </div>











            {/* // ###################### section no ### 2 ############# */}

            <div className='container-fluid about-text-sec-div1'>
                <div className='container pl-0 pr-0'>
                    <div className='about-text-sec-div2'>
                        <Fade cascade damping={0.2} triggerOnce={true}>
                            <h2>ABOUT IMPERIAL EQUIPMENT RENTALS</h2>
                            <p>Imperial Rentals was formed specifically to better service the demolition industry. Imperial provides operated and bare equipment rental with the emphasis on the specialized demolition trade. Imperial owns and operates every demolition machine and attachment needed to perform any type of demolition project throughout California.</p>
                            <p> Imperial realizes there are few owner operating companies in existence in California that can provide specialized demolition operators with the array of equipment in the fleet to get the job done quickly and safely! Imperial is a professional company and can handle any style project not only from a field operations perspective but from the office as well. Whether it is public work, Davis Bacon, Local Hire, or any other wage requirements we’ve got you covered.</p>
                        </Fade>
                    </div>




                    <div className='about-sec2-img-div'>
                        <div className='about-sec2-img1-div1'>
                            <div>
                                <h2> SAM’S FIRST <br className='d-md-block d-none' /> AMPCO SETUP <br className='d-md-block d-none' />  2010</h2>
                            </div>
                        </div>
                        <div className='about-sec2-img2-div1'>
                            <img src={aboutimg1} alt="" />
                        </div>

                        <div className='about-sec2-img3-div1'>
                            <img src={aboutimg2} alt="" />
                        </div>

                        <div className='about-sec2-img4-div1'>
                            <img src={aboutimg3} alt="" />
                        </div>
                        <div className='about-sec2-img5-div1'>
                            <div>
                                <h1>15</h1>
                                <p>YEARS EXPERIENCE <br />
                                    AS CONTRACTOR</p>
                            </div>
                        </div>
                        <div className='about-sec2-img6-div1' >
                            <img src={aboutimg4} alt="" />
                        </div>

                    </div>
                </div>
            </div>













            {/* // ###################### section no ### 2 ############# */}

            <div className='container-fluid about-vision-sec-div1'>
                <div className='container pl-0 pr-0'>
                    <div className='row'>
                        <div className='col-lg-5 d-flex align-items-center'>
                            <div className='about-vision-text-div1'>
                                <Fade cascade damping={0.2} triggerOnce={true}>
                                    <h1>OUR VISION</h1>
                                    <p>Providing superior site <br className='d-md-block d-none' /> packages to streamline the <br className='d-md-block d-none' /> preconstruction process.</p>
                                </Fade>
                            </div>
                        </div>

                        <div className='col-lg-7'>
                            <Fade triggerOnce={true}>
                                <div>
                                    <img src={vissionimg1} alt="" className='img-fluid' />
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About
