import React from 'react'
import './HeaderDropDown.css'
import { HiOutlineBars4 } from "react-icons/hi2";
import { PiCaretDownThin } from "react-icons/pi";
import { GoTriangleRight } from "react-icons/go";
const HeaderDropDown = () => {
    return (
        <div>
            <div className="nav">
                {/* <Link to="/" className="logo lg:hidden">
                          <span className="text-xl font-bold text-stone-700">
                            Leanardo 🎨 Vinci
                          </span>
                        </Link> */}
                <div className="logo lg:hidden">animation</div>
                <label htmlFor="btn" className='icon'>
                    <HiOutlineBars4 />
                </label>
                <input type="checkbox" name="" id="btn" />

                <ul>

                    <li>
                        <label htmlFor="btn-1" className='show'>Features +</label>
                        <a href="">Features</a>
                        <input type="checkbox" name="" id="btn-1" />
                        <ul>
                            <li><a href="">pages</a></li>
                            <li><a href="">elements</a></li>
                            <li><a href="">Icons</a></li>
                        </ul>
                    </li>
                    <li>
                        <label htmlFor="btn-1" className='show'>Features +</label>
                        <a href="">Features</a>
                        <input type="checkbox" name="" id="btn-1" />
                        <ul>
                            <li><a href="">pages</a></li>
                            <li><a href="">elements</a></li>
                            <li><a href="">Icons</a></li>
                        </ul>
                    </li>
                    <li>
                        <label htmlFor="btn-1" className='show'>Features +</label>
                        <a href="">Features</a>
                        <input type="checkbox" name="" id="btn-1" />
                        <ul>
                            <li><a href="">pages</a></li>
                            <li><a href="">elements</a></li>
                            <li><a href="">Icons</a></li>
                        </ul>
                    </li>
                    <li>
                        <label htmlFor="btn-1" className='show'>Features +</label>
                        <a href="">Features</a>
                        <input type="checkbox" name="" id="btn-1" />
                        <ul>
                            <li><a href="">pages</a></li>
                            <li><a href="">elements</a></li>
                            <li><a href="">Icons</a></li>
                        </ul>
                    </li>
                    
                
                    <li>
                        <label htmlFor="btn-2" className='show'>Networking +</label>
                        <a href="">Networking</a>
                        <input type="checkbox" name="" id="btn-2" />
                        <ul>
                            <li>
                                <label htmlFor="btn-3" className='show'>Router +</label>
                                <a href="">Router
                                    <span>+</span>
                                </a>
                                <input type="checkbox" name="" id="btn-3" />
                                <ul>
                                   <li><a href="">TP Link</a></li>
                                    <li><a href="">Netis</a></li>
                                    <li><a href="">Mikrotik</a></li>
                                    <li><a href="">NETGEAR</a></li>
                                </ul>
                            </li>
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

export default HeaderDropDown
