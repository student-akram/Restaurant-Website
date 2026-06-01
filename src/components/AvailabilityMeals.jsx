import { useContext } from "react";
import CartContext from "../store/CartContext";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
];

const AvailabilityMeals = () => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = (meal) => {
    cartCtx.addItem({
      ...meal,
      amount: 1,
    });
  };

  return (
    <section className={classes.meals}>
  <ul>
    {DUMMY_MEALS.map((meal) => (
      <li key={meal.id}>
        <div>
          <h3>{meal.name}</h3>

          <p>{meal.description}</p>

          <p className={classes.price}>
            ${meal.price}
          </p>
        </div>

        <button
          className={classes.addBtn}
          onClick={() => addItemHandler(meal)}
        >
          + Add
        </button>
      </li>
    ))}
  </ul>
</section>
  );
};

export default AvailabilityMeals;