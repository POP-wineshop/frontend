const WineItem = () => {
  return (
    <>
      <div className="wine-item">
        <div className="wine-name">
          <p className="wine-name-kor">와인 이름 (한글)</p>
          <p className="wine-name-eng">와인 이름 (영문)</p>
        </div>
        <p className="short-wine-description">간략한 와인 설명</p>
      </div>
    </>
  );
};

export default WineItem;
