import { useState } from "react";

import Header from "./components/Header";
import MealsSummary from "./components/mealsSummary";
import AvailableMeals from "./components/AvailabilityMeals";
import Cart from "./components/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && (
        <Cart onClose={hideCartHandler} />
      )}

      <Header onShowCart={showCartHandler} />

      <MealsSummary />
      <AvailableMeals />
    </>
  );
}

export default App;