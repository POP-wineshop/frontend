import WineItem from '../components/wineList/WineItem';
import ToFirstPage from '@/assets/pagination/WineListPage_Pagination_ToFirstPage.svg';
import ToPreviousPage from '@/assets/pagination/WineListPage_Pagination_ToPreviousPage.svg';
import ToNextPage from '@/assets/pagination/WineListPage_Pagination_ToNextPage.svg';
import ToLastPage from '@/assets/pagination/WineListPage_Pagination_ToLastPage.svg';
import { useEffect, useState } from 'react';
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

const WineListPage = () => {
  // useNavigate() 이용
  const navigate = useNavigate();

  // 페이지네이션 관련 상태
  const [totalItems, setTotalItems] = useState<number | ''>('');
  const [totalPages, setTotalPages] = useState<number | ''>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // 데이터 수신 및 저장 관련 상태
  const [wineList, setWineList] = useState<Wine[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/wines`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(`GET 요청 (api/wines) 응답: `, jsonResponse.data);
        setWineList(jsonResponse.data);
      })
      .catch((error) => console.error(`/api/wines 실행 오류 발생: `, error));
  }, []);

  // 전체 데이터 개수 가져오기

  // 전체 페이지 수 계산 (총 데이터 개수 ÷ 한 페이지당 개수 → 올림)

  // 현재 페이지 상태값 초기화 (예: 1페이지부터 시작)

  // 현재 페이지에 맞는 데이터 잘라서 보여주기 (slice 또는 filter)

  // 페이지네이션 버튼 범위 계산 (예: 15, 610)

  // 페이지 버튼 클릭 시 → 현재 페이지 상태 업데이트

  // 첫/이전/다음/마지막 버튼 → 현재 페이지에 따라 비활성/활성 처리

  // 현재 페이지에 맞는 데이터 다시 보여주기 (4번과 연결)

  return (
    <>
      <div className="flex flex-col items-center ">
        {wineList.length > 0 ? (
          <div className="grid grid-cols-3 gap-4 w-full px-8">
            {wineList.map((wine) => (
              <WineItem key={wine.id} wineData={wine} />
            ))}
          </div>
        ) : (
          <div className="w-full px-8">
            <p>조건에 만족하는 와인이 없습니다!</p>
          </div>
        )}
        <div className="flex items-center justify-center gap-4 my-8">
          <img src={ToFirstPage} alt="첫 페이지" />
          <img src={ToPreviousPage} alt="이전 페이지" />
          <span>
            <a href="">1</a>
          </span>
          <span>
            <a href="">2</a>
          </span>
          <span>
            <a href="">3</a>
          </span>
          <span>
            <a href="">4</a>
          </span>
          <span>
            <a href="">5</a>
          </span>
          <img src={ToNextPage} alt="다음 페이지" />
          <img src={ToLastPage} alt="마지막 페이지" />
        </div>
      </div>
    </>
  );
};

export default WineListPage;
