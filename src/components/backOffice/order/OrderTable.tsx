import { useState } from 'react';
import OrderItem from './OrderItem';
import sampleOrderList from '@/constants/backOffice/order/sampleOrderList';

const OrderTable = () => {
  const [orderlist, setOrderList] =
    useState<Record<string, any>[]>(sampleOrderList);

  return (
    <>
      <div>
        <table className="border text-sm whitespace-nowrap">
          <thead className="px-8 bg-gray-100">
            <tr>
              <th className="py-2 px-4">주문번호</th>
              <th className="py-2 px-4">주문상태</th>
              <th className="py-2 px-4">주문일시</th>
              <th className="py-2 px-4">총 금액</th>
            </tr>
          </thead>
          <tbody className="px-8">
            {orderlist.map((order) => (
              <OrderItem
                key={order.orderNumber}
                orderNumber={order.orderNumber}
                status={order.status}
                date={order.date}
                totalPayment={order.totalPayment}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderTable;
