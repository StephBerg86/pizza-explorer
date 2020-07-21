import React from "react";
import "./styling/App.css";
import PizzaList from "./components/PizzaList";
import AddPizzaForm from "./components/addPizzaForm";
import { useDarkMode } from "./components/PizzaList";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const isDarkmode = useSelector(useDarkMode);
  const dispatch = useDispatch();
  const background = isDarkmode
    ? { backgroundColor: "#ffffff", color: "black" }
    : { backgroundColor: "#000000", color: "white" };

  const toggleDarkMode = () => {
    const action = {
      type: "TOGGLE_DARKMODE",
    };
    dispatch(action);
  };

  return (
    <div className="App">
      <div style={background}>
        <button onClick={toggleDarkMode}>Dark mode</button>

        <PizzaList />
        <AddPizzaForm />
      </div>
    </div>
  );
}

export default App;
