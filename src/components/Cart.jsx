import Modal from "./Modal";
import classes from "./Cart.module.css";

const Cart = () => {
  return (
    <Modal>
      <div className={classes.cartItem}>
        <h3>Sushi</h3>
      </div>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$35.62</span>
      </div>

      <div className={classes.actions}>
        <button className={classes.close}>
          Close
        </button>

        <button className={classes.order}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;