import store from "store";
import { ReactNode } from "react";
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Trips Data Types

export type ContinentType = {
  continent: string;
  trips: Trip[];
};

export type Trip = {
  id: number;
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
    imageSrcsDet: {
      id: number;
      src: string;
    }[];
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

type TripPoints = {
  city: string;
  country: string;
  title: string;
  description: string;
  imageSrc: string;
};

export interface TripPointsProps {
  tripPoints: TripPoints[];
}

export interface JourneyDetailsProps {
  details: {
    description: string;
    imageSrcsDet: {
      id: number;
      src: string;
    }[];
    tripPoints: TripPoints[];
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


// Other
export interface LayoutProps {
  children: ReactNode;
}

export type BtnProps = {
  size: string;
  fillType: string;
  title: string;
  onClick: () => void;
};

export interface FilterButtonProps {
  title: string;
  value: string;
  isActive: boolean;
  setActiveBtn: () => void;
}
