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
  totalPrice: number;
  imageSrc: string;
  departure: {
    date: string;
    time: string;
    city: string;
  };
  arrival: {
    date: string;
    time: string;
    city: string;
  };
  detailed: {
    description: string;
    imageDetMain: string;
    imageSrcsDet: string[];
    tripPoints: {
      country: string;
      title: string;
      description: string;
      imageSrc: string;
    }[];
    conclusion: string;
  };
  favorite: {
    isFav: boolean;
    imageSrcFav: string;
    description: string;
  };
};


export interface LayoutProps {
  children: ReactNode;
}

