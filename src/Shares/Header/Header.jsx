import React from 'react';
import './Header.css'
const Header = () => {
    const categories = [
        { "category": "Processor" },
        { "category": "Monitor" },
        { "category": "Matherboard" },
        { "category": "Graphics Card" },
        { "category": "RAM" },
        { "category": "SSD" },
        { "category": "Casing" },
        { "category": "Power Supply" },
        { "category": "Accessories" },
        { "category": "Gaming" },
        { "category": "Router" },
        { "category": "UPS" }
    ]
    return (
        <div className='w-full bg-[#2B3440]  pl-10 '>
            {
                categories.map(category => (
                    <div className="dropdown ">
                        <button className="dropbtn2 bg-[#2B3440]">{category.category}</button>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Header;