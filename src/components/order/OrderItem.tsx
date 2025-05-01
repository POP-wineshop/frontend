import { useState } from 'react';

export const OrderItem = () => {
  const [wineNameEng, setWineNameEng] = useState<string>('');
  const [wineNameKor, setWineNameKor] = useState<string>('');

  const [qty, setQty] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  return (
    <>
      <hr />
      <div className="order-item">
        <img className="order-item-img" src="" alt="주문할 와인 이미지" />
        <div className="order-item-context">
          <p className="order-item-name-eng">{wineNameEng}</p>
          <p className="order-item-name-eng">{wineNameKor}</p>
          <img className="order-item-delete" src="" alt="주문할 와인 삭제" />
          <p className="order-item-quantity">수량: {qty}개</p>
          <p className="order-item-cost">{qty * price}원</p>
        </div>
      </div>
    </>
  );
};
