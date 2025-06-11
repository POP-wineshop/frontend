import { useEffect, useState } from 'react';
import CartItem from '../components/cart/CartItem';
import CartPayment from '../components/cart/CartPayment';
import { useNavigate } from 'react-router-dom';
import { addQuantity } from '@/utils/common/util';

type CartWineItem = {
  cartItemId: number;
  wineName: string;
  quantity: number;
  totalPrice: number;
  wineId: number;
  thumbnail: string;
  winePrice: number;
};

const CartPage = () => {
  const navigate = useNavigate();

  const [cartItemList, setCartItemList] = useState<CartWineItem[]>([]);
  const [selectedCartItemList, setSelectedCartItemList] = useState<
    CartWineItem[]
  >([]);
  const [allCartItemsSelected, setAllCartItemsSelected] =
    useState<boolean>(false);

  // 장바구니 아이템 목록 조회
  useEffect(() => {
    fetch(`http://localhost:8080/api/carts`, {
      headers: {
        Authorization: `${localStorage.getItem('Access Token')}`,
      },
    })
      .then((res) => res.json())
      .then((jsonRes) => {
        // data가 객체이면 배열로 변환
        const dataList = Array.isArray(jsonRes.data)
          ? jsonRes.data
          : [jsonRes.data];

        if (dataList.length === 0) {
          console.warn('빈 주문 응답 수신됨');
          alert('주문 항목이 비어 있음. 다시 시도하세요.');
          return;
        }

        setCartItemList(dataList);
        console.log(`장바구니 조회 성공 : `, dataList);
        alert(`장바구니 조회 성공! : ${dataList}`);
      })
      .catch((err) => {
        console.error(`장바구니 조회 실패 : `, err);
        alert(`장바구니 조회 실패 ㅠ : ${err}`);
      });
  }, []);

  // 아이템 전체 선택
  const handleSelectAllCartItems = () => {
    if (allCartItemsSelected) {
      setSelectedCartItemList([]);
      setAllCartItemsSelected(false);
    } else {
      setSelectedCartItemList(cartItemList);
      setAllCartItemsSelected(true);
    }
  };

  // 아이템 개별 선택
  const handleSelectCartItem = (id: number) => {
    if (selectedCartItemList.some((item) => item.wineId === id)) {
      const updatedList = selectedCartItemList.filter(
        (cartItem) => cartItem.wineId !== id
      );
      setSelectedCartItemList(updatedList);
    } else {
      const targetItem = cartItemList.find(
        (cartItem) => cartItem.wineId === id || ''
      );

      if (targetItem) {
        // targetItem이 없을 경우에 대한 방지
        const updatedList = [...(selectedCartItemList || []), targetItem];
        setSelectedCartItemList(updatedList);
      }
    }
  };

  // 장바구니 리스트에서 특정 아이템의 수량을 1 증가시키는 함수
  const handleAddQuantityState = (id: number) => {
    const newCartItemList = cartItemList.map((item) =>
      item.wineId === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItemList(newCartItemList);

    const newSelectedCartItemList = selectedCartItemList.map((item) =>
      item.wineId === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setSelectedCartItemList(newSelectedCartItemList);
  };

  // 장바구니 리스트에서 특정 아이템의 수량을 1 감소시키는 함수 (1 미만 불가)
  const handleSubstractQuantityState = (id: number) => {
    const newCartItemList = cartItemList.map((item) =>
      item.wineId === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItemList(newCartItemList);

    const newSelectedCartItemList = selectedCartItemList.map((item) =>
      item.wineId === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setSelectedCartItemList(newSelectedCartItemList);
  };

  // 장바구니 수량 상태를 서버에 PATCH 요청으로 동기화하는 함수
  const handlePatchCartQuantities = () => {
    cartItemList.forEach((item) =>
      fetch(`http://localhost:8080/api/carts/${item.cartItemId}`, {
        method: 'PATCH',
        headers: {
          Authorization: `${localStorage.getItem('Access Token')}`,
          'content-type': `application/json`,
        },
        body: JSON.stringify({ quantity: item.quantity }),
      })
        .then((res) => res.json())
        .then((jsonRes) =>
          console.log('장바구니 아이템 수량 변경 성공', jsonRes)
        )
        .catch((err) => console.error('장바구니 아이템 수량 변경 실패', err))
    );
  };

  // 선택된 장바구니 아이템 삭제 => [Refactor 필요] 반복 호출이 아닌 여러 item을 한번에 처리하는 방향으로
  const handleDeleteSelectedCartItems = () => {
    if (selectedCartItemList) {
      selectedCartItemList.forEach((item) => {
        fetch(`http://localhost:8080/api/carts/${item.wineId}`, {
          method: 'DELETE',
          headers: {
            Authorization: `${localStorage.getItem('Access Token')}`,
            'Content-Type': 'application/json',
          },
        })
          .then((res) => res.json())
          .then(() => {
            console.log(`장바구니 내 아이템 제거 성공 : `, item.wineId);
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
        .then((jsonRes) => {
          console.log(
            `장바구니 내 선택된 아이템 주문 생성 성공 : `,
            item.wineId
          );
          alert(`장바구니 내 선택된 아이템 주문 생성 성공!`);
          navigate(`/order`, { state: { orderId: jsonRes.data.orderId } });
        })
        .catch((error) => {
          console.error(`장바구니 내 선택된 아이템 주문 생성 실패 : `, error);
          alert(`장바구니 내 선택된 아이템 주문 생성 실패 ㅠ : ${error}`);
        });
    });
  };

  // 모든 장바구니 아이템 주문 생성
  const handleOrderAllCartItems = () => {
    cartItemList.forEach((item) => {
      fetch(`http://localhost:8080/api/orders/from-cart`, {
        method: 'POST',
        headers: {
          Authorization: `${localStorage.getItem('Access Token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItemList),
      })
        .then((res) => res.json())
        .then((jsonRes) => {
          console.log(`장바구니 내 모든 아이템 주문 생성 성공 : `, jsonRes);
          alert(`장바구니 내 모든 아이템 주문 생성 성공!`);
          navigate(`/order`, { state: { orderId: jsonRes.data.orderId } });
        })
        .catch((error) => {
          console.error(`장바구니 내 모든 아이템 주문 생성 실패 : `, error);
          alert(`장바구니 내 모든 아이템 주문 생성 실패 ㅠ : ${error}`);
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
            <input
              type="checkbox"
              checked={allCartItemsSelected}
              onChange={handleSelectAllCartItems}
            />
            <span
              className="text-xs font-bold hover:underline cursor-pointer"
              onClick={handleSelectAllCartItems}
            >
              전체 선택
            </span>
            <span
              onClick={handleDeleteSelectedCartItems}
              className="text-xs font-bold hover:underline cursor-pointer"
            >
              선택 삭제
            </span>
          </div>
          {/* 주문 진행 중인 상품 목록의 데이터 형태에 따라 달라짐 */}
          {cartItemList?.map((cartItem) => (
            <CartItem
              key={cartItem.wineId}
              cartWineItem={cartItem}
              selected={selectedCartItemList.some(
                (item) => item.wineId === cartItem.wineId
              )}
              onSelect={() => handleSelectCartItem(cartItem.wineId)}
              onAddQuantityState={handleAddQuantityState}
              onSubstractQuantityState={handleSubstractQuantityState}
            />
          ))}
        </div>
        <div className="cart-payment-container w-full py-8">
          <CartPayment
            cartItemList={cartItemList}
            selectedCartItemList={selectedCartItemList}
            onOrderSelected={handleOrderSelectedCartItems}
            onOrderAll={handleOrderAllCartItems}
            onPatchCartQuantities={handlePatchCartQuantities}
          />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
