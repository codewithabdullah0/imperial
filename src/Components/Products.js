import React from 'react'
import './Product.css'
import cardicons1 from '../Images/demolition-icon (2).svg'
import cardicons2 from '../Images/crushing-icon (1).svg'
import cardicons3 from '../Images/Earthwork-Icon (1) (1).svg'

import productimg1 from '../Images/Untitled design (4) (1).png'
import productimg2 from '../Images/Untitled design (3) (1).png'
import productimg3 from '../Images/Untitled design (8) (1).png'
import productimg4 from '../Images/csm_RM_70GO__small_concrete_crusher_e7cbfd1d80.png'
import productimg5 from '../Images/CMWBanner002.png'
import productimg6 from '../Images/Untitled design (9) (1).png'
import productimg7 from '../Images/Untitled design (10) (2).png'
import productimg8 from '../Images/Untitled design (11) (1).png'
import productimg9 from '../Images/Untitled design (12) (3).png'
import productimg10 from '../Images/Untitled design (13) (2).png'
import productimg11 from '../Images/Untitled design (14) (1).png'
import productimg12 from '../Images/Untitled design (16) (1).png'
import { Link } from 'react-router-dom'

import { Fade } from "react-awesome-reveal";




function Products() {
  return (
    <div>
      <div className='container-fluid product-banner-div1'>
        <div className='container'>
          <div className='product-banner-text1'>
            <Fade triggerOnce={true} cascade damping={0.2}>
              <h4>Specializing in </h4>
              <h1>Demolition <br /> Equipment</h1>
              <h3>San Diego - Los Angeles - San Francisco</h3>
              <p>All Rates are based on non Prevailing and non Union</p>
            </Fade>
          </div>

          <div className='row product-banner-card-rowdiv11 d-md-flex d-none'>
            <Fade triggerOnce={true} cascade damping={0.2} className='col-lg-4'>
              <div className=''>
                <div className='product-banner-card-div1'>
                  <div>
                    <img src={cardicons1} alt="" />
                  </div>
                  <h5>Equipment Rental</h5>
                </div>
              </div>

              <div className=''>
                <div className='product-banner-card-div1'>
                  <div>
                    <img src={cardicons2} alt="" />
                  </div>
                  <h5>Trucking</h5>
                </div>
              </div>

              <div className=''>
                <div className='product-banner-card-div1'>
                  <div>
                    <img src={cardicons3} alt="" />
                  </div>
                  <h5>Onsite Crushing</h5>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>


      <div className='container-fluid'>
        <div className='container p-0'>
          <div className='row product-banner-card-rowdiv11 d-md-none'>
            <Fade triggerOnce={true} cascade damping={0.2} className='col-lg-4'>
              <div className=''>
                <div className='product-banner-card-div1'>
                  <div>
                    <img src={cardicons1} alt="" />
                  </div>
                  <h5>Equipment Rental</h5>
                </div>
              </div>

              <div className=''>
                <div className='product-banner-card-div1'>
                  <div>
                    <img src={cardicons2} alt="" />
                  </div>
                  <h5>Trucking</h5>
                </div>
              </div>

              <div className=''>
                <div className='product-banner-card-div1'>
                  <div>
                    <img src={cardicons3} alt="" />
                  </div>
                  <h5>Onsite Crushing</h5>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>


















      {/* // ###################### section no ### 2 ############# */}


      <div className='container-fluid products-grid-div1'>
        <div className='container pl-0 pr-0'>
          <div className='product-grid-text-div1'>
            <div className='product-grid-text-div2'>
              <Fade triggerOnce={true} cascade damping={0.2}>
                <h4>Operated or Bare Equipment Rental</h4>
                <p>Choose one of the categories below, if your unsure give us a ring</p>
              </Fade>
            </div>
            <div className='product-grid-text-div3'>
              <Fade triggerOnce={true}>
                <a href="">
                  <div>REQUEST A CALLBACK</div>
                </a>
              </Fade>
            </div>
          </div>





          <div className='row product-grid-row-div1'>
            <Fade triggerOnce={true} cascade damping={0.2} className='col-lg-3'>

              <div className=''>
                <Link to='/product-detail'>
                  <div className='product-grid-img-div11'>
                    <div>
                      <img src={productimg1} className='img-fluid' alt="" />
                    </div>
                    <h3>High Reach Excavator</h3>
                  </div>
                </Link>
              </div>

              <div className=''>
                <Link to='/product-detail'>
                  <div className='product-grid-img-div11'>
                    <div>
                      <img src={productimg2} className='img-fluid' alt="" />
                    </div>
                    <h3>Standard Excavator</h3>
                  </div>
                </Link>
              </div>

              <div className=''>
                <Link to='/product-detail'>
                  <div className='product-grid-img-div11'>
                    <div>
                      <img src={productimg3} className='img-fluid' alt="" />
                    </div>
                    <h3>Track Loader</h3>
                  </div>
                </Link>
              </div>

              <div className=''>
                <Link to='/product-detail'>
                  <div className='product-grid-img-div11'>
                    <div>
                      <img src={productimg4} className='img-fluid' alt="" />
                    </div>
                    <h3>Concrete
                      Crushing</h3>
                  </div>
                </Link>
              </div>

              <div className=''>
                <Link to='/product-detail'>
                  <div className='product-grid-img-div11'>
                    <div>
                      <img src={productimg5} className='img-fluid' alt="" />
                    </div>
                    <h3>Concrete
                      Stomper</h3>
                  </div>
                </Link>
              </div>

              <div className=''>
                <Link to='/product-detail'>
                  <div className='product-grid-img-div11'>
                    <div>
                      <img src={productimg6} className='img-fluid' alt="" />
                    </div>
                    <h3>Concreate
                      Breaker</h3>
                  </div>
                </Link>
              </div>


              <div className=''>
                <Link to='/product-detail'>
                  <div className='product-grid-img-div11'>
                    <div>
                      <img src={productimg7} className='img-fluid' alt="" />
                    </div>
                    <h3>Hydrualic
                      Pulverizor</h3>
                  </div>
                </Link>
              </div>


              <div className=''>
                <Link to='/product-detail'>
                  <div className='product-grid-img-div11'>
                    <div>
                      <img src={productimg8} className='img-fluid' alt="" />
                    </div>
                    <h3>Universal
                      Processor</h3>
                  </div>
                </Link>
              </div>


              <div className=''>
                <Link to='/product-detail'>
                  <div className='product-grid-img-div11'>
                    <div>
                      <img src={productimg9} className='img-fluid' alt="" />
                    </div>
                    <h3>High Reach
                      Excavator</h3>
                  </div>
                </Link>
              </div>


              <div className=''>
                <Link to='/product-detail'>
                  <div className='product-grid-img-div11'>
                    <div>
                      <img src={productimg10} className='img-fluid' alt="" />
                    </div>
                    <h3>Standard
                      Excavator</h3>
                  </div>
                </Link>
              </div>

              <div className=''>
                <Link to='/product-detail'>
                  <div className='product-grid-img-div11'>
                    <div>
                      <img src={productimg11} className='img-fluid' alt="" />
                    </div>
                    <h3>Track Loader</h3>
                  </div>
                </Link>
              </div>

              <div className=''>
                <Link to='/product-detail'>
                  <div className='product-grid-img-div11'>
                    <div>
                      <img src={productimg12} className='img-fluid' alt="" />
                    </div>
                    <h3>Concrete
                      Crushing</h3>
                  </div>
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Products
