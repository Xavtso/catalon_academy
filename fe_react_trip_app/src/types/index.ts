import store from "store";
import { ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";
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

// Forms

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

export interface SignUpFormType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  age: number;
  gender: GenderEnum;
  privacy: boolean;
}


type optionsDataType = {
  value: string;
  title: string;
}

export interface InputProps {
  placeholder?: string;
  inputClassName: string;
  type?:
    | "text"
    | "password"
    | "email"
    | "tel"
    | "number"
    | "checkbox"
    | "select";
  fieldName: string;
  register: UseFormRegister<any>;
  rules: object;
  optionsData?: optionsDataType[];
}
