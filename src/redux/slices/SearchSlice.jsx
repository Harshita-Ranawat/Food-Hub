import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {
    search: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
      console.log("slice wala",action.payload);
    },
  },
});

export const { setSearch } = SearchSlice.actions;
export default SearchSlice.reducer;
