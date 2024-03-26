import {
  // getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import axios from "axios";
import { auth } from "configs/Firebase";

const validationApiUrl =
"https://emailvalidation.abstractapi.com/v1?api_key=4beedc836f9e40f4ad06a6a919d4570e&email=";
const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

export async function registerUser(email: string, password: string) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
    })
    .catch((err) => {
      const errorMessage = err.message;
      const errorCode = err.code;

      // setError(true);

      switch (errorCode) {
        case "auth/weak-password":
          console.log("The password is too weak.");
          break;
        case "auth/email-already-in-use":
          console.log(
            "This email address is already in use by another account.",
          );
          break;
        case "auth/invalid-email":
          console.log("This email address is invalid.");
          break;
        case "auth/operation-not-allowed":
          console.log("Email/password accounts are not enabled.");
          break;
        default:
          console.log(errorMessage);
          break;
      }
    });
}
export async function loginUser(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error.message);
      // ..
    });
}

export async function googleLogin() {
  await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      console.log(token);
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      console.log(error.message);
    });
}

export async function validateMail(email: string) {
  let isValid = false;
  try {
    const response = await axios.get(`${validationApiUrl}${email}`);
    isValid = response.data.is_free_email.value;
  } catch (error) {
    console.log(error);
  }
  return isValid;
}

