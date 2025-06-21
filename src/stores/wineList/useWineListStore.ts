import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Wine = {
  id: number;
  price: number;
  vintage: number;
  country: string;
  grapeVariety: string;
  region: string;
  alcoholContent: number;
  imageUrl: string;
  tasteProfile: {
    sweetness: number;
    acidity: number;
    body: number;
  };
  wineType: string;
  stock: number;
  korName: string;
  engName: string;
};

type WineListState = {
  wineList: Wine[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
};

const initialState: WineListState = {
  wineList: [],
  totalItems: 0,
  totalPages: 0,
  currentPage: 1,
};

const wineListSlice = createSlice({
  name: 'wineList',
  initialState,
  reducers: {
    setWineList(state, action: PayloadAction<Wine[]>) {
      state.wineList = action.payload;
    },
    setTotalItems(state, action: PayloadAction<number>) {
      state.totalItems = action.payload;
    },
    setTotalPages(state, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setWineList, setTotalItems, setTotalPages, setCurrentPage } =
  wineListSlice.actions;

export default wineListSlice.reducer;
