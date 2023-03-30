import React from 'react';
import { WrapperMenuItem } from "./MenuItem.styled"

const MenuItem = ({ name, price, onSelect, img }) => {
  const handleClick = () => {
    onSelect(name, price);
  };

  return (
    <WrapperMenuItem onClick={handleClick}>
      <img className="img-product" src={img} />
      <p>{name}</p>
      <p>Price: ${price}</p>
    </WrapperMenuItem>
  );
};

export default MenuItem;