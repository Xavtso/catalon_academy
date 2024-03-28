import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { googleLogin, loginUser, registerUser } from "store/thunks";
import { userData } from "types";

type InitialStateTypes = {
  user: userData;
  refreshToken: string;
};

const initialState: InitialStateTypes = {
  user: {} as userData,
  refreshToken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getTokenFromUserEntity(state) {
      state.refreshToken = state.user.refreshToken;
    },
  },
  extraReducers(builder) {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(googleLogin.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const tripsSliceActions = userSlice.actions;

export default userSlice;
