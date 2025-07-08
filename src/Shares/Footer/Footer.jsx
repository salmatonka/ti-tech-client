import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <footer className="footer bg-neutral text-neutral-content p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link to='/freeDelivery'>Free Delivery</Link>
                    <Link to='/homeService'>Home Service</Link>
                    <Link to='/servicingCenter'>Servicing Center</Link>
                    <Link to='/monitorFilter'>Monitor Filter</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">TI TECH</h6>
                    <Link to='/products' className="link link-hover">Products</Link>
                    <Link to='/offers' className="link link-hover">Offers</Link>
                    <Link to='/teams' className="link link-hover">Teams</Link>
                    <Link to='/aboutUs' className="link link-hover">About us</Link>
                    
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Follow Us</h6>
                    <div className="flex text-xl text-gray-300 gap-3">
                        <a className='btnHover rounded-full  hover:text-gray-300' target='blank' href=""> <CiFacebook /> </a>
                        <a className='btnHover  rounded-full hover:text-gray-300' target='blank' href=""> <FaInstagram /> </a>
                        <a className='btnHover  rounded-full hover:text-gray-300' target='blank' href=""> <FiYoutube /> </a>
                        <a className='btnHover  rounded-full hover:text-gray-300' target='blank' href="tel:+88019"> <FaWhatsapp /> </a>
                    </div>
                </nav>
            </footer>
            <footer className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by RONSON </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;