import React, { useEffect, useState } from 'react'
import './HeaderSection.css';
import { GoTriangleRight } from "react-icons/go";
const HeaderSection = () => {

    const [brands, setBrands] = useState([])
    useEffect(() => {
        fetch('shop.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    // console.log(brands)
    return (
        <header>
            <a className='logo lg:hidden' href="">nab</a>
            <input type="checkbox" name="" id="menu-bar" />
            <label htmlFor="menu-bar">menu</label>


            <nav className='navber'>
                <ul>

                    <li><a href="" target='_self'>Desktop +</a>
                        <ul>
                            {
                                brands?.filter(b => b?.category === 'Desktop')?.map(brand =>
                                    <li className=''><a className='' href="">{brand?.brand} </a></li>
                                )
                            }
                        </ul>
                    </li>

                    <li><a href="">Laptop +</a>
                        <ul>
                            {
                                brands?.filter(b => b?.category === 'Laptop')?.map(brand =>
                                    <li className=''><a className='' href="">{brand?.brand} </a></li>
                                )
                            }
                        </ul>
                    </li>

                    <li><a href="">Monitor +</a>
                        <ul>
                            {
                                brands?.filter(b => b?.category === 'Monitor')?.map(brand =>
                                    <li className=''><a className='' href="">{brand?.brand} </a></li>
                                )
                            }
                        </ul>
                    </li>

                    <li><a href="">Printer +</a>
                        <ul>
                            {
                                brands?.filter(b => b?.category === 'Printer')?.map(brand =>
                                    <li className=''><a className='' href="">{brand?.brand} </a></li>
                                )
                            }
                        </ul>
                    </li>

                    <li><a href="">UPS +</a>
                        <ul>
                            {
                                brands?.filter(b => b?.category === 'UPS')?.map(brand =>
                                    <li className=''><a className='' href="">{brand?.brand} </a></li>
                                )
                            }
                        </ul>
                    </li>
                    <li><a href="">UPS +</a>
                        <ul>
                            {
                                brands?.filter(b => b?.category === 'UPS')?.map(brand =>
                                    <li className=''><a className='' href="">{brand?.brand} </a></li>
                                )
                            }
                        </ul>
                    </li>
                    <li><a href="">UPS +</a>
                        <ul>
                            {
                                brands?.filter(b => b?.category === 'UPS')?.map(brand =>
                                    <li className=''><a className='' href="">{brand?.brand} </a></li>
                                )
                            }
                        </ul>
                    </li>
                    <li><a href="">UPS +</a>
                        <ul>
                            {
                                brands?.filter(b => b?.category === 'UPS')?.map(brand =>
                                    <li className=''><a className='' href="">{brand?.brand} </a></li>
                                )
                            }
                        </ul>
                    </li>
                    <li><a href="">UPS +</a>
                        <ul>
                            {
                                brands?.filter(b => b?.category === 'UPS')?.map(brand =>
                                    <li className=''><a className='' href="">{brand?.brand} </a></li>
                                )
                            }
                        </ul>
                    </li>



                    <li><a href="">Software +</a>
                        <ul>
                            {
                                brands?.filter(b => b?.category === 'Software')?.map(brand =>
                                    <li className=''><a className='' href="">{brand?.brand} </a></li>
                                )
                            }
                        </ul>
                    </li>
                    

                    
                    <li><a href="">Networking +</a>
                        <ul>
                            <li className=''><a className='' href="">Router <GoTriangleRight /></a>
                                <ul>
                                    <li><a href="">TP Link</a></li>
                                    <li><a href="">Netis</a></li>
                                    <li><a href="">Mikrotik</a></li>
                                    <li><a href="">NETGEAR</a></li>
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

                    <li><a href="">Software +</a>
                        {
                            brands?.filter(b => b?.category === 'Software')?.map(brand =>
                                <ul>
                                    <li><a href="">{brand?.brand}</a></li>
                                </ul>
                            )
                        }
                    </li>

                    <li><a href="">Gadget +</a>
                        <ul>
                            <li><a className='flex justify-between items-center' href="">Earbuds</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderSection
