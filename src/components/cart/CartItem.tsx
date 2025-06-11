import { Heart, HeartPlus } from 'lucide-react';
import { useEffect, useState } from 'react';
import DuckhornMerlot from '@/assets/wineItem/Duckhorn_Napa Valley_Merlot.png';
import { useNavigate } from 'react-router-dom';
import { substractQuantity } from '@/utils/common/util';

type CartWineItem = {
  cartItemId: number;
  wineName: string;
  quantity: number;
  totalPrice: number;
  wineId: number;
  thumbnail: string;
  winePrice: number;
};

type CartItemProps = {
  cartWineItem: CartWineItem;
  selected: boolean;
  onSelect: () => void;
  onAddQuantityState: (id: number) => void;
  onSubstractQuantityState: (id: number) => void;
};

export const CartItem = ({
  cartWineItem,
  selected,
  onSelect,
  onAddQuantityState,
  onSubstractQuantityState,
}: CartItemProps) => {
  const navigate = useNavigate();

  // cartItemId가 wineId가 아닌가보다. 데이터 내에 wineId를 같이 보내줘야함

  // const [cartItemId, setCartItemId] = useState<number>(0);
  const [wineId, setWineId] = useState<number>(0);
  const [wineNameEng, setWineNameEng] = useState<string>('와인 영어 이름');
  const [wineNameKor, setWineNameKor] = useState<string>('');
  const [cartItemQuantity, setCartItemQuantity] = useState<number>(0);
  // const [itemPrice, setItemPrice] = useState<number>(0);
  const [cartItemPrice, setCartItemPrice] = useState<number>(0);
  const [deliveryFee, setDeliveryFee] = useState<number>(0);
  // const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    if (!cartWineItem) return;

    // setCartItemId(cartWineItem.cartItemId);
    setWineId(cartWineItem.wineId);
    setWineNameKor(cartWineItem.wineName);
    setCartItemQuantity(cartWineItem.quantity);
    console.log(
      `wineNameKor: ${wineNameKor}, CartItemQuantity: , ${cartItemQuantity}`
    );
    // setTotalPrice(cartWineItem.totalPrice);
    setCartItemPrice(cartWineItem.winePrice); // 바뀔 걸 생각하면 여기도 개별 가격을 받아왔어야 하네;;;
    // setDeliveryFee(cartWineItem.totalPrice >= 50000 ? 0 : 3000); // 예시: 5만원 이상 무료배송
    setIsLiked(false); // 초기 좋아요는 false로 세팅 (필요 시 API 호출)
  }, [cartWineItem]);

  // const substractQuantity = () => {
  //   if (cartItemQuantity >= 2) {
  //     return setCartItemQuantity(cartItemQuantity - 1);
  //   } else {
  //     alert('1 이하로는 수량을 줄일 수 없습니다.');
  //     return null;
  //   }
  // };

  // const addQuantity = () => {
  //   return setCartItemQuantity(cartItemQuantity + 1);
  // };

  // 숫자를 회계단위로 변환
  // => toLocaleString()으로 해결 가능
  // function toCurrencyFormat(value: number): string {
  //   return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  // }

  const instantOrderData = {
    wineId: wineId,
    quantity: cartItemQuantity,
  };

  // 상품 개별 주문 페이지로 이동
  const handleInstantOrder = () => {
    fetch(`http://localhost:8080/api/orders/instant`, {
      method: 'POST',
      headers: {
        Authorization: `${localStorage.getItem('Access Token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(instantOrderData),
    })
      .then((res) => res.json())
      .then((jsonRes) => {
        console.log(`주문 생성 성공 : `, jsonRes.data);
        alert(`주문 생성 성공!`);
        navigate(`/order`, { state: { orderId: jsonRes.data.orderId } });
      })
      .catch((error) => {
        console.error(`주문 생성 실패 : `, error);
        alert(`주문 생성 실패 ㅠ : ${error}`);
      });
  };

  // 장바구니 아이템 별 체크박스 선택 여부 표시
  // const handleCheckboxToggle = () => {
  //   setIsSelected(!isSelected);
  // };

  return (
    <>
      <hr />
      <div className="cart-item flex justify-center items-center w-full h-full">
        <input type="checkbox" checked={selected} onChange={onSelect} />
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
              <span className="cart-item-name-eng text-lg font-base">
                {wineNameEng}
              </span>
              <span className="cart-item-name-kor text-xl font-bold">
                {wineNameKor}
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
              <button
                onClick={handleInstantOrder}
                className="cart-item-button-order bg-[#e8e5eb] px-4 py-2 rounded-xl font-bold"
              >
                개별 주문하기
              </button>
            </div>
          </div>
          <div className="flex justify-between items-end h-1/3">
            <div className="cart-item-quantity-control flex items-center">
              <button
                className="border w-6"
                onClick={() => {
                  onSubstractQuantityState(wineId);
                  console.log('수량 빼기 버튼 클릭');
                }}
              >
                -
              </button>
              <span className="w-12 text-center">{cartItemQuantity}</span>
              <button
                className="border w-6"
                onClick={() => {
                  onAddQuantityState(wineId);
                  console.log('수량 더하기 버튼 클릭');
                }}
              >
                +
              </button>
            </div>
            <div className="flex flex-col items-end gap-1 ">
              <p className="cart-item-delivery-fee">
                기본 배송 : [{deliveryFee === 0 ? '무료' : deliveryFee}] /
                개별배송
              </p>
              <span className="cart-item-cost text-right text-2xl font-bold">
                ₩{(cartItemQuantity * cartItemPrice).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
