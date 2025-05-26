import { useState } from 'react';
import OrderItem from './OrderItem';
import sampleOrderList from '@/constants/backOffice/order/sampleOrderList';

const OrderTable = () => {
  const [orderlist, setOrderList] =
    useState<Record<string, any>[]>(sampleOrderList);

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
          {orderlist.map((order) => (
            <OrderItem
              key={order.orderNumber}
              orderNumber={order.orderNumber}
              status={order.status}
              date={order.date}
              totalPrice={order.totalPrice}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default OrderTable;
