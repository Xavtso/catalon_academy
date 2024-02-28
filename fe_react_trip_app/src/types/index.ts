import store from "../store";
import { ReactNode } from "react";
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type BtnReferencesType = {
  size: string;
  fillType: string;
  title: string;
};

export type TripType = {
  city: string;
  detailed: string;
  dates: string;
  totalPrice: number;
  imageSrc: string;
  continent: string;
};

export interface LayoutProps {
  children: ReactNode;
}

