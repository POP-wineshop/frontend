import { useState } from 'react';
import DuckhornMerlot from '@/assets/wineItem/Duckhorn_Napa Valley_Merlot.png';

export const OrderItem = () => {
  const [wineNameEng, setWineNameEng] = useState<string>('');
  const [wineNameKor, setWineNameKor] = useState<string>('');
  const [qty, setQty] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [deliveryFee, setDeliveryFee] = useState<number>(0);

  return (
    <>
      <hr />
      {/* <div className="order-item">
        <img className="order-item-img" src="" alt="주문할 와인 이미지" />
        <div className="order-item-context">
          <p className="order-item-name-eng">{wineNameEng}</p>
          <p className="order-item-name-eng">{wineNameKor}</p>
          <img className="order-item-delete" src="" alt="주문할 와인 삭제" />
          <p className="order-item-quantity">수량: {qty}개</p>
          <p className="order-item-cost">{qty * price}원</p>
        </div>
      </div> */}

      <div className="order-item flex justify-center items-center w-full h-full">
        <div className="w-[180px] h-60 border m-3 flex-shrink-0">
          <img
            className="order-item-img object-contain w-full h-full"
            src={DuckhornMerlot}
            alt="주문할 와인 이미지"
          />
        </div>
        <div className="order-item-context h-60 m-3 w-full">
          <div className="flex justify-between items-center h-1/2">
            <div className="flex flex-col justify-center items-left ">
              {/* <p className="order-item-name-eng">{wineNameEng}</p>
              <p className="order-item-name-kor">{wineNameKor}</p> */}
              <span className="order-item-name-eng text-lg font-base">
                Duckhorn Napa Valley Merlot
              </span>
              <span className="order-item-name-kor text-xl font-bold">
                덕혼 나파 밸리 멀롯
              </span>
            </div>
            <div className="order-item-delete flex items-center">
              <button className="order-item-button-like text-black text-3xl font-bold">
                X
              </button>
            </div>
          </div>
          <div className="flex justify-between items-end h-1/3">
            <div className="order-item-quantity">
              {/* <span>수량 : {qty}병</span> */}
              <span className="w-12 text-left text-xl font-semibold">
                수량 : 2병
              </span>
            </div>
            <div className="flex flex-col items-end gap-1 ">
              <p className="order-item-delivery-fee">
                기본 배송 : [{deliveryFee === 0 ? '무료' : deliveryFee}] /
                개별배송
              </p>
              <span className="order-item-cost text-right text-2xl font-bold">
                {/* {toCurrencyFormat(qty * price)}원 */}
                144,000원
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
