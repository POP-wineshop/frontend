export type WineName = {
  korean: string;
  english: string;
};

export type Price = {
  value: number;
};

export type WineType = 'RED' | 'WHITE' | 'ROSE' | 'SPARKLING' | 'DESSERT';

export type TasteProfile = {
  sweetness: number;
  acidity: number;
  body: number;
};

export interface ProductReq {
  wineName: WineName; // 와인 이름
  price: Price; // 가격
  wineType: WineType; // 와인 종류
  tasteProfile: TasteProfile; // 맛 프로파일
  vintage: number; // 빈티지
  country: string; // 생산국
  region: string; // 지역
  grapeVariety: string; // 포도 품종
  winery: string; // 와이너리
  alcoholContent: number; // 도수
  tastingNote: string; // 테이스팅 노트
  foodPairing: string; // 음식 페어링
  description: string; // 설명
  imageUrl: string | null; // 이미지 URL
  stock: number; // 재고 수량
}
