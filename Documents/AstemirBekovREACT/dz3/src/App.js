import React from "react";
import Rating from "./components/Rating";
import List from "./components/List";
import style from "./components/styles.css";

const App = () => {
  return (
    <div>
      <h1>Рейтинг</h1>
      <Rating />
      <List />
    </div>
  );
};

export default App;
