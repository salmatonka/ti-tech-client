import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <footer className="footer bg-neutral text-neutral-content p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
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