import React from 'react'
import './TryDropDown.css';
import { HiOutlineBars4 } from "react-icons/hi2";
import { PiCaretDownThin } from "react-icons/pi";
// https://www.trusttechbd.com/
const TryDropDown = () => {
  return (
    // <div className='nav'>
    //     <div className="logo">trydrop</div>
    //     <ul className='menu'>
    //         <li><a href="">Desktop</a></li>
    //         <li><a href="">Laptop</a></li>
    //         <li><a href="">PC Components</a></li>
    //         <li><a href="">Monitor</a></li>
    //         <li><a href="">Accessories</a></li>
    //         <li><a href="">Office Equipment</a></li>
    //         <li><a href="">Printer</a></li>
    //         <li><a href="">Storage</a></li>
    //         <li><a href="">UPS</a></li>
    //         <li><a href="">Speaker</a></li>
    //         <li><a href="">Networking</a></li>
    //         <li><a href="">Software</a></li>
    //         <li><a href="">Gadget</a></li>
            
    //     </ul>
    // </div>

     <div>
                <div className="nav">
                    <div className="logo">animation</div>
                    <label htmlFor="btn" className='icon'>
                        <HiOutlineBars4 />
                    </label>
                    <input type="checkbox" name="" id="btn" />
    
                    <ul>
                        <li><a href="">Home</a></li>
                        <li>
                            <label htmlFor="btn-1" className='show'>Desktop +</label>
                            <a href="">Desktop</a>
                            <input type="checkbox" name="" id="btn-1" />
                            <ul>
                                <li><a href="">AMD Desktop </a></li>
                                <li><a href="">Intel Desktop</a></li>
                            </ul>
                        </li>
                        <li>
                            <label htmlFor="btn-2" className='show'>Services +</label>
                            <a href="">Services</a>
                            <input type="checkbox" name="" id="btn-2" />
                            <ul>
                                <li><a href="">web disign</a></li>
                                <li><a href="">app disign</a></li>
                                <li>
                                    <label htmlFor="btn-3" className='show'>more +</label>
                                    <a href="">more
                                        <span>+</span>
                                    </a>
                                    <input type="checkbox" name="" id="btn-3" />
                                    <ul>
                                        <li><a href="">submenu1</a></li>
                                        <li><a href="">submenu2</a></li>
                                        <li><a href="">submenu3</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="">portfolio</a></li>
                        <li><a href="">contact</a></li>
                    </ul>
                </div>
            </div>
  )
}

export default TryDropDown
