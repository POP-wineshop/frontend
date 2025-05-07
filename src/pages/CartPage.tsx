import CartItem from '../components/cart/CartItem';
import CartPayment from '../components/cart/CartPayment';

const CartPage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[800px]">
        <div className="items-left py-8 w-full">
          <span className="cart-page-title text-[48px] font-bold italic">
            Cart
          </span>
        </div>
        <div className="cart-items-container w-full py-8">
          <div className="flex gap-4 my-2">
            <input type="checkbox" />
            <span className="text-xs font-bold">전체 선택</span>
            <span className="text-xs font-bold">선택 삭제</span>
          </div>
          {/* 주문 진행 중인 상품 목록의 데이터 형태에 따라 달라짐 */}
          <CartItem />
          <CartItem />
        </div>
        <div className="cart-payment-container w-full py-8">
          <CartPayment />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
