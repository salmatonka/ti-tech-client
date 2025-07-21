import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './ProductDetails.css'
const ProductSilder = ({ image }) => {

     const product = {
    title: "gggggggg",
    description: "ddddddddd",
    price: "24",
    count: "1",
    colors: ["red", "black", "blue"],
    content: "welcome",
    src: [
      "https://www.shutterstock.com/image-photo/beach-seat-laptop-wallpepar-hd-260nw-2498994455.jpg",
      "https://tinypng.com/static/images/boat.png",
      "https://www.thomascook.in/blog/wp-content/uploads/2023/04/solo-traveller.jpg"
    ]
  };

  const [index, setIndex] = useState(0);

  const handleTab = (i) => {
    setIndex(i);
  };

    return (
        <div className="details">
      <div className="big-img">
        <img src={product.src[index]} alt="Product" />
      </div>

      <div className="box">
        <div className="row">
          <h2>{product.title}</h2>
          <span>Price: ${product.price}</span>
        </div>

        <div className="colors">
          <p>Available Colors:</p>
          {product.colors.map((color, i) => (
            <button key={i} style={{ background: color }}></button>
          ))}
        </div>

        <p>{product.description}</p>
        <p>{product.content}</p>

        <div className="thumb">
          {product.src.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              onClick={() => handleTab(i)}
              className={index === i ? "active" : ""}
            />
          ))}
        </div>

        <button className="cart">Add to Cart</button>
      </div>
    </div>
    )
}

export default ProductSilder
