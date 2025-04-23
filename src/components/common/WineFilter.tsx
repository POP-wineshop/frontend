const WineFilter = () => {
  return (
    <>
      <div className="wine-filter-search">
        <div className="wine-filter-nation">
          <p>생산국</p>
          <ul>
            <li>생산국</li>
            <li>프랑스</li>
            <li>이탈리아</li>
            <li>스페인</li>
            <li>독일</li>
            <li>미국</li>
            <li>호주</li>
            <li>뉴질랜드</li>
            <li>칠레</li>
            <li>아르헨티나</li>
          </ul>
        </div>
        <div className="wine-filter-region">
          <p>생산지</p>
          <ul>
            <li>생산지</li>
            <li>부르고뉴 &gt; 꼬드 드 뉘 &gt; 뉘 생 조르쥬</li>
            <li>부르고뉴 &gt; 꼬뜨 드 뉘</li>
            <li>부르고뉴 &gt; 꼬뜨 드 뉘-빌라쥐</li>
            <li>부르고뉴 &gt; 꼬뜨 드 본</li>
            <li>부르고뉴 &gt; 꼬뜨 드 본 &gt; 뫼르소</li>
            <li>부르고뉴 &gt; 꼬뜨 드 본 &gt; 뽀마르</li>
            <li>부르고뉴 &gt; 꼬뜨 드 본 &gt; 상뜨네</li>
            <li>부르고뉴 &gt; 꼬뜨 드 본 &gt; 알록스 꼬르통</li>
            <li>부르고뉴 &gt; 마꼬네</li>
          </ul>
        </div>
        <div className="wine-filter-type">
          <p>와인종류</p>
          <ul>
            <li>와인종류</li>
            <li>레드</li>
            <li>화이트</li>
            <li>로제</li>
            <li>스파클링</li>
            <li>디저트</li>
          </ul>
        </div>
        <div className="wine-search">
          <input type="text" placeholder="와인 이름" />
          <button />
        </div>
      </div>
    </>
  );
};

export default WineFilter;
