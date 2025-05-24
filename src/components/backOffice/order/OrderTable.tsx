import OrderItem from './OrderItem';

const orders = [
  {
    orderNumber: '#20250524-001',
    status: '결제 완료',
    date: '2025.05.24 13:25',
    totalPrice: '57,000원',
  },
  {
    orderNumber: '#20250524-001',
    status: '결제 완료',
    date: '2025.05.24 13:25',
    totalPrice: '57,000원',
  },
  {
    orderNumber: '#20250524-001',
    status: '결제 완료',
    date: '2025.05.24 13:25',
    totalPrice: '57,000원',
  },
  // ...다른 주문
];

const OrderTable = () => {
  return (
    <>
      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4">주문번호</th>
            <th className="py-2 px-4">주문상태</th>
            <th className="py-2 px-4">주문일시</th>
            <th className="py-2 px-4">총 금액</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderItem key={order.orderNumber} {...order} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default OrderTable;
