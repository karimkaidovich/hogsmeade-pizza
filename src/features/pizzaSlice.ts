import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const getPizzas = createAsyncThunk<IpizzaCard[], Record<string, string>>(
  "pizza/getPizzas",
  async ({ endpointSort, endpointFilter }) => {
    const { data } = await axios.get<IpizzaCard[]>(
      `https://62cc02fd8042b16aa7c7119e.mockapi.io/items${endpointSort}${endpointFilter}`,
    );
    return data;
  },
);

export interface IpizzaCard {
  category: number;
  id: string;
  imageUrl: string;
  price: number;
  rating: number;
  sizes: number[];
  title: string;
  types: number[];
}

enum EpizzaSatus {
  FULLFILLED = "fulfilled",
  PENDING = "pending",
  REJECTED = "error",
}

export interface IcartSlice {
  pizzas: IpizzaCard[];
  status: EpizzaSatus;
}

const initialState: IcartSlice = {
  pizzas: [],
  status: EpizzaSatus.PENDING,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPizzas.fulfilled, (state, { payload }) => {
      state.pizzas = payload;
      state.status = EpizzaSatus.FULLFILLED;
    });
    builder.addCase(getPizzas.pending, (state) => {
      state.status = EpizzaSatus.PENDING;
    });
    builder.addCase(getPizzas.rejected, (state) => {
      state.status = EpizzaSatus.REJECTED;
    });
  },
});

// Action creators are generated for each case reducer function

export default pizzaSlice.reducer;
