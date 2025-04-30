import CartItem from '../components/cart/CartItem';
import CartPayment from '../components/cart/CartPayment';

const CartPage = () => {
  return (
    <>
      <p className="cart-page-title">Cart</p>
      <div className="cart-items-container">
        <input type="checkbox" />
        <label htmlFor=""></label>
        {/* 주문 진행 중인 상품 목록의 데이터 형태에 따라 달라짐 */}
        <CartItem />
        <CartItem />
      </div>
      <div className="cart-payment-container">
        <CartPayment />
      </div>
    </>
  );
};

export default CartPage;
