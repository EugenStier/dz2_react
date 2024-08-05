import React from "react";
const ListsComponent = () => {
  return (
    <div>
      <h2> В лесу живут:</h2>
      <ol>
        <li>Лось</li>
        <li>Медведь</li>
        <li>Кабан</li>
        <ul>
          <li>очень опасен при встрече в лесу</li>
        </ul>
        <li>Волк</li>
        <ul>
          <li>особо опасен зимой</li>
        </ul>
        <li>Росомаха</li>
      </ol>
      <h2>В лесу растут:</h2>
      <ul>
        <li>Береза</li>
        <li>Осина</li>
        <li>Сосна</li>
        <ul>
          <li>относится к хвойным</li>
        </ul>
        <li>Ель</li>
        <ul>
          <li>относится к хвойным</li>
        </ul>
        <li>Дуб</li>
      </ul>
    </div>
  );
};

export default ListsComponent;
