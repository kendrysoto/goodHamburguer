import React, { useState } from "react";
import Filter from "../Filter/Filter";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Product from "../Product/Product";
import { sandwiches, extras } from "../../constans/dataFood";
import { WrapperMenu } from "./Menu.styled";

const Menu = () => {
  const [cart, setcart] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [filter, setFilter] = useState("all");

  function addToCart(item) {
    setcart([...cart, item]);
  }

  const handleSelect = (name, price) => {
    const selectedItem = { name, price };
    const itemExists = selectedItems.some((item) => item.name === name);
    if (itemExists) {
      alert(`Cannot select more than one ${name}.`);
    }
    setSelectedItems([...selectedItems, selectedItem]);
  };

  const totalPrice = selectedItems.reduce((acc, item) => acc + item.price, 0);

  let discount = 0;

  if (
    selectedItems.some((item) => item.name === "X Burger" || "TX Egg" || "X Bacon") &&
    selectedItems.some((item) => item.name === "Fries") &&
    selectedItems.some((item) => item.name === "Soft drink")
  ) {
    discount = 0.2;
  } else if (
    selectedItems.some((item) => item.name === "X Burger" || "TX Egg" || "X Bacon") &&
    selectedItems.some((item) => item.name === "Soft drink")
  ) {
    discount = 0.15;
  } else if (
    selectedItems.some((item) => item.name === "X Burger" || "TX Egg" || "X Bacon") &&
    selectedItems.some((item) => item.name === "Fries")
  ) {
    discount = 0.1;
  }

  const discountedPrice = totalPrice * (1 - discount);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredSandwiches =
    filter === "sandwiches"
      ? sandwiches
      : filter === "extras"
      ? extras
      : sandwiches.concat(extras);

  const sendOrder = () => {
    alert(`send your order`);
  };

  return (
    <WrapperMenu>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <p className="select-title">Select your order</p>
      <Product
        filteredSandwiches={filteredSandwiches}
        addToCart={addToCart}
        handleSelect={handleSelect}
      />
      <ShoppingCart
        cart={cart}
        sendOrder={sendOrder}
        totalPrice={totalPrice}
        discountedPrice={discountedPrice}
        discount={discount}
      />
    </WrapperMenu>
  );
};

export default Menu;
