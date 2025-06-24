import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartWineItem = {
  cartItemId: number;
  wineName: string;
  quantity: number;
  totalPrice: number;
  wineId: number;
  thumbnail: string;
  winePrice: number;
};

type CartState = {
  cartItemList: CartWineItem[];
  selectedCartItemList: CartWineItem[];
  allCartItemsSelected: boolean;
};

const initialState: CartState = {
  cartItemList: [],
  selectedCartItemList: [],
  allCartItemsSelected: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItemList(state, action: PayloadAction<CartWineItem[]>) {
      state.cartItemList = action.payload;
    },
    setSelectedCartItemList(state, action: PayloadAction<CartWineItem[]>) {
      state.selectedCartItemList = action.payload;
    },
    // toggleAllSelection(state) {
    //   if (state.allCartItemsSelected) {
    //     state.selectedCartItemList = [];
    //     state.allCartItemsSelected = false;
    //   } else {
    //     state.selectedCartItemList = [...state.cartItemList];
    //     state.allCartItemsSelected = true;
    //   }
    // },
    // toggleSingleSelection(state, action: PayloadAction<number>) {
    //   const wineId = action.payload;
    //   const index = state.selectedCartItemList.findIndex(
    //     (item) => item.wineId === wineId
    //   );

    //   if (index !== -1) {
    //     state.selectedCartItemList.splice(index, 1);
    //   } else {
    //     const found = state.cartItemList.find((item) => item.wineId === wineId);
    //     if (found) {
    //       state.selectedCartItemList.push(found);
    //     }
    //   }
    // },
    incrementQuantity(state, action: PayloadAction<number>) {
      const updateQuantity = (list: CartWineItem[]) =>
        list.map((item) =>
          item.wineId === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

      state.cartItemList = updateQuantity(state.cartItemList);
      state.selectedCartItemList = updateQuantity(state.selectedCartItemList);
    },
    decrementQuantity(state, action: PayloadAction<number>) {
      const updateQuantity = (list: CartWineItem[]) =>
        list.map((item) =>
          item.wineId === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );

      state.cartItemList = updateQuantity(state.cartItemList);
      state.selectedCartItemList = updateQuantity(state.selectedCartItemList);
    },
    clearCart(state) {
      state.cartItemList = [];
      state.selectedCartItemList = [];
      state.allCartItemsSelected = false;
    },
  },
});

export const {
  setCartItemList,
  setSelectedCartItemList,
  //   toggleAllSelection,
  //   toggleSingleSelection,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
