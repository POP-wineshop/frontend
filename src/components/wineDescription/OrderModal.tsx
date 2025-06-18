import { useState } from 'react';

const OrderModal = () => {
  const [wineNameEng, setWineNameEng] = useState<string>('');
  const [wineNameKor, setWineNameKor] = useState<string>('');
  const handleCloseModal = () => {};

  return (
    <>
      <div className="order-modal-background" onClick={handleCloseModal}>
        <div className="order-modal-container">
          <img src="" alt="개별 주문 모달 내 IMG" />
          <div className="order-modal-name">
            <span>{wineNameEng}</span>
            <span>{wineNameKor}</span>
          </div>
          <div className="order-modal-quantity-control">
            {/* <span onClick={substractQuantity}>-</span>
            <span>{itemQuantity}</span>
            <span onClick={addQuantity}>+</span> */}
          </div>
          <hr />
          <div className="order-modal-total-cost">
            <span>TOTAL</span>
            {/* <span>{itemQuantity * itemPrice}</span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderModal;
