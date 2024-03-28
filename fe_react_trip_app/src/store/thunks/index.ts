import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  // getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "configs/Firebase";
import { getAuthErrorMessage } from "utils/auth";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const user = userCredential.user;

      // const additionalCredentials = {
      //   admin: true,
      // };

      const userData = {
        refreshToken: user.refreshToken,
        uuid: user.uid,
        email: user?.email,
        fullName: user.displayName,
      };
      console.log(userData);
      return userData;
    } catch (error: any) {
      const errorMessage = getAuthErrorMessage(error.code, error.message);
      throw new Error(errorMessage);
    }
  },
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      const userData = {
        refreshToken: user.refreshToken,
        uuid: user.uid,
        email: user?.email,
        fullName: user.displayName,
      };
      console.log(userData);
      return userData;
    } catch (error: any) {
      const errorMessage = getAuthErrorMessage(error.code, error.message);
      throw new Error(errorMessage);
    }
  },
);

export const googleLogin = createAsyncThunk("auth/googleLogin", async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    const userData = {
      refreshToken: user.refreshToken,
      uuid: user.uid,
      email: user?.email,
      fullName: user.displayName,
    };

    return userData;
  } catch (error: any) {
    const errorMessage = getAuthErrorMessage(error.code, error.message);
    throw new Error(errorMessage);
  }
});
