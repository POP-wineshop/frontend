import WineFilter from '../components/common/WineFilter';
import WineItem from '../components/wineList/WineItem';

const WineListPage = () => {
  return (
    <>
      <WineFilter />
      <div className="wine-items">
        <WineItem />
        <WineItem />
        <WineItem />
        <WineItem />
        <WineItem />
        <WineItem />
        <WineItem />
        <WineItem />
      </div>
      <div className="pagination">
        <img src="" alt="이전 페이지" />
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <img src="" alt="다음 페이지" />
      </div>
    </>
  );
};

export default WineListPage;
