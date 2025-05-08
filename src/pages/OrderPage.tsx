import { OrderItem } from '../components/order/OrderItem';
import DeliveryInfo from '../components/order/DeliveryInfo';
import PaymentMethod from '../components/order/PaymentMethod';
import OrderPayment from '../components/order/OrderPayment';

const OrderPage = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="w-[800px]">
          <div className="items-left py-8 w-full">
            <span className="order-page-title text-[48px] font-bold italic">
              Order
            </span>
          </div>
          <div className="order-items-container w-full py-8">
            <div className="order-items-header my-3">
              <p className="text-2xl font-bold">주문 상품</p>
            </div>
            {/* 주문 진행 중인 상품 목록의 데이터 형태에 따라 달라짐 */}
            <OrderItem />
            <OrderItem />
          </div>
          <div className="delivery-info-payment-method-container w-full py-8 flex justify-between gap-8">
            <DeliveryInfo />
            <PaymentMethod />
          </div>
          <div className="order-payment-container w-full py-8">
            <OrderPayment />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
