import React, { useState } from 'react'

const NavDrawerCart = () => {
    const [open, setOpen] = useState(false);
    const menuHandler = () => {
        setOpen(!open);
    }
    return (
        <div>
            <div
      className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-bold">Shopping Cart</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-red-600 text-2xl">&times;</button>
      </div>

      <div className="p-4">
        <p>Your cart is empty.</p>
        {/* You can map items here */}
      </div>
    </div>
        </div>
    )
}


export default NavDrawerCart
