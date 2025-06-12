import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type OrderItem = {
  wineId: number;
  wineNameKor: string;
  winePrice: number;
  orderedQuantity: number;
  orderedPrice: number;
  wineImageUrl: string;
};

type Order = {
  orderId: number;
  orderStatus: string;
  orderItems: OrderItem[];
  totalPrice: number;
};

const MyPage = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    id: '들어갈 Id 값',
    name: '들어갈 이름 값',
  });
  const [orderList, setOrderList] = useState<Order[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/orders/my`, {
      headers: {
        Authorization: `${localStorage.getItem('Access Token')}`,
      },
    })
      .then((res) => res.json())
      .then((jsonRes) => {
        setOrderList(jsonRes.data);
      });
  });

  const handleRequestOrderCancel = (
    e: React.MouseEvent<HTMLButtonElement>,
    orderId: number
  ) => {
    e.stopPropagation();
    fetch(`http://localhost:8080/api/orders/${orderId}/cancel`, {
      method: 'DELETE',
      headers: {
        Authorization: `${localStorage.getItem('Access Token')}`,
      },
    })
      .then((res) => res.json())
      .then((jsonRes) => console.log(`주문 취소 요청 성공: ${jsonRes}`))
      .catch((err) => {
        console.error(`주문 취소 요청 실패: ${err}`);
        alert(`주문 취소 요청 실패 ㅠ: ${err}`);
      });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[800px]">
        <div className="py-8">
          <span className="text-[48px] font-bold italic">MyPage</span>
        </div>

        <div className="mb-6">
          <p className="text-lg font-bold">아이디: {userInfo.id}</p>
          <p className="text-lg font-bold">이름: {userInfo.name}</p>
          <button className="mt-2 underline text-blue-500">
            비밀번호 변경
          </button>
        </div>

        <div className="my-6">
          <h2 className="text-xl font-bold mb-2">주문 내역</h2>
          {orderList.length > 0 ? (
            orderList.map((order) => (
              <div key={order.orderId} className="mb-6">
                <div className="border px-4 py-2 cursor-pointer hover:bg-gray-100">
                  <div className="flex items-center w-full">
                    <div className="flex w-full">
                      <span className="font-semibold border-r text-center px-2 w-1/3">
                        주문 번호: {order.orderId}
                      </span>
                      <span className="font-semibold border-r text-center px-2 w-1/3">
                        총 금액: {order.totalPrice.toLocaleString()}원
                      </span>
                      <span className="font-semibold text-center px-2 w-1/3">
                        주문 상태: {order.orderStatus}
                      </span>
                    </div>
                    <div className="flex justify-end pr-4">
                      <button
                        className="bg-red-400 text-white rounded px-4 py-1 whitespace-nowrap"
                        onClick={(e) =>
                          handleRequestOrderCancel(e, order.orderId)
                        }
                      >
                        취소 요청
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border max-h-100 px-4 py-2 mt-2">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-1">이미지</th>
                        <th className="text-left py-1">상품명</th>
                        <th className="text-center py-1">수량</th>
                        <th className="text-right py-1">가격</th>
                        <th className="text-right py-1">합계</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.orderItems.map((item) => (
                        <tr key={item.wineId} className="border-b">
                          <td className="py-1">
                            <img
                              src={item.wineImageUrl}
                              alt={item.wineNameKor}
                              className="w-12 h-12 object-cover"
                            />
                          </td>
                          <td
                            className="py-1 cursor-pointer hover:underline hover:font-semibold"
                            onClick={() => {
                              navigate(`/description/${item.wineId}`, {
                                state: { id: `${item.wineId}` },
                              });
                            }}
                          >
                            {item.wineNameKor}
                          </td>
                          <td className="text-center py-1">
                            {item.orderedQuantity}
                          </td>
                          <td className="text-right py-1">
                            {item.winePrice.toLocaleString()}원
                          </td>
                          <td className="text-right py-1 font-semibold">
                            {item.orderedPrice.toLocaleString()}원
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))
          ) : (
            <p>주문 내역이 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPage;
