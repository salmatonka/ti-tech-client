import React, { useEffect, useState } from 'react'
import './DropDownMenu.css';
import { RiMenuAddLine } from "react-icons/ri";

const DropDownMenu = () => {
    // const [open, setOpen] = useState(false)
    // const [brands, setBrands] = useState([])
    // useEffect(() => {
    //     fetch('shop.json')
    //         .then(res => res.json())
    //         .then(data => setBrands(data))
    // }, [])
    // console.log(brands)
    return (
      <header className='mb-4'>
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

export default DropDownMenu
