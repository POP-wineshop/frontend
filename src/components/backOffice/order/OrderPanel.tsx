import { useState } from 'react';
import OrderDetail from './OrderDetail';
import OrderTable from './OrderTable';

const OrderPanel = () => {
  const [selectedOrderItem, setSelectedOrderItem] = useState<Record<
    string,
    any
  > | null>({});

  return (
    <>
      <div className="orderPanel-container">
        <OrderTable />
        {selectedOrderItem && <OrderDetail />}
      </div>
    </>
  );
};

export default OrderPanel;
