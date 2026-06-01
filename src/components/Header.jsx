import { useContext } from "react";
import CartContext from "../store/CartContext";
import classes from "./Header.module.css";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems =
    cartCtx.items.reduce(
      (currNumber, item) => {
        return currNumber + item.amount;
      },
      0
    );

  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>

        <button
          className={classes.cartButton}
          onClick={props.onShowCart}
        >
          🛒 Your Cart

          <span className={classes.badge}>
            {numberOfCartItems}
          </span>
        </button>
      </header>

      <div className={classes["main-image"]}>
        <img
          src="/React_Header.png"
          alt="Meals"
        />
      </div>
    </>
  );
};

export default Header;