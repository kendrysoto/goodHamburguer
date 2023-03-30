import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import { WrapperProduct } from "./Product.styled"


const Product = ({filteredSandwiches, addToCart, handleSelect}) => {
  return (
    <WrapperProduct>
    {filteredSandwiches.map((item) => (
        <div onClick={() => addToCart(item)}>
          <MenuItem
            key={item.name}
            name={item.name}
            price={item.price}
            onSelect={handleSelect}
            item={item}
            img={item.img}
          />
        </div>
      ))}
  </WrapperProduct>
  );
};

export default Product;
