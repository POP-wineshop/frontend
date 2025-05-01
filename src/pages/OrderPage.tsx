import { OrderItem } from '../components/order/OrderItem';
import DeliveryInfo from '../components/order/DeliveryInfo';
import PaymentMethod from '../components/order/PaymentMethod';
import OrderPayment from '../components/order/OrderPayment';

const OrderPage = () => {
  return (
    <>
      <p className="order-page-title">Order</p>
      <div className="order-items-container">
        <p>주문 상품</p>
        {/* 주문 진행 중인 상품 목록의 데이터 형태에 따라 달라짐 */}
        <OrderItem />
        <OrderItem />
      </div>
      <div className="delivery-info-payment-method-container">
        <DeliveryInfo />
        <PaymentMethod />
      </div>
      <div className="order-payment-container">
        <OrderPayment />
      </div>
    </>
  );
};

export default OrderPage;
