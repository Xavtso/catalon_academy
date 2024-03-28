import axios from "axios";

export function getAuthErrorMessage(errorCode: string, errorMessage: string) {
  switch (errorCode) {
    case "auth/weak-password":
      return "The password is too weak.";
    case "auth/email-already-in-use":
      return "This email address is already in use by another account.";
    case "auth/invalid-email":
      return "This email address is invalid.";
    case "auth/operation-not-allowed":
      return "Email/password accounts are not enabled.";
    default:
      return errorMessage;
  }
}


const validationApiUrl =
  "https://emailvalidation.abstractapi.com/v1?api_key=4beedc836f9e40f4ad06a6a919d4570e&email=";
export async function validateMail(email: string) {
  let isValid = false;
  try {
    const response = await axios.get(`${validationApiUrl}${email}`);
    isValid = response.data.is_valid_format.value;
  } catch (error:any) {
      console.log(error);
      isValid = error.response.status === 422
  }
  return isValid;
}