import React from "react";
import SignUpForm from "../SignUp";
import SignInForm from "../SignIn";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";
import Popsup from "../../Popsup";

export default function CredentialForm() {
  const [signUpState, setSignUpState] = React.useState(false);
  const signUpStatus = useSelector((state) => state.isLoggedIn.signUpStatus);
  const signInStatus = useSelector((state) => state.isLoggedIn.signInStatus);
  React.useEffect(() => {
    if (signUpStatus === "success") {
      setSignUpState(false);
    }
  }, [signUpStatus]);

  if (signUpState === false) {
    return (
      <div className="w-screen bg-gray-100">
        {signInStatus === "pending" && (
          <Popsup>
            <p className="text-xl font-light mb-2">Signing you in</p>
            <ReactLoading type={"spin"} color={"#fc531b"} className="mx-auto" />
          </Popsup>
        )}
        <div className="flex h-screen w-full justify-center bg-gray-100 pt-56">
          <div className="h-fit w-96 rounded-lg border-2 border-gray-200 bg-white p-6 shadow-lg">
            <SignInForm />
            <button
              type="button"
              onClick={() => setSignUpState((prev) => !prev)}
              className="mt-3 w-full rounded bg-orange-500 p-2 text-white hover:bg-orange-700"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-screen bg-gray-100">
        {signUpStatus === "pending" && (
          <Popsup>
            <ReactLoading type={"spin"} color={"#fc531b"} className="mx-auto" />
          </Popsup>
        )}
        <div className="flex h-screen w-full justify-center pt-40">
          <div className="h-fit w-96 rounded-lg border-2 border-gray-200 bg-white p-6 shadow-lg">
            <SignUpForm />
            <button
              type="button"
              onClick={() => setSignUpState((prev) => !prev)}
              className="mt-3 w-full rounded bg-orange-500 p-2 text-white hover:bg-orange-700"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }
}
