import { useEffect, useState } from 'react';
import DuckhornMerlot from '@/assets/wineItem/Duckhorn_Napa Valley_Merlot.png';
import { Heart, HeartPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type Wine = {
  id: number;
  price: number;
  vintage: number;
  country: string;
  grapeVariety: string;
  region: string;
  alcoholContent: number;
  imageUrl: string;
  tasteProfile: {
    sweetness: number;
    acidity: number;
    body: number;
  };
  wineType: string;
  stock: number;
  korName: string;
  engName: string;
};

type WineDataProps = { wineData: Wine };

const WineDescriptionTop: React.FC<WineDataProps> = ({ wineData }) => {
  // const [wineNameEng, setWineNameEng] = useState<string>(wineData.engName);
  // const [wineNameKor, setWineNameKor] = useState<string>(wineData.korName);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [itemQuantity, setItemQuantity] = useState<number>(1);

  const wineNameEng = wineData.engName;
  const wineNameKor = wineData.korName;
  const itemPrice = wineData.price;

  const navigate = useNavigate();

  const substractQuantity = () => {
    if (itemQuantity >= 2) {
      return setItemQuantity(itemQuantity - 1);
    } else {
      alert('1 이하로는 수량을 줄일 수 없습니다.');
      return null;
    }
  };

  const addQuantity = () => {
    return setItemQuantity(itemQuantity + 1);
  };

  const instantOrderData = {
    wineId: wineData.id,
    quantity: itemQuantity,
  };

  const cartOrderData = {
    wineId: wineData.id,
    quantity: itemQuantity,
  };

  console.log(`cartOrderData : `, cartOrderData);

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
        // data가 빈 배열일 때
        if (Array.isArray(jsonRes.data) && jsonRes.data.length === 0) {
          console.warn('빈 주문 응답 수신됨');
          alert('주문 항목이 비어 있음. 다시 시도하세요.');
          return;
        }

        console.log(`주문 생성 성공 : `, jsonRes.data);
        alert(`주문 생성 성공!`);
        navigate(`/order`, { state: { orderId: jsonRes.data.orderId } });
      })
      .catch((error) => {
        console.error(`주문 생성 실패 : `, error);
        alert(`주문 생성 실패 ㅠ : ${error}`);
      });
  };

  const handleAddToCart = () => {
    fetch(`http://localhost:8080/api/carts`, {
      method: 'POST',
      headers: {
        Authorization: `${localStorage.getItem('Access Token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartOrderData),
    })
      .then((res) => res.json())
      .then((jsonRes) => {
        // data가 빈 배열일 때
        // if (Array.isArray(jsonRes.data) && jsonRes.data.length === 0) {
        //   console.warn('빈 주문 응답 수신됨');
        //   alert('주문 항목이 비어 있음. 다시 시도하세요.');
        //   return;
        // }

        console.log(`장바구니 추가 성공 : `, jsonRes.data);
        alert(`장바구니 추가 성공! : ${jsonRes.data}`);
      })
      .catch((err) => {
        console.error(`장바구니 추가 실패 : `, err);
        alert(`장바구니 추가 실패 ㅠ : ${err}`);
      });
  };

  const wineDescriptionDetails = [
    { key: '타입', value: `${wineData.wineType}` },
    {
      key: '생산국 / 생산지',
      value: `${wineData.country} > ${wineData.region}`,
    },
    { key: '와이너리', value: `와이너리` },
    { key: '포도품종', value: `${wineData.grapeVariety}` },
  ];

  const tasteProfiles = [
    { label: '당도', low: '드라이', high: '스위트' },
    { label: '산도', low: '낮음', high: '높음' },
    { label: '바디', low: '가벼움', high: '무거움' },
  ];

  return (
    <div className="wine-description-top flex gap-2 px-8 py-8 w-full min-h-[500px] mx-auto justify-center items-center">
      <div className="wine-description-top-left w-2/5 flex justify-center items-center h-full">
        <img
          className="object-contain w-auto h-[480px] mx-auto my-auto"
          src={DuckhornMerlot}
          alt="와인 상세 이미지"
        />
      </div>
      <div className="wine-description-top-right w-3/5">
        <div className="wine-description-name mb-8 relative">
          <p className="wine-description-name-eng text-base text-[#333] mb-1">
            {wineNameEng}
          </p>
          <p className="wine-description-name-kor text-3xl font-semibold text-[#111]">
            {wineNameKor}
          </p>
          <div className="wine-description-isLiked-button absolute right-0 top-1/2 -translate-y-1/2">
            <button className="text-black" onClick={() => setIsLiked(!isLiked)}>
              {isLiked === false ? (
                <HeartPlus className="w-6 h-6 stroke-black fill-transparent" />
              ) : (
                <Heart className="w-6 h-6 stroke-red-500 fill-red-500" />
              )}
            </button>
          </div>
        </div>
        <div className="wine-description-details">
          <table className="border-separate border-spacing-y-4">
            <tbody>
              {wineDescriptionDetails.map(({ key, value }) => (
                <tr key={key}>
                  <th className="text-left w-40 p-0">{key}</th>
                  <td className="p-0">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="wine-description-taste-profile border-t border-b">
          {tasteProfiles.map(({ label, low, high }) => (
            <div key={label} className="flex items-center my-4 pr-4">
              <strong className="w-40">{label}</strong>
              <span className="w-12 text-xs text-right">{low}</span>
              <div className="flex gap-4 mx-3">
                {/* 수평 간격 12px = 3 * 4px */}
                {[1, 2, 3, 4, 5].map((n) => (
                  <div
                    key={n}
                    className="bg-[#e8e5eb] text-[#c1acbf] text-sm w-6 h-6 rounded-full flex items-center justify-center"
                  >
                    <li className="list-none">{n}</li>
                  </div>
                ))}
              </div>
              <span className="w-12 text-xs">{high}</span>
            </div>
          ))}
        </div>
        <div className="wine-description-order-addToCart my-4">
          <div className="set-quantity-and-price flex w-full mb-4">
            <div className="quantity-control w-1/2 flex items-center">
              <button className="border w-6" onClick={substractQuantity}>
                -
              </button>
              <span className="w-12 text-center">{itemQuantity}</span>
              <button className="border w-6" onClick={addQuantity}>
                +
              </button>
            </div>
            <div className="total-cost w-1/2 flex gap-2 justify-end items-center text-right">
              <span className="font-semibold text-xl">TOTAL</span>
              {/* <span>₩{itemQuantity * itemPrice}</span> */}
              <span className="font-semibold text-xl">
                ₩{(itemPrice * itemQuantity).toLocaleString()}
              </span>
            </div>
          </div>
          <div className="wine-description-buttons flex items-center gap-2">
            <button
              onClick={handleInstantOrder}
              className="bg-[#e8e5eb] p-2 w-1/2 rounded-xl font-bold"
            >
              주문하기
            </button>
            <button
              onClick={handleAddToCart}
              className="bg-[#e8e5eb] p-2 w-1/2 rounded-xl font-bold"
            >
              장바구니
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineDescriptionTop;
