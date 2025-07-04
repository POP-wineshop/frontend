import { ProductRes } from '@/types/backOffice/product/productRes';

// export const sampleProductList: ProductRes[] = [
//   {
//     wineName: {
//       korean: '케이머스 나파 밸리 카버네 소비뇽',
//       english: 'Caymus Napa Valley Cabernet Sauvignon',
//     },
//     price: { value: 150000 },
//     wineType: 'RED',
//     tasteProfile: { sweetness: 1, acidity: 4, body: 5 },
//     stock: 10,
//     vintage: 2022,
//     country: '미국',
//     region: '캘리포니아 > 나파 밸리',
//     grapeVariety: '카버네 소비뇽 (Cabernet Sauvignon) 100%',
//     winery: '케이머스 빈야드(Caymus Vineyards)',
//     alcoholContent: 14.5,
//     tastingNote:
//       '풍부한 과실 풍미에 탄탄하고 부드러운 탄닌을 지닌 풀 바디 와인으로, 10년가량 장기 숙성 가능',
//     foodPairing: '스테이크, 라구 소스를 곁들인 파스타, 숯불갈비',
//     description: 'KING of Cabernet',
//     imageUrl: null,
//   },
//   {
//     wineName: {
//       korean: '윌리엄 페브르 샤블리',
//       english: 'William Fevre Chablis',
//     },
//     price: {
//       value: 48000,
//     },
//     wineType: 'WHITE',
//     tasteProfile: {
//       sweetness: 1,
//       acidity: 4,
//       body: 2,
//     },
//     stock: 25,
//     vintage: 2022,
//     country: '프랑스',
//     region: '부르고뉴, 샤블리',
//     grapeVariety: '샤도네이',
//     winery: '윌리엄 페브르',
//     alcoholContent: 12.5,
//     tastingNote: '미네랄, 허브, 청사과, 오렌지 껍질, 생기발랄하고 신선한 산도',
//     foodPairing: '굴, 조개, 생선류, 해산물, 크림소스 흰육류',
//     description: '샤블리의 전통과 생동감을 담은 프랑스 화이트 와인',
//     imageUrl: null,
//   },
//   {
//     wineName: {
//       korean: '롱반 카베르네 소비뇽',
//       english: 'Long Barn Cabernet Sauvignon',
//     },
//     price: {
//       value: 32000,
//     },
//     wineType: 'RED',
//     tasteProfile: {
//       sweetness: 1,
//       acidity: 3,
//       body: 3,
//     },
//     stock: 40,
//     vintage: 2021,
//     country: '미국',
//     region: '캘리포니아',
//     grapeVariety: '카베르네 소비뇽',
//     winery: '롱반',
//     alcoholContent: 13.5,
//     tastingNote: '풍부한 과실향, 부드러운 탄닌, 밸런스 좋은 바디감',
//     foodPairing: '스테이크, 바비큐, 치즈',
//     description: '캘리포니아 최고의 가성비 레드 와인',
//     imageUrl: null,
//   },
//   {
//     wineName: {
//       korean: '롱반 피노 누아',
//       english: 'Long Barn Pinot Noir',
//     },
//     price: {
//       value: 33000,
//     },
//     wineType: 'RED',
//     tasteProfile: {
//       sweetness: 1,
//       acidity: 3,
//       body: 2,
//     },
//     stock: 35,
//     vintage: 2022,
//     country: '미국',
//     region: '캘리포니아',
//     grapeVariety: '피노 누아',
//     winery: '롱반',
//     alcoholContent: 13.0,
//     tastingNote: '체리, 라즈베리 등 붉은 과일향, 부드러운 질감, 산뜻한 산도',
//     foodPairing: '오리, 닭고기, 연어',
//     description: '캘리포니아 피노 누아의 부드러움과 산뜻함',
//     imageUrl: null,
//   },
//   {
//     wineName: {
//       korean: '롱반 샤도네이',
//       english: 'Long Barn Chardonnay',
//     },
//     price: {
//       value: 31000,
//     },
//     wineType: 'WHITE',
//     tasteProfile: {
//       sweetness: 1,
//       acidity: 3,
//       body: 2,
//     },
//     stock: 38,
//     vintage: 2022,
//     country: '미국',
//     region: '캘리포니아',
//     grapeVariety: '샤도네이',
//     winery: '롱반',
//     alcoholContent: 13.5,
//     tastingNote: '파인애플, 사과, 바닐라, 크리미한 질감',
//     foodPairing: '해산물, 치킨, 샐러드',
//     description: '풍부한 과일향과 부드러운 질감의 캘리포니아 샤도네이',
//     imageUrl: null,
//   },
//   {
//     wineName: {
//       korean: '카모미 나파 밸리 카베르네 소비뇽',
//       english: 'Camomi Napa Valley Cabernet Sauvignon',
//     },
//     price: {
//       value: 75000,
//     },
//     wineType: 'RED',
//     tasteProfile: {
//       sweetness: 1,
//       acidity: 3,
//       body: 4,
//     },
//     stock: 20,
//     vintage: 2021,
//     country: '미국',
//     region: '캘리포니아, 나파 밸리',
//     grapeVariety: '카베르네 소비뇽',
//     winery: '카모미',
//     alcoholContent: 14.5,
//     tastingNote: '진한 검은 과일향, 초콜릿, 스파이스, 부드러운 탄닌',
//     foodPairing: '스테이크, 양고기, 진한 소스 요리',
//     description: '나파 밸리의 풍부함과 깊이를 담은 카베르네 소비뇽',
//     imageUrl: null,
//   },
//   {
//     wineName: {
//       korean: '카모미 나파 밸리 피노 누아',
//       english: 'Camomi Napa Valley Pinot Noir',
//     },
//     price: {
//       value: 69000,
//     },
//     wineType: 'RED',
//     tasteProfile: {
//       sweetness: 1,
//       acidity: 3,
//       body: 2,
//     },
//     stock: 18,
//     vintage: 2022,
//     country: '미국',
//     region: '캘리포니아, 나파 밸리',
//     grapeVariety: '피노 누아',
//     winery: '카모미',
//     alcoholContent: 14.0,
//     tastingNote: '체리, 라즈베리, 은은한 스파이스, 부드러운 질감',
//     foodPairing: '연어, 오리, 치킨',
//     description: '나파 밸리의 신선함과 우아함을 담은 피노 누아',
//     imageUrl: null,
//   },
//   {
//     wineName: {
//       korean: '카모미 나파 밸리 샤도네이',
//       english: 'Camomi Napa Valley Chardonnay',
//     },
//     price: {
//       value: 65000,
//     },
//     wineType: 'WHITE',
//     tasteProfile: {
//       sweetness: 1,
//       acidity: 3,
//       body: 2,
//     },
//     stock: 22,
//     vintage: 2022,
//     country: '미국',
//     region: '캘리포니아, 나파 밸리',
//     grapeVariety: '샤도네이',
//     winery: '카모미',
//     alcoholContent: 14.0,
//     tastingNote: '사과, 배, 바닐라, 크리미한 질감',
//     foodPairing: '해산물, 샐러드, 치킨',
//     description: '신선한 과일향과 부드러운 질감의 나파 밸리 샤도네이',
//     imageUrl: null,
//   },
//   {
//     wineName: {
//       korean: '칼레라 라이언 빈야드 피노 누아',
//       english: 'Calera Ryan Vineyard Pinot Noir',
//     },
//     price: {
//       value: 99000,
//     },
//     wineType: 'RED',
//     tasteProfile: {
//       sweetness: 1,
//       acidity: 3,
//       body: 3,
//     },
//     stock: 10,
//     vintage: 2021,
//     country: '미국',
//     region: '캘리포니아, 센트럴 코스트, 마운틴 할란',
//     grapeVariety: '피노 누아',
//     winery: '칼레라',
//     alcoholContent: 14.5,
//     tastingNote:
//       '쟈스민, 자두, 체리, 다크 체리와 감초의 아로마, 부드럽고 우아한 탄닌, 긴 여운',
//     foodPairing: '오리, 닭고기, 연어, 버섯 요리',
//     description: '센트럴 코스트를 대표하는 프리미엄 싱글 빈야드 피노 누아',
//     imageUrl: null,
//   },
//   {
//     wineName: {
//       korean: '카이켄 울트라 말벡',
//       english: 'Kaiken Ultra Malbec',
//     },
//     price: {
//       value: 42000,
//     },
//     wineType: 'RED',
//     tasteProfile: {
//       sweetness: 1,
//       acidity: 3,
//       body: 4,
//     },
//     stock: 30,
//     vintage: 2022,
//     country: '아르헨티나',
//     region: '멘도사',
//     grapeVariety: '말벡',
//     winery: '카이켄',
//     alcoholContent: 14.5,
//     tastingNote:
//       '진한 과실미, 부드러운 탄닌, 풍부하고 집중도 높은 맛, 스파이시함',
//     foodPairing: '스테이크, 양고기, 바비큐',
//     description: '아르헨티나 프리미엄 말벡의 대표주자',
//     imageUrl: null,
//   },
//   {
//     wineName: {
//       korean: '몬테스 퍼플 엔젤',
//       english: 'Montes Purple Angel',
//     },
//     price: {
//       value: 115000,
//     },
//     wineType: 'RED',
//     tasteProfile: {
//       sweetness: 1,
//       acidity: 3,
//       body: 4,
//     },
//     stock: 8,
//     vintage: 2021,
//     country: '칠레',
//     region: '콜차구아 밸리',
//     grapeVariety: '카르메네르, 쁘띠 베르도',
//     winery: '몬테스',
//     alcoholContent: 15.0,
//     tastingNote: '진한 과실향, 초콜릿, 커피, 스파이스, 부드러운 탄닌과 긴 여운',
//     foodPairing: '붉은 육류, 양고기, 숙성 치즈',
//     description: '칠레 프리미엄 카르메네르의 진수',
//     imageUrl: null,
//   },
//   {
//     wineName: {
//       korean: '덕혼 나파 밸리 멀롯',
//       english: 'Duckhorn Napa Valley Merlot',
//     },
//     price: {
//       value: 99000,
//     },
//     wineType: 'RED',
//     tasteProfile: {
//       sweetness: 1,
//       acidity: 3,
//       body: 3,
//     },
//     stock: 12,
//     vintage: 2021,
//     country: '미국',
//     region: '캘리포니아, 나파 밸리',
//     grapeVariety: '멀롯, 카베르네 소비뇽',
//     winery: '덕혼',
//     alcoholContent: 14.5,
//     tastingNote: '벨벳 같은 질감, 응집력 있는 과실미, 부드러운 탄닌',
//     foodPairing: '구운 육류, 파스타, 치즈',
//     description: '미국 멀롯의 대명사, 나파 밸리의 깊이와 우아함',
//     imageUrl: null,
//   },
//   {
//     wineName: {
//       korean: '빌까르 살몽 브뤼 로제',
//       english: 'Billecart-Salmon Brut Rosé',
//     },
//     price: {
//       value: 145000,
//     },
//     wineType: 'SPARKLING',
//     tasteProfile: {
//       sweetness: 1,
//       acidity: 4,
//       body: 2,
//     },
//     stock: 15,
//     vintage: 2022,
//     country: '프랑스',
//     region: '샹파뉴',
//     grapeVariety: '피노 누아, 샤르도네, 피노 뮈니에',
//     winery: '빌까르 살몽',
//     alcoholContent: 12.0,
//     tastingNote: '붉은 베리, 흰 꽃, 시트러스, 크리미한 텍스처, 섬세한 버블',
//     foodPairing: '해산물, 연어, 흰 육류, 디저트',
//     description: '로제 샴페인의 기준, 우아함과 섬세함의 조화',
//     imageUrl: null,
//   },
// ];
