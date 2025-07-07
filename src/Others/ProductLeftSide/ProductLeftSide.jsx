import React, { useState } from 'react'
import { Range } from 'react-range';

const ProductLeftSide = () => {

    // Price Range slider
    const [iconOpen, setIconOpen] = useState(false)
    const min = 0;
    const max = 10000;
    const step = 100;
    const [localValues, setLocalValue] = useState([min, max]);

    return (
        <div>
            <div className="pt-5 pb-4 w-52 mx-4">
                {/* price  */}
                <Range
                    label="Select your value"
                    step={step}
                    min={min}
                    max={max}
                    values={localValues}
                    onChange={(localValues) => setLocalValue(localValues)}
                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: "4px",
                                width: "100%",
                                color: "orange",
                                backgroundColor: "blue",
                                borderRadius: "4px",
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            key={props.key}
                            style={{
                                ...props.style,
                                height: "18px",
                                width: "18px",
                                backgroundColor: "#1D4C9E",
                                border: "2px solid white",
                                borderRadius: "50%",
                                boxShadow: "0px 2px 6px orange"
                            }}
                        />
                    )}
                />

                <div className="flex justify-between pt-2">
                    <span>-{localValues[0]}</span>
                    <span>+{localValues[1]}</span>
                </div>

            </div>
        </div>
    )
}

export default ProductLeftSide
