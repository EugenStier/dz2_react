function OrderStatus(props) {
  const orderId = props.orderId;
  const status = props.status;

  return (
    <div className="order">
      <p>
        Заказ # {orderId}: {status}
      </p>
    </div>
  );
}

export default OrderStatus;
