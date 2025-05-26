/**
 * ✅ export default
 * - 한 파일에 하나만 export 가능
 * - import할 때 이름을 자유롭게 지정 가능
 *
 * ✅ export const
 * - 여러 개 export 가능
 * - import할 때 이름을 정확히 맞춰야 함
 */

const sampleProductItemData = {
  wineName: {
    korean: '케이머스 나파 밸리 카버네 소비뇽',
    english: 'Caymus Napa Valley Cabernet Sauvignon',
  },
  price: { value: 150000 },
  wineType: 'RED',
  tasteProfile: { sweetness: 1, acidity: 4, body: 5 },
  stock: 10,
  vintage: 2022,
  country: '미국',
  region: '캘리포니아 > 나파 밸리',
  grapeVariety: '카버네 소비뇽 (Cabernet Sauvignon) 100%',
  winery: '케이머스 빈야드(Caymus Vineyards)',
  alcoholContent: 14.5,
  tastingNote:
    '풍부한 과실 풍미에 탄탄하고 부드러운 탄닌을 지닌 풀 바디 와인으로, 10년가량 장기 숙성 가능',
  foodPairing: '스테이크, 라구 소스를 곁들인 파스타, 숯불갈비',
  description: 'KING of Cabernet',
  imageUrl: null,
};

export default sampleProductItemData;
