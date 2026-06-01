import { useContext } from "react";
import CartContext from "../store/CartContext";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.items
    .reduce((total, item) => {
      return total + item.price * item.amount;
    }, 0)
    .toFixed(2);

  return (
    <>
      <div
        className={classes.backdrop}
        onClick={props.onClose}
      ></div>

      <div className={classes.modal}>
        <h2>Your Cart</h2>

        {cartCtx.items.length === 0 && (
          <>
            <p>No Items Added</p>

            <div className={classes.buttonActions}>
              <button
                className={classes.closeBtn}
                onClick={props.onClose}
              >
                Close
              </button>
            </div>
          </>
        )}

        {cartCtx.items.map((item) => (
          <div
            key={item.id}
            className={classes.cartItem}
          >
            <div>
              <h3>{item.name}</h3>

              <div className={classes.summary}>
                <span className={classes.price}>
                  ${item.price.toFixed(2)}
                </span>

                <span className={classes.amount}>
                  x {item.amount}
                </span>
              </div>
            </div>

            <div className={classes.actions}>
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

        {cartCtx.items.length > 0 && (
          <>
            <div className={classes.total}>
              <span>Total Amount</span>
              <span>${totalAmount}</span>
            </div>

            <div className={classes.buttonActions}>
              <button
                className={classes.closeBtn}
                onClick={props.onClose}
              >
                Close
              </button>

              <button className={classes.orderBtn}>
                Order
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;