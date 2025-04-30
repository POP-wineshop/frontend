import { useState } from 'react';

export const CartItem = () => {
  const [wineNameEng, setWineNameEng] = useState<string>('');
  const [wineNameKor, setWineNameKor] = useState<string>('');
  const [cartItemQuantity, setCartItemQuantity] = useState<number>(1);
  const [cartItemPrice, setCartItemPrice] = useState<number>(0);
  const [deliveryFee, setDeliveryFee] = useState<number>(0);

  const substractQuantity = () => {
    if (cartItemQuantity >= 2) {
      return setCartItemQuantity(cartItemQuantity - 1);
    } else {
      alert('1 이하로는 수량을 줄일 수 없습니다.');
      return null;
    }
  };

  const addQuantity = () => {
    return setCartItemQuantity(cartItemQuantity + 1);
  };

  function toCurrencyFormat(value: number): string {
    return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <>
      <hr />
      <div className="cart-item">
        <input type="checkbox" />
        <img
          className="cart-item-img"
          src=""
          alt="장바구니에 담긴 와인 이미지"
        />
        <div className="cart-item-context">
          <p className="cart-item-name-eng">{wineNameEng}</p>
          <p className="cart-item-name-kor">{wineNameKor}</p>
          <div className="cart-item-buttons">
            <button className="cart-item-button-like">
              <img src="" alt="와인 '좋아요' 버튼 " />
            </button>
            <button className="cart-item-button-order">주문하기</button>
          </div>
          <div className="cart-item-quantity-control">
            <span onClick={substractQuantity}>-</span>
            <span>{cartItemQuantity}</span>
            <span onClick={addQuantity}>+</span>
          </div>
          <div className=""></div>
          <p className="cart-item-delivery-fee">
            기본 배송 : [{deliveryFee === 0 ? '무료' : deliveryFee}] / 개별배송
          </p>
          <p className="cart-item-cost">
            {toCurrencyFormat(cartItemQuantity * cartItemPrice)}원
          </p>
        </div>
      </div>
    </>
  );
};

export default CartItem;
