import OrderStatus from "./OrderStatus";

const OrderList = ({ orders }) => {
  return (
    <div className="order-status">
      <h3>Статус заказа</h3>
      {orders.map((order) => (
        <OrderStatus
          key={order.orderId}
          orderId={order.orderId}
          status={order.status}
        />
      ))}
    </div>
  );
};

export default OrderList;
