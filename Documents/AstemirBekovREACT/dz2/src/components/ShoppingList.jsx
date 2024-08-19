import React, { useState } from "react";

function ShoppingList(props) {
  const [items, setItems] = useState(props.items);

  const handleItemClick = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  if (items.length === 0) {
    return <p>Список покупок пуст</p>;
  }
  return (
    <div className="list div">
      <h3>Список покупок</h3>
      <ol className="list_num">
        {items.map((item) => (
          <div className="list_item" key={item}>
            <li onClick={() => handleItemClick(items.indexOf(item))}>{item}</li>
          </div>
        ))}
      </ol>
    </div>
  );
}

export default ShoppingList;
