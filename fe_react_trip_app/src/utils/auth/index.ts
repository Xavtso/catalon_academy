
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


