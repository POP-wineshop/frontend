import { Heart, HeartPlus } from 'lucide-react';
import { useState } from 'react';
import DuckhornMerlot from '@/assets/wineItem/Duckhorn_Napa Valley_Merlot.png';

export const CartItem = () => {
  const [wineNameEng, setWineNameEng] = useState<string>('');
  const [wineNameKor, setWineNameKor] = useState<string>('');
  const [cartItemQuantity, setCartItemQuantity] = useState<number>(1);
  const [cartItemPrice, setCartItemPrice] = useState<number>(0);
  const [deliveryFee, setDeliveryFee] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);

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
      <div className="cart-item flex justify-center items-center w-full h-full">
        <input type="checkbox" />
        <div className="w-[180px] h-60 border m-3 flex-shrink-0">
          <img
            className="cart-item-img object-contain w-full h-full"
            src={DuckhornMerlot}
            alt="장바구니에 담긴 와인 이미지"
          />
        </div>
        <div className="cart-item-context h-60 m-3 w-full">
          <div className="flex justify-between items-center h-1/2">
            <div className="flex flex-col justify-center items-left ">
              {/* <p className="cart-item-name-eng">{wineNameEng}</p>
              <p className="cart-item-name-kor">{wineNameKor}</p> */}
              <span className="cart-item-name-eng text-lg font-base">
                Duckhorn Napa Valley Merlot
              </span>
              <span className="cart-item-name-kor text-xl font-bold">
                덕혼 나파 밸리 멀롯
              </span>
            </div>
            <div className="cart-item-buttons flex items-center gap-4">
              <button
                className="cart-item-button-like text-black"
                onClick={() => setIsLiked(!isLiked)}
              >
                {isLiked === false ? (
                  <HeartPlus className="w-6 h-6 stroke-black fill-transparent" />
                ) : (
                  <Heart className="w-6 h-6 stroke-red-500 fill-red-500" />
                )}
              </button>
              <button className="cart-item-button-order bg-[#e8e5eb] px-4 py-2 rounded-xl font-bold">
                개별 주문하기
              </button>
            </div>
          </div>
          <div className="flex justify-between items-end h-1/3">
            <div className="cart-item-quantity-control flex items-center">
              <button className="border w-6" onClick={substractQuantity}>
                -
              </button>
              {/* <span>{cartItemQuantity}</span> */}
              <span className="w-12 text-center">2</span>
              <button className="border w-6" onClick={addQuantity}>
                +
              </button>
            </div>
            <div className="flex flex-col items-end gap-1 ">
              <p className="cart-item-delivery-fee">
                기본 배송 : [{deliveryFee === 0 ? '무료' : deliveryFee}] /
                개별배송
              </p>
              <span className="cart-item-cost text-right text-2xl font-bold">
                {/* {toCurrencyFormat(cartItemQuantity * cartItemPrice)}원 */}
                144,000원
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
