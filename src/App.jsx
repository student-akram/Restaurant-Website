import Header from "./components/Header";
import MealsSummary from "./components/MealsSummary";
import AvailableMeals from "./components/AvailabilityMeals";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Cart />

      <Header />
      <MealsSummary />
      <AvailableMeals />
    </>
  );
}

export default App;