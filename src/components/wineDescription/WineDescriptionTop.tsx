import { useEffect, useState } from 'react';
import DuckhornMerlot from '@/assets/wineItem/Duckhorn_Napa Valley_Merlot.png';
import { Heart, HeartPlus } from 'lucide-react';

type Props = {
  handleOpenModal: () => void;
};

const WineDescriptionTop: React.FC<Props> = ({ handleOpenModal }) => {
  const [wineNameEng, setWineNameEng] = useState<string>('');
  const [wineNameKor, setWineNameKor] = useState<string>('');
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [itemQuantity, setItemQuantity] = useState<number>(1);
  const [itemPrice, setItemPrice] = useState<number>(0);

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

  const tasteProfiles = [
    { label: '당도', low: '드라이', high: '스위트' },
    { label: '산도', low: '낮음', high: '높음' },
    { label: '바디', low: '가벼움', high: '무거움' },
  ];

  const wineDescriptionDetails = [
    { key: '타입', value: `와인 타입` },
    { key: '생산국 / 생산지', value: `생산국 > 생산지` },
    { key: '와이너리', value: `와이너리` },
    { key: '포도품종', value: `포도 품종` },
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
            Duckhorn Napa Valley Merlot
          </p>
          <p className="wine-description-name-kor text-3xl font-semibold text-[#111]">
            덕혼 나파 밸리 멀롯
          </p>
          {/* <p className="wine-description-name-eng">{wineNameEng}</p>
          <p className="wine-description-name-kor">{wineNameKor}</p> */}
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
              {/* <span>{itemQuantity}</span> */}
              <span className="w-12 text-center">2</span>
              <button className="border w-6" onClick={addQuantity}>
                +
              </button>
            </div>
            <div className="total-cost w-1/2 flex gap-2 justify-end items-center text-right">
              <span className="font-semibold text-xl">TOTAL</span>
              {/* <span>₩{itemQuantity * itemPrice}</span> */}
              <span className="font-semibold text-xl">₩144,000</span>
            </div>
          </div>
          <div className="wine-description-buttons flex items-center gap-2">
            <button
              onClick={handleOpenModal}
              className="bg-[#e8e5eb] p-2 w-1/2 rounded-xl font-bold"
            >
              주문하기
            </button>
            <button className="bg-[#e8e5eb] p-2 w-1/2 rounded-xl font-bold">
              장바구니
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineDescriptionTop;
