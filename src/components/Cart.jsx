import classes from "./Cart.module.css";


const Cart = (props) => {
  return (
    <>
      <div className="backdrop"></div>

      <div className="cart-modal">
        <h3>Sushi</h3>

        <div className="total">
          <span>Total Amount</span>
          <span>$35.62</span>
        </div>

        <div className="actions">
          <button
            className="close-btn"
            onClick={props.onClose}
          >
            Close
          </button>

          <button className="order-btn">
            Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;