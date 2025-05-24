export interface Product {
  wineName: { korean: string; english: string };
  price: { value: number };
  wineType: string;
  tasteProfile: { sweetness: number; acidity: number; body: number };
  stock: number;
  vintage: number;
  country: string;
  region: string;
  grapeVariety: string;
  winery: string;
  alcoholContent: number;
  tastingNote: string;
  foodPairing: string;
  description: string;
  imageUrl: string | null;
}
