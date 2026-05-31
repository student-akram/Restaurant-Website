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
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy and green",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <li key={meal.id} className={classes.meal}>
            <div>
              <h3>{meal.name}</h3>
              <p className={classes.description}>
                {meal.description}
              </p>
              <p className={classes.price}>
                ${meal.price}
              </p>
            </div>

            <form className={classes.form}>
              <div className={classes.input}>
                <label>Amount</label>

                <input
                  type="number"
                  min="1"
                  max="5"
                  defaultValue="1"
                />
              </div>

              <button type="button">+ Add</button>
            </form>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AvailableMeals;