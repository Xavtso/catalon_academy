import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "store/thunks";
import { userDataType } from "types";

type InitialStateTypes = {
  user: userDataType;
};

const initialState: InitialStateTypes = {
  user: {} as userDataType,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    
  },
  extraReducers(builder) {
    builder.addCase(registerUser.fulfilled, () => {});
    builder.addCase(loginUser.fulfilled, () => {});
  },
});

export const userSliceActions = userSlice.actions;

export default userSlice;
