import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemHandler = (item) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      const existingItem = prevItems[existingItemIndex];

      if (existingItem) {
        const updatedItems = [...prevItems];

        updatedItems[existingItemIndex] = {
          ...existingItem,
          amount: existingItem.amount + 1,
        };

        return updatedItems;
      }

      return [...prevItems, item];
    });
  };

  const removeItemHandler = (id) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === id
      );

      const existingItem = prevItems[existingItemIndex];

      if (existingItem.amount === 1) {
        return prevItems.filter(
          (item) => item.id !== id
        );
      }

      const updatedItems = [...prevItems];

      updatedItems[existingItemIndex] = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };

      return updatedItems;
    });
  };

  const cartContext = {
    items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;