import { useEffect, useState } from 'react';
import CartItem from '../components/cart/CartItem';
import CartPayment from '../components/cart/CartPayment';

type CartWineItem = {
  cartItemId: number;
  wineName: string;
  quantity: number;
  totalPrice: number;
  thumbnail: string;
};

type CartItemList = CartWineItem[];

type SelectedCartItemList = CartWineItem[];

const CartPage = () => {
  const [cartItemList, setCartItemList] = useState<CartItemList | null>();
  const [selectedCartItemList, setSelectedCartItemList] =
    useState<SelectedCartItemList | null>();

  // 장바구니 아이템 목록 조회
  useEffect(() => {
    fetch(`http://localhost:8080/api/carts`, {
      headers: {
        Authorization: `${localStorage.getItem('Access Token')}`,
      },
    })
      .then((res) => res.json())
      .then((jsonRes) => {
        // data가 빈 배열, 혹은 빈 객체일 때
        if (Array.isArray(jsonRes.data) && jsonRes.data.length === 0) {
          console.warn('빈 주문 응답 수신됨');
          alert('주문 항목이 비어 있음. 다시 시도하세요.');
          return;
        }

        setCartItemList(jsonRes.data);
        console.log(`장바구니 조회 성공 : `, jsonRes.data);
        alert(`장바구니 조회 성공! : ${jsonRes.data}`);
      })
      .catch((err) => {
        console.error(`장바구니 조회 실패 : `, err);
        alert(`장바구니 조회 실패 ㅠ : ${err}`);
      });
  }, []);

  // 선택된 장바구니 아이템 삭제
  const handleDeleteSelectedCartItems = () => {
    if (selectedCartItemList) {
      selectedCartItemList.forEach((item) => {
        fetch(`http://localhost:8080/api/carts/${item.cartItemId}`, {
          method: 'DELETE',
          headers: {
            Authorization: `${localStorage.getItem('Access Token')}`,
            'Content-Type': 'application/json',
          },
        })
          .then((res) => res.json())
          .then(() => {
            console.log(`장바구니 내 아이템 제거 성공 : `, item.cartItemId);
            alert(`장바구니 내 아이템 제거 성공!`);
          })
          .catch((error) => {
            console.error(`장바구니 내 아이템 제거 실패 : `, error);
            alert(`장바구니 내 아이템 제거 실패 ㅠ : ${error}`);
          });
      });
    }
  };

  // 선택된 장바구니 아이템 주문 생성
  const handleOrderSelectedCartItems = () => {
    selectedCartItemList?.forEach((item) => {
      fetch(`http://localhost:8080/api/orders/from-cart`, {
        method: 'POST',
        headers: {
          Authorization: `${localStorage.getItem('Access Token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedCartItemList),
      })
        .then((res) => res.json())
        .then(() => {
          console.log(
            `장바구니 내 선택된 아이템 주문 생성 성공 : `,
            item.cartItemId
          );
          alert(`장바구니 내 선택된 아이템 주문 생성 성공!`);
        })
        .catch((error) => {
          console.error(`장바구니 내 선택된 아이템 주문 생성 실패 : `, error);
          alert(`장바구니 내 선택된 아이템 주문 생성 실패 ㅠ : ${error}`);
        });
    });
  };

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
            <span
              onClick={handleDeleteSelectedCartItems}
              className="text-xs font-bold"
            >
              선택 삭제
            </span>
          </div>
          {/* 주문 진행 중인 상품 목록의 데이터 형태에 따라 달라짐 */}
          {cartItemList?.map((cartItem) => (
            <CartItem key={cartItem.cartItemId} cartWineItem={cartItem} />
          ))}
        </div>
        <div className="cart-payment-container w-full py-8">
          <CartPayment />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
