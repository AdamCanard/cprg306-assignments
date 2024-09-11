"use client";
import BasePage from "../basepage";
import { useUserAuth } from "./_utils/auth_context";
import { useEffect } from "react";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const SignIn = async () => {
    await gitHubSignIn();
  };

  const SignOut = async () => {
    await firebaseSignOut();
  };

  return (
    <BasePage>
      <div className="flex gap-2">
        <div onClick={SignIn}> Login</div>
        <div onClick={SignOut}> Signout</div>
      </div>
    </BasePage>
  );
}
