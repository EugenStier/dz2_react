import React, { useState } from "react";

const List = () => {
  const [people, setPeople] = useState([
    { id: 1, name: "Андрей", age: 20 },
    { id: 2, name: "Марк", age: 22 },
    { id: 3, name: "Александр", age: 24 },
    { id: 4, name: "Мария", age: 19 },
    { id: 5, name: "Даниил", age: 23 },
    { id: 6, name: "Эльвира", age: 24 },
    { id: 7, name: "Наталья", age: 19 },
    { id: 8, name: "Георг", age: 21 },
    { id: 9, name: "Екатерина", age: 22 },
  ]);

  const handleRemove = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Список приглашенных</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {people.map((person) => (
          <li
            key={person.id}
            style={{ margin: "10px 0", fontSize: "20px", color: "white" }}
          >
            {person.name}, {person.age} лет
            <button
              onClick={() => handleRemove(person.id)}
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                fontSize: "14px",
                color: "white",
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
