import axios from "axios";
import { SignUpFormType } from "types";
const validationApiUrl =
  "https://emailvalidation.abstractapi.com/v1?api_key=4beedc836f9e40f4ad06a6a919d4570e&email=";

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

export async function registerUser(data: SignUpFormType) {
 
}
