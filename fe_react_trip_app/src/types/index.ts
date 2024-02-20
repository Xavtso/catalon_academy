import store from "../store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type PlaceType = {
  city: string;
  detailed: string;
  dates: string;
  totalPrice: number;
  imageSrc: string;
};
