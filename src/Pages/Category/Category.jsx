import React from 'react';
import { Link } from 'react-router-dom';
import processorImg from '../../assets/icon/processor.png';
import monitorImg from '../../assets/icon/monitor.png';
import motherboardImg from '../../assets/icon/motherboard (1).png';
import gamingImg from '../../assets/icon/gaming-chair (1).png';
import graphicsImg from '../../assets/icon/vga-card.png';
import powerImg from '../../assets/icon/power-supply.png';
import ssdImg from '../../assets/icon/solid-state-drive.png';
import ramImg from '../../assets/icon/ram.png';
import casingImg from '../../assets/icon/pc.png';
import accessoriesImg from '../../assets/icon/mouse.png';
import routerImg from '../../assets/icon/wifi-router.png';
import upsImg from '../../assets/icon/ppp01.png';

const Category = () => {
    return (
        <div>
            <div >

                <ul className='grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-2 '>
                    <li className='h-[100px]  pt-3  bg-gray-200 rounded   flex justify-items-center justify-center'>
                        <Link to={'/products/Processor'}><img  src={processorImg} />Processor</Link> </li>
                    <li className='h-[100px]  pt-3  bg-gray-200 rounded   flex justify-items-center justify-center'>
                        <Link to={'/products/Monitor'}> <img src={monitorImg} />Monitor</Link>
                    </li>
                    <li className='h-[100px]  pt-3  bg-gray-200 rounded   flex justify-items-center justify-center'>
                    <Link to={'/products/Motherboard'}><img className='ml-3' src={motherboardImg} />Matherboard</Link>
                    </li>
                    <li className='h-[100px]  pt-3  bg-gray-200 rounded   flex justify-items-center justify-center'>
                    <Link to={'/products/Graphic'}><img className='ml-4' src={graphicsImg} />Graphics Card</Link>
                    </li>
                    <li className='h-[100px]  pt-3  bg-gray-200 rounded   flex justify-items-center justify-center'>
                    <Link to={'/products/Ram'}><img  src={ramImg} /><h2 className='ml-4'>RAM</h2></Link>
                    </li>
                    <li className='h-[100px]  pt-3  bg-gray-200 rounded   flex justify-items-center justify-center'>
                    <Link to={'/products/Ssd'}><img src={ssdImg} /><h2 className='ml-4'>SSD</h2></Link>
                    </li>
                    <li className='h-[100px]  pt-3  bg-gray-200 rounded   flex justify-items-center justify-center'>
                    <Link to={'/products/Casing'}><img src={casingImg} />Casing</Link>
                    </li>
                    <li className='h-[100px]  pt-3  bg-gray-200 rounded   flex justify-items-center justify-center'>
                    <Link to={'/products/PowerSupply'}><img className='ml-4' src={powerImg} />Power Supply</Link>
                    </li>
                    <li className='h-[100px]  pt-3  bg-gray-200 rounded   flex justify-items-center justify-center'>
                    <Link to={'/products/Accessories'}><img src={accessoriesImg} />Accessories</Link>
                    </li>
                    <li className='h-[100px]  pt-3  bg-gray-200 rounded   flex justify-items-center justify-center'>
                    <Link to={'/products/Gaming'}><img src={gamingImg} />Gaming</Link>
                    </li>
                    <li className='h-[100px]  pt-3  bg-gray-200 rounded   flex justify-items-center justify-center'>
                    <Link to={'/products/Router'}><img src={routerImg} /> <h2 className='ml-2'>Router</h2></Link>
                    </li>
                    <li className='h-[100px]  pt-3  bg-gray-200 rounded   flex justify-items-center justify-center'>
                    <Link to={'/products/Ups'}><img src={upsImg} /><h2 className='ml-4'>UPS</h2> </Link>
                    </li>
                   
                </ul>
               
            </div>
        </div>
    );
};

export default Category;