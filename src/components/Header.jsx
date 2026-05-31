import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>

        <button
          className={classes.cartButton}
          onClick={props.onShowCart}
        >
          🛒 Your Cart
          <span className={classes.badge}>3</span>
        </button>
      </header>

      <div className={classes["main-image"]}>
        <img
          src="/React_Header.png"
          alt="Food"
        />
      </div>
    </>
  );
};

export default Header;