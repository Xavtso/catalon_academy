import store from "../store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type PlaceType = {
  id: number;
  city: string;
  Detailed: string;
  Dates: string;
  TotalPrice: number;
};
