import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { auth, databaseURL } from "configs/Firebase";
import { getAuthErrorMessage } from "utils/auth";
import { userDataType } from "types";
import axios from "axios";

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

      await registerUserData(user);
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
    } catch (error: any) {
      const errorMessage = getAuthErrorMessage(error.code, error.message);
      throw new Error(errorMessage);
    }
  },
);

async function registerUserData(user: User) {
  //  [user.uid] = {
  //     uid: user.uid,
  //     email: user.email,
  //     fullName: user.displayName,
  //     refreshToken: user.refreshToken,
  //     accessToken: user.getIdToken(),
  //     role: isAdmin(user.email),

  // };
  try {
    const userObject = {
      uid: user.uid,
      email: user.email,
      refreshToken: user.refreshToken,
      role: isAdmin(user.email),
    };

    const data = {
      [`${user.uid}`]: userObject,
    };

    const response = await axios.post(`${databaseURL}/users.json`, data);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

function isAdmin(email: string | null) {
  const role = email?.endsWith("admin.trip.app.com") ? "admin" : "user";
  return role;
}
