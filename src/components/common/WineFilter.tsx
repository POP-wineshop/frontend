import { useState } from 'react';

const WineFilter = () => {
  const countries = [
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
    { key: '와인종류', value: '' },
    { key: '레드', value: 'RED' },
    { key: '화이트', value: 'WHITE' },
    { key: '로제', value: 'ROSE' },
    { key: '스파클링', value: 'SPARKLING' },
    { key: '디저트', value: 'DESSERT' },
  ];

  const [country, setCountry] = useState<string>('');
  const [region, setRegion] = useState<string>('');
  const [wineType, setWineType] = useState<string>('');
  const [keyword, setKeyword] = useState<string>('');

  const handleSearchWines = () => {
    const url = new URL('http://localhost:8080/api/wines/search');
    const params = new URLSearchParams(url.search);

    if (country) params.append('country', country);
    if (region) params.append('region', region);
    if (wineType) params.append('wineType', wineType);
    if (keyword) params.append('keyword', keyword);

    const finalUrl = `${url.origin}${url.pathname}?${params.toString()}`;

    fetch(finalUrl)
      .then((res) => res.json())
      .then((jsonRes) => {
        console.log(jsonRes);
        alert(`와인 조회 성공! 
          url : ${finalUrl}
          국가 / 지역 : ${country} > ${region}
          종류 : ${wineType}
          키워드 : ${keyword}`);
        // 전역 변수로 와인 목록 컴포넌트에 들어갈 와인 데이터 상태 변경
      })
      .catch((error) =>
        alert(`와인 조회 실패 ㅠ
          국가 / 지역 : ${country} > ${region}
          종류 : ${wineType}
          키워드 : ${keyword}
          에러: ${error}`)
      );
  };

  return (
    <>
      <div className="wine-filter-search flex justify-between items-center my-8 px-8 w-full min-w-[700px] mx-auto">
        <div className="wine-filter flex gap-4 items-center">
          <div className="wine-filter-country items-center">
            <select
              onChange={(e) => setCountry(e.target.value)}
              className="border w-32 p-2 rounded"
            >
              {countries.map((country) => (
                <option key={country}>{country}</option>
              ))}
            </select>
          </div>

          <div className="wine-filter-region items-center">
            <select
              onChange={(e) => setRegion(e.target.value)}
              className="border w-32 p-2 rounded"
            >
              {regions.map((region) => (
                <option key={region}>{region}</option>
              ))}
            </select>
          </div>

          <div className="wine-filter-wineType items-center">
            <select
              onChange={(e) => setWineType(e.target.value)}
              className="border w-32 p-2 rounded"
            >
              {wineTypes.map((wineType) => (
                <option key={wineType.key} value={wineType.value}>
                  {wineType.key}
                </option>
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
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button onClick={handleSearchWines} className="border p-2 rounded">
              검색
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WineFilter;
