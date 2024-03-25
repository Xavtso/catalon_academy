import { validateMail } from "actions/authActions";

export const fieldRules = {
  firstName: {
    required: "* This field is required",
    minLength: {
      value: 2,
      message: "* At least 2 characters",
    },
    maxLength: {
      value: 30,
      message: "* Max 30 characters",
    },
    pattern: {
      value: /^[A-Za-z]+$/i,
      message: "* Only latin characters",
    },
  },
  lastName: {
    required: "* This field is required",
    minLength: {
      value: 2,
      message: "* At least 2 characters",
    },
    maxLength: {
      value: 30,
      message: "* Max 30 characters",
    },
    pattern: {
      value: /^[A-Za-z]+$/i,
      message: "* Only latin characters",
    },
  },
  email: {
    required: "* Email Address is Required",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "* Not valid",
    },
    validate: {
      checkEmail: async (value: string) => {
        return (await validateMail(value)) || "& Not valid";
      },
    },
  },
  password: {
    required: "* Password required",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+$/i,
      message: "* Forbidden character",
    },

    minLength: {
      value: 8,
      message: "* Password must be at least 8 characters long.",
    },
    maxLength: {
      value: 16,
      message: "* Password must not exceed 16 characters.",
    },
  },
  age: {
    required: "* Age Required",
    min: {
      value: 18,
      message: "* Older than 18",
    },
    max: {
      value: 99,
      message: "* I don't believe in it ",
    },
  },
  phoneNumber: {
    value: "+380",
    required: "* Phone Required",
    minLength: {
      value: 10,
      message: "* Not Valid",
    },
    maxLength: {
      value: 13,
      message: "* Not Valid",
    },
    pattern: {
        value: /^[0-9+]+$/i,
        message: '* Not Valid'
    },
  },
  gender: {
    required: "* Who or what you are?",
  },
  privacy: { required: "* You must to agree" },
};

export const optionsData = [
  {
    value: "",
    title: "select",
  },
  {
    value: "male",
    title: "male",
  },
  {
    value: "female",
    title: "female",
  },
  {
    value: "other",
    title: "other",
  },
];
