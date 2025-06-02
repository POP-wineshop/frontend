export type TasteProfile = {
  sweetness: number; // 단맛 정도
  acidity: number; // 산도 정도
  body: number; // 바디감 정도
};

export type WineType = 'RED' | 'WHITE' | 'ROSE' | 'SPARKLING' | 'DESSERT';

export interface ProductRes {
  id: number; // 와인 고유 ID
  price: number; // 가격
  vintage: number; // 빈티지 (제조 연도)
  country: string; // 생산국
  grapeVariety: string; // 포도 품종
  region: string; // 지역
  alcoholContent: number; // 도수
  imageUrl: string; // 이미지 URL
  tasteProfile: TasteProfile; // 맛 프로파일
  wineType: WineType; // 와인 종류
  stock: number; // 재고 수량
  korName: string; // 한글 이름
  engName: string; // 영문 이름
}
