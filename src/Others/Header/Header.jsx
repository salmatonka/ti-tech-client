import React, { useEffect, useState } from 'react'
import './Header.css'
import { RiMenuAddLine } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import Link from './Link';
import { GoTriangleRight } from "react-icons/go";
import { FaLockOpen } from 'react-icons/fa';
import { HiLockClosed } from 'react-icons/hi';
// import { Link } from 'react-router-dom';
const Header = () => {
    

    const [brands, setBrands] = useState([])
    useEffect(() => {
        fetch('shop.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    // console.log(brands)

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (

        <header>
            <a className='logo' href="">nab</a>
            <input type="checkbox" name="" id="menu-bar" />
            <label htmlFor="menu-bar"> <RiMenuAddLine /></label>


            <nav className='navber'>
                <ul>
                    <li><a href="">home</a></li>
                    <li><a href="">home2</a></li>

                    <li><a href="">page +</a>
                        <ul>
                            <li><a href="">blog1</a></li>
                            <li><a href="">blog2</a></li>
                            <li><a href="">service +</a>
                                <ul>
                                    <li><a href="">html</a></li>
                                    <li><a href="">html</a></li>
                                    <li><a href="">html</a></li>
                                    <li><a href="">html</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="">page +</a>
                        <ul>
                            <li><a href="">blog1</a></li>
                            <li><a href="">blog2</a></li>
                            <li><a href="">service +</a>
                                <ul>
                                    <li><a href="">html</a></li>
                                    <li><a href="">html</a></li>
                                    <li><a href="">html</a></li>
                                    <li><a href="">html</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="">page +</a>
                        <ul>
                            <li><a href="">blog1</a></li>
                            <li><a href="">blog2</a></li>
                            <li><a href="">service +</a>
                                <ul>
                                    <li><a href="">html</a></li>
                                    <li><a href="">html</a></li>
                                    <li><a href="">html</a></li>
                                    <li><a href="">html</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="">page +</a>
                        <ul>
                            <li><a href="">blog1</a></li>
                            <li><a href="">blog2</a></li>
                            <li><a href="">service +</a>
                                <ul>
                                    <li><a href="">html</a></li>
                                    <li><a href="">html</a></li>
                                    <li><a href="">html</a></li>
                                    <li><a href="">html</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="">page +</a>
                        <ul>
                            <li><a href="">blog1</a></li>
                            <li><a href="">blog2</a></li>
                            <li><a href="">service +</a>
                                <ul>
                                    <li><a href="">html</a></li>
                                    <li><a href="">html</a></li>
                                    <li><a href="">html</a></li>
                                    <li><a href="">html</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="">page +</a>
                        <ul>
                            <li><a href="">blog1</a></li>
                            <li><a href="">blog2</a></li>
                            <li><a href="">service +</a>
                                <ul>
                                    <li><a href="">html</a></li>
                                    <li><a href="">html</a></li>
                                    <li><a href="">html</a></li>
                                    <li><a href="">html</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="">home4</a></li>
                    <li><a href="">home5</a></li>

                    <li><a href="">Gallery +</a>
                        <ul>
                            <li><a href="">grid</a></li>
                            <li><a href="">flex</a></li>
                        </ul>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Header

