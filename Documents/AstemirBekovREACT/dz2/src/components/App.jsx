import "../App.css";
import Greeting from "./Greeting";
import ShoppingList from "./ShoppingList";
import OrderList from "./OrderList";

const products = [
  "Квартира в Москве",
  "Бугатти",
  "Вилла в Италии",
  "Яхта",
  "Личный самолет",
  "Подводная лодка",
  "Остров в Тихом океане",
];

const orders = [
  { orderId: 16894, status: "В обработке" },
  { orderId: 13734, status: "Выполнен" },
];

function App() {
  return (
    <div className="App">
      <Greeting name="Евгений" />
      <ShoppingList items={products} />
      <OrderList orders={orders} />
    </div>
  );
}

export default App;
