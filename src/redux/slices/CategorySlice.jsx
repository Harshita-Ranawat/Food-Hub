import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
  name: "category",
  initialState: {
    category: "All",
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
     // console.log("qwertyui",action.payload);
    },
  },
});

export const { setCategory } = CategorySlice.actions;
export default CategorySlice.reducer;
