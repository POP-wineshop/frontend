const WineFilter = () => {
  const nations = [
    '생산국',
    '프랑스',
    '이탈리아',
    '스페인',
    '독일',
    '미국',
    '호주',
    '뉴질랜드',
    '칠레',
    '아르헨티나',
  ];

  const regions = [
    '생산지',
    '꼬드 드 뉘 > 뉘 생 조르쥬',
    '꼬뜨 드 뉘',
    '꼬뜨 드 뉘 빌라쥐',
    '꼬뜨 드 본',
    '꼬뜨 드 본 > 뫼르소',
    '꼬뜨 드 본 > 뽀마르',
    '꼬뜨 드 본 > 상뜨네',
    '꼬뜨 드 본 > 알록스 꼬르통',
    '마꼬네',
  ];

  const wineTypes = [
    '와인종류',
    '레드',
    '화이트',
    '로제',
    '스파클링',
    '디저트',
  ];

  return (
    <>
      <div className="wine-filter-search flex justify-between items-center my-8 px-8 w-full min-w-[700px] mx-auto">
        <div className="wine-filter flex gap-4 items-center">
          <div className="wine-filter-nation items-center">
            <select className="border w-32 p-2 rounded">
              {nations.map((nation, index) => (
                <option key={index}>{nation}</option>
              ))}
            </select>
          </div>

          <div className="wine-filter-region items-center">
            <select className="border w-32 p-2 rounded">
              {regions.map((region, index) => (
                <option key={index}>{region}</option>
              ))}
            </select>
          </div>

          <div className="wine-filter-type items-center">
            <select className="border w-32 p-2 rounded">
              {wineTypes.map((type, index) => (
                <option key={index}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="wine-search flex items-center justify-end">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="와인 이름을 적어주세요!"
              className="border w-64 p-2 rounded"
            />
            <button className="border p-2 rounded">검색</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WineFilter;
