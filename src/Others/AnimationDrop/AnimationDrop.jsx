import React from 'react'
import './AnimationDrop.css'
import { HiOutlineBars4 } from "react-icons/hi2";
import { PiCaretDownThin } from "react-icons/pi";
const AnimationDrop = () => {
    return (
        // <div>
        //     <div className="nav">
        //         <div className="logo">animation</div>
        //         <label htmlFor="btn" className='icon'>
        //            <HiOutlineBars4 />
        //         </label>
        //         <input type="checkbox" name="" id="btn" />

        //         <ul>
        //             <li><a href="">Home</a></li>
        //             <li>
        //                 <label htmlFor="btn-1" className='show'>Features +</label>
        //                 <a href="">Features</a>
        //                 <input type="checkbox" name="" id="btn-1" />
        //                 <ul>
        //                     <li><a href="">pages</a></li>
        //                     <li><a href="">elements</a></li>
        //                     <li><a href="">Icons</a></li>
        //                 </ul>
        //             </li>
        //             <li>
        //                 <label htmlFor="btn-2" className='show'>Services +</label>
        //                 <a href="">Services</a>
        //                 <input type="checkbox" name="" id="btn-2" />
        //                 <ul>
        //                     <li><a href="">web disign</a></li>
        //                     <li><a href="">app disign</a></li>
        //                     <li>
        //                         <label htmlFor="btn-3" className='show'>more +</label>
        //                         <a href="">more
        //                             <span>+</span>
        //                         </a>
        //                         <input type="checkbox" name="" id="btn-3" />
        //                         <ul>
        //                             <li><a href="">submenu1</a></li>
        //                             <li><a href="">submenu2</a></li>
        //                             <li><a href="">submenu3</a></li>
        //                         </ul>
        //                     </li>
        //                 </ul>
        //             </li>
        //             <li><a href="">portfolio</a></li>
        //             <li><a href="">contact</a></li>
        //         </ul>
        //     </div>
        // </div>

        <div className='navber1'>
            <label htmlFor="btn" className='button' >drop down
                <span><PiCaretDownThin /></span>
            </label>
            <input type="checkbox" name="" id="btn" />
            <ul className="menu">
                <li><a href="">home</a></li>
                <li>
                    <label htmlFor="btn-2" className='first'>Features
                        <span><PiCaretDownThin /></span>
                    </label>
                    <input type="checkbox" name="" id="btn-2" />
                    <ul>
                        <li><a href="">pages</a></li>
                    </ul>
                </li>
                <li>
                    <label htmlFor="btn-3" className='second'>Services
                        <span><PiCaretDownThin /></span>
                    </label>
                    <input type="checkbox" name="" id="btn-3" />
                    <ul>
                        <li><a href="">web design</a></li>
                        <li><a href="">app design</a></li>
                    </ul>
                </li>
                <li><a href="">contact</a></li>
                <li><a href="">feedback</a></li>
            </ul>
        </div>
    )
}

export default AnimationDrop
