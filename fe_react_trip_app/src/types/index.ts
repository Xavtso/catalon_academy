import store from "store";
import { ReactNode } from "react";
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type BtnReferencesType = {
  size: string;
  fillType: string;
  title: string;
};

export type TripType = {
  continent: string;
  country: string;
  city: string;
  totalPrice: number;
  imageSrc: string;
  departure: {
    date: string;
    time: string;
    city: string;
    station: string;
  };
  arrival: {
    date: string;
    time: string;
    city: string;
    station: string;
  };
  detailed: {
    description: string;
    imageDetMain: string;
    imageSrcsDet: string[];
    tripPoints: {
      city: string;
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

export type ContinentType = {
  continent: string;
  trips: TripType[];
};

export interface JourneyDetailsProps {
  details: {
    description: string;
    imageDetMain: string;
    imageSrcsDet: string[];
    tripPoints: {
      city: string;
      country: string;
      title: string;
      description: string;
      imageSrc: string;
    }[];
    conclusion: string;
  };
}

export interface RoadmapCardProps {
  tripCountry: string;
  tripTitle: string;
  arrival: {
    date: string;
    time: string;
    city: string;
    station: string;
  };

  departure: {
    date: string;
    time: string;
    city: string;
    station: string;
  };
}

export interface TripPointsProps {
  tripPoints: {
    city: string;
    country: string;
    title: string;
    description: string;
    imageSrc: string;
  }[];
}

export interface LayoutProps {
  children: ReactNode;
}

