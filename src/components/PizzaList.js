import React from "react";
import { useSelector, useDispatch } from "react-redux";

const selectUser = (reduxState) => {
  return reduxState.user;
};

// Define a selector to get the list of pizzas,
// and then add a line of text showing the total number of known pizzas.
const selectNumberOfPizzas = (reduxState) => {
  return reduxState.pizzas.length;
};

// Render the pizzas to an <ul> list with an <li> list item for each pizza,
// showing the pizza's name and description as well as number of times it was bought.
// const allPizzas = (reduxState) => {
//   return reduxState.pizzas;
// };

// Modify the selector you wrote to sort the pizzas by popularity.
//(We consider pizzas that were bought more often more popular)
const selectAllPizzas = (reduxState) => {
  return reduxState.pizzas.sort((pizzaA, pizzaB) => {
    return pizzaB.bought - pizzaA.bought;
  });
};

const selectFavorites = (reduxState) => {
  return reduxState.user.favorites;
};

//darkmode
export const useDarkMode = (reduxState) => {
  return reduxState.user.darkMode;
};

export default function PizzaList() {
  const user = useSelector(selectUser);
  const nrPizzas = useSelector(selectNumberOfPizzas);
  const pizzas = useSelector(selectAllPizzas);
  const favorite = useSelector(selectFavorites);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>The total number of pizzas is: {nrPizzas}</p>
      <p>
        Welcome back, <strong>{user.name}</strong>! Your favorite pizzas:
      </p>
      <p>
        <ul className="allPizzas">
          {pizzas.map((p) => {
            const toggle = () => {
              dispatch({
                type: "TOGGLE_FAVORITE_PIZZA",
                payload: p.id,
              });
            };
            return (
              <li key={p.id} className="onePizza">
                <strong>Name:</strong> {p.name} <br />
                <img src={p.image} alt="pizza" className="pizzaImage" />
                <strong>Description:</strong> {p.description} <br />
                <strong>Times bought:</strong> {p.bought} <br />
                <button onClick={toggle}>
                  {favorite.includes(p.id) ? "♥" : "♡"}
                </button>
              </li>
            );
          })}
        </ul>
      </p>
    </div>
  );
}
