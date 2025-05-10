import { useState } from 'react';
import DuckhornMerlot from '@/assets/wineItem/Duckhorn_Napa Valley_Merlot.png';
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

type WineItemProps = {
  wineData: Wine; // 여기서 any 대신 Wine 타입 쓰는 게 더 좋아
};

const WineItem = ({ wineData }: WineItemProps) => {
  const navigate = useNavigate();

  const [wineNameEng, setWineNameEng] = useState<string>('');
  const [wineNameKor, setWineNameKor] = useState<string>('');

  return (
    <>
      <div
        className="wine-item w-full flex flex-col items-center bg-white rounded-lg p-4 h-96"
        onClick={() => {
          navigate(`/description/${wineData.id}`, {
            state: { id: `${wineData.id}` },
          });
        }}
      >
        <div className="w-full h-3/4 flex items-center justify-center overflow-hidden border ">
          <img
            src={DuckhornMerlot}
            alt="와인 이미지"
            className="object-contain w-full h-56"
          />
        </div>

        <div className="wine-name w-full text-left mt-4">
          <p className="font-bold text-xl">와인 한글 이름</p>
          <p className="text-lg text-gray-500">와인 영어 이름</p>
          {/* <p className="font-bold text-2xl">{wineNameKor}</p>
          <p className="text-lg text-gray-500">{wineNameEng}</p> */}
        </div>

        <div className="w-full mt-2 text-left text-base text-gray-600">
          <p>간략한 와인 설명</p>
        </div>

        <div className="w-full mt-2 text-right text-base font-bold text-gray-600">
          {/* <p>₩{price}</p> */}
          <p>₩144,000</p>
        </div>
      </div>
    </>
  );
};

export default WineItem;
