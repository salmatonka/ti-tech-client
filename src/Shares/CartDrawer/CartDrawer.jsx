import React, { useState } from 'react'
// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import Carts from '../../Pages/Carts/Carts'
import CartDrawerCard from './CartDrawerCard'
import { FaUniversalAccess } from 'react-icons/fa'
import { HiOutlineBars4 } from 'react-icons/hi2'
const CartDrawer = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const [open, setOpen] = useState(false);

    const menuHandler = () => {
        setOpen(!open);
    }
    return (
        <div className=''>

            <button onClick={toggleDrawer}>🛒</button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                // className='bla bla bla'
                size='320px'

            >

                <div>
                    <div className='flex justify-between px-4 py-6 bg-warning text-primary font-semibold text-lg'>
                        <h1>Shopping Cart</h1>
                        
                    </div>

                    <div>
                        <div>
                            <CartDrawerCard />
                        </div>
                    </div>



                </div>
            </Drawer>
        </div>
    )
}

export default CartDrawer
