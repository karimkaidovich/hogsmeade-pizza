import { createSlice } from "@reduxjs/toolkit";

enum EsortNames {
  POPULARITY = "popularity",
  DESCENDINGP = "descending price",
  ASCENDINGP = "ascending price",
}

export interface IcartSlice {
  filterId: number;
  searchValue: string;
  sort: {
    sortId: number;
    sortName: EsortNames;
  };
}

const initialState: IcartSlice = {
  filterId: 0,
  searchValue: "",
  sort: {
    sortId: 0,
    sortName: EsortNames.POPULARITY,
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setFilterId(state, action) {
      state.filterId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilterId, setSort, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
