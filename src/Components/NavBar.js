import React, { useEffect, useState } from 'react'
import './Navbar.css'
import navlogo from '../Images/Group 1000008814.png'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { HashLink } from "react-router-hash-link";


function NavBar() {

    const [toggle, settoggle] = useState(true);

    return (
        <div>

            <div className='container-fluid '>
                <div className='container navbar-container-div pl-0 pr-0'>
                    <nav class=" navbar navbar-expand-lg navbar-light navbar-div1 d-md-flex d-none"  >

                        <Link class="navbar-brand" to="/">
                            <img src={navlogo} className="navbar-logo1" alt="" />
                        </Link>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                            class="collapse navbar-collapse mx-auto navbar-ul-div1"
                            id="navbarNav"
                        >
                            <ul class="navbar-nav navbar-ul1 ">

                                <li class="nav-item">
                                    <Link class="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>


                                <li class="nav-item">
                                    <Link class="nav-link" to="/about">
                                        About Us
                                    </Link>
                                </li>



                                <li class="nav-item">
                                    <Link class="nav-link" to="/products">
                                        Products
                                    </Link>
                                </li>


                                <li class="nav-item">
                                    <Link class="nav-link" to="/contact">
                                        Contact
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <a href="tel:+9095750600" >
                                <div className="navbar-contact-btn1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path d="M11.8592 10.2645L11.4295 10.6909C11.4295 10.6909 10.4066 11.7036 7.61581 8.93841C4.825 6.17321 5.84783 5.16049 5.84783 5.16049L6.11793 4.89131C6.78565 4.2306 6.84893 3.16895 6.26621 2.39341L5.07622 0.809399C4.35467 -0.150609 2.96162 -0.277669 2.13524 0.541162L0.652471 2.00941C0.243529 2.416 -0.030358 2.94118 0.00269731 3.52471C0.0876968 5.01837 0.765803 8.23064 4.54733 11.9784C8.55836 15.9521 12.3219 16.1102 13.8604 15.9672C14.3478 15.922 14.7709 15.6754 15.1118 15.3366L16.4529 14.0076C17.3596 13.1107 17.1046 11.5718 15.9448 10.9441L14.1409 9.96618C13.3797 9.55488 12.4542 9.67535 11.8592 10.2645Z" fill="#01070C" />
                                    </svg>
                                    909-575-0600
                                </div>
                            </a>
                        </div>

                    </nav>
                </div>


            </div>
           





































            {/* ####### // mobile Nav Bar ###############*/}

            <nav class="navbar mobile-navbar-div1 d-flex d-lg-none navbar-expand-lg navbar-light">
                <Link class="navbar-brand "
                    onClick={() => { settoggle(true); }} to="/">
                    <img src={navlogo} alt="" className="" width="150" />
                </Link>

                <button
                    class="navbar-toggler mobile-nav-toogler"
                    type="button"
                    // data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => settoggle(!toggle)}
                >
                    <div className='mobile-btn-lin1'></div>
                    <div className='mobile-btn-lin2'></div>
                    <div className='mobile-btn-lin2'></div>
                </button>




                <div
                    class={`${toggle
                        ? "navbar-collapse mobile-navbar-div2"
                        : "navbar-collapse mobile-navbar-div2 show"
                        } `}
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav mx-auto">
                        <li className="nav-item mobile-nav-item home1">
                            <Link
                                class="nav-link"
                                to="/"
                                onClick={() => {
                                    settoggle(!toggle);
                                }}
                            >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item mobile-nav-item home1">
                            <div className='mobilenav-lines-svg'></div>
                        </li>

                        <li className="nav-item mobile-nav-item home1">
                            <Link
                                class="nav-link"
                                to="/about"
                                onClick={() => {
                                    settoggle(!toggle);
                                }}
                            >
                                About Us
                            </Link>
                        </li>

                        <li className="nav-item mobile-nav-item home1">
                            <div className='mobilenav-lines-svg'></div>
                        </li>

                        <li className="nav-item mobile-nav-item home1">
                            <Link
                                class="nav-link"
                                to="/products"
                                onClick={() => {
                                    settoggle(!toggle);
                                }}
                            >
                                Products
                            </Link>
                        </li>


                        <li className="nav-item mobile-nav-item home1">
                            <div className='mobilenav-lines-svg'></div>
                        </li>


                        <li className="nav-item mobile-nav-item home1">
                            <Link
                                class="nav-link"
                                to="/contact"
                                onClick={() => {
                                    settoggle(!toggle);
                                }}
                            >
                                Contact Us
                            </Link>
                        </li>

                        <li className="nav-item mobile-nav-item home1">
                            <div className='mobilenav-lines-svg'></div>
                        </li>


                        <li className="nav-item mobile-nav-item home1">
                            <Link
                                class=""
                                to="/"
                                onClick={() => {
                                    settoggle(!toggle);
                                }}
                            >
                                <div className='mobile-qoute-btn122'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path d="M11.8592 10.2645L11.4295 10.6909C11.4295 10.6909 10.4066 11.7036 7.61581 8.93841C4.825 6.17321 5.84783 5.16049 5.84783 5.16049L6.11793 4.89131C6.78565 4.2306 6.84893 3.16895 6.26621 2.39341L5.07622 0.809399C4.35467 -0.150609 2.96162 -0.277669 2.13524 0.541162L0.652471 2.00941C0.243529 2.416 -0.030358 2.94118 0.00269731 3.52471C0.0876968 5.01837 0.765803 8.23064 4.54733 11.9784C8.55836 15.9521 12.3219 16.1102 13.8604 15.9672C14.3478 15.922 14.7709 15.6754 15.1118 15.3366L16.4529 14.0076C17.3596 13.1107 17.1046 11.5718 15.9448 10.9441L14.1409 9.96618C13.3797 9.55488 12.4542 9.67535 11.8592 10.2645Z" fill="#01070C" />
                                    </svg>
                                    909-575-0600
                                </div>
                            </Link>
                        </li>


                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default NavBar
