import React from 'react'

const SingleDrop = () => {
  return (
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

export default SingleDrop
