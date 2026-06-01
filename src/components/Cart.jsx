import { useContext } from "react";
import CartContext from "../store/CartContext";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <>
      <div
        className={classes.backdrop}
        onClick={props.onClose}
      ></div>

      <div className={classes.modal}>
        <h2>Your Cart</h2>

        {cartCtx.items.length === 0 && (
          <p>No Items Added</p>
        )}

        {cartCtx.items.map((item) => (
          <div
            key={item.id}
            className={classes.cartItem}
          >
            <div>
              <h3>{item.name}</h3>
              <p>
                ${item.price} x {item.amount}
              </p>
            </div>

            <div className={classes.controls}>
              <button
                onClick={() =>
                  cartCtx.removeItem(item.id)
                }
              >
                −
              </button>

              <button
                onClick={() =>
                  cartCtx.addItem({
                    ...item,
                    amount: 1,
                  })
                }
              >
                +
              </button>
            </div>
          </div>
        ))}

        <div className={classes.actions}>
          <button onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;