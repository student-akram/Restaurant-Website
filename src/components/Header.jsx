import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>

        <button className={classes.cartButton}>
          🛒 Your Cart
          <span className={classes.badge}>0</span>
        </button>
      </header>

      <div className={classes["main-image"]}>
        <img src="/React_Header.png" alt="Delicious Food" />
      </div>
    </>
  );
};

export default Header;