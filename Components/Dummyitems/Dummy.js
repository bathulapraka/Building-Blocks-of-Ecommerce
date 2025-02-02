import React from "react";
import { IoMdCart } from "react-icons/io";
const Dummy = () => {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return (
    <div >
      <div class="container">s
        {productsArr.map((product, index) => (
          <div key={index}>
            <h1>{product.title}</h1>
            
           
            <img src={product.imageUrl} alt={product.title}></img>
            <span>${product.price}</span>
            <button><IoMdCart />Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dummy;
