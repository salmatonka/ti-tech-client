import React from 'react'
import './Specification.css'

const Specification = () => {
    return (
        <div className='dark:bg-gray-600'>

            <div className=' bg-primary dark:bg-[#1a2641d5]'>
                <div className=' dark:text-gray-200 dark:bg-gray-700 shadow-lg rounded-md py-2 pl-3 bg-info dark: my-2'>
                    <h6 className='text-lg font-semibold'>Specification</h6>
                </div>

                <div className='left-side dark:bg-[#1a2641d5]'>
                    <div className='left-side'>
                        <div className='grid-left bg-info dark:bg-[#1a2641d5] border-r'>
                            <div className='border-b py-2'>
                                <h6 className='pl-2'>Processor</h6>
                            </div>
                            <div className='border-b py-2'>
                                <h6 className='pl-2'>Motherboard</h6>
                            </div>
                            <div className='border-b py-2'>
                                <h6 className='pl-2'>Ram</h6>
                            </div>
                            <div className='border-b py-2'>
                                <h6 className='pl-2'>SSD</h6>
                            </div>
                            <div className='border-b py-2'>
                                <h6 className='pl-2'>Power Supply</h6>
                            </div>
                            <div className='border-b py-2'>
                                <h6 className='pl-2'>Casing</h6>
                            </div>

                        </div>
                        <div className='right-side'>
                            <div className='border-b py-2'>
                                <h6 className='pl-2'>AMD Ryzen 5 3400G Desktop Processor with Radeon RX Vega 11 Graphics</h6>
                            </div>
                            <div className='border-b py-2'>
                                <h6 className='pl-2 '>Enter E-HA520 AMD AM4 4x SATA Micro-ATX Motherboard</h6>
                            </div>
                            <div className='border-b py-2'>
                                <h6 className='pl-2'>Apacer NOX 8GB DDR4 3200MHz Desktop RAM</h6>
                            </div>
                            <div className='border-b py-2'>
                                <h6 className='pl-2 '>Kingspece 256GB M.2 NVMe SSD</h6>
                            </div>
                            <div className='border-b py-2'>
                                <h6 className='pl-2'>Revenger 350W Power Supply</h6>
                            </div>
                            <div className='border-b py-2'>
                                <h6 className='pl-2'>Gigabit 335T Micro ATX Gaming Casing </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Specification
