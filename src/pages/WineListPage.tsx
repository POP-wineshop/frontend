import WineFilter from '../components/common/WineFilter';
import WineItem from '../components/wineList/WineItem';
import ToFirstPage from '@/assets/pagination/WineListPage_Pagination_ToFirstPage.svg';
import ToPreviousPage from '@/assets/pagination/WineListPage_Pagination_ToPreviousPage.svg';
import ToNextPage from '@/assets/pagination/WineListPage_Pagination_ToNextPage.svg';
import ToLastPage from '@/assets/pagination/WineListPage_Pagination_ToLastPage.svg';

const WineListPage = () => {
  return (
    <>
      <div className="flex flex-col items-center ">
        <WineFilter />
        <div className="grid grid-cols-3 gap-4 w-full px-8">
          <WineItem />
          <WineItem />
          <WineItem />
          <WineItem />
          <WineItem />
          <WineItem />
        </div>
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
