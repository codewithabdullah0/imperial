import React from 'react'
import './ProductDetail.css'
import productimg from '../Images/Untitled design (4) (1).png'

function ProductDetail() {
  return (
    <div>
      <div className='container-fluid product-details-div1'>
        <div className='container pl-0 pr-0'>
          <div className='row'>
            <div className='col-lg-5'>
              <div className='product-details-img-div11'>
                <img src={productimg} className='img-fluid' alt="" />
              </div>
            </div>

            <div className='col-lg-7'>
              <div className='product-detail-sec-div22'>
                <h2>Track Loader</h2>

                <div>
                  <table class="table table-striped table-dark">
                    <thead>
                      <tr className='product-table-row1'>
                        <th scope="col">Name</th>
                        <th scope="col">Bare Daily</th>
                        <th scope="col">Bare Weekly</th>
                        <th scope="col">Bare Monthly</th>
                        <th scope="col">Hourly</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='product-table-row2'>
                        <td>Max Height 92’ Volvo 480 R</td>
                        <td>$</td>
                        <td>$</td>
                        <td>$</td>
                        <td>$ 710.00</td>
                      </tr>
                      <tr className='product-table-row2'>
                        <td>Max Height 129’ Hitachi 1000</td>
                        <td>$</td>
                        <td>$</td>
                        <td>$</td>
                        <td>$ 840.00</td>
                      </tr>

                    </tbody>
                  </table>
                </div>

                <div>
                  <div className='product-detail-form-div1'>
                    <div className='product-detail-form-text-div1'>
                      <p>Get the ball rolling</p>
                      <h4>REQUEST A CALLBACK</h4>
                    </div>
                    <div className='product-detail-form-div22'>
                      <div>
                        <form>
                          <div class="form-row">
                            <div class="col-lg-4">
                              <input type="text" class="form-control product-detail-input-field12" placeholder="Your Name" />
                            </div>
                            <div class="col-lg-4">
                              <input type="text" class="form-control product-detail-input-field12" placeholder="Your Email" />
                            </div>
                            <div class="col-lg-4">
                              <input type="text" class="form-control product-detail-input-field12" placeholder="Your Phone Number" />
                            </div>
                          </div>
                          <div>
                            <button className='product-detail-form-btn12'>Request A Callback</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
