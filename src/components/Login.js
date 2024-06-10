import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import ValidateSignin from "../utils/ValidateFormSignin";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSiginin, setIsSignin] = useState(true);
  const [error, seterror] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const displayName = useRef(null);

  const toggleSignin = () => {
    setIsSignin(!isSiginin);
  };

  const handleSubmit = () => {
    const validationResult = ValidateSignin(
      email.current.value,
      password.current.value
    );

    // console.log(email.current.value);
    // console.log(password.current.value);
    console.log(validationResult);
    seterror(validationResult);

    if (validationResult) return;

    if (!isSiginin) {
      //sign up logic

      const auth = getAuth();

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: displayName.current.value

          }).then(() => {
            // Profile updated!
            // ...\
            const { uid, email,displayName } = user; 
            dispatch(addUser({ uid: uid, email: email,displayName:displayName }));

          }).catch((error) => {
            // An error occurred
            // ...
          });






        //   console.log(user);
        //   const { uid, email } = user;
        // dispatch(addUser({ uid: uid, email: email }));
          navigate("/browser");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterror(errorCode + " : " + errorMessage);
          // ..
        });
    } else {
      // sign in logic

      const auth = getAuth();
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const { uid, email,displayName } = user;
          dispatch(addUser({ uid: uid, email: email,displayName:displayName}));
          navigate("/browser");
          // ...

          console.log("sucesss");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterror(errorCode + " : " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix loogo"
        />
      </div>
      <form
        className="p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSiginin ? "Sign In" : "Sign Up"}
        </h1>
        {!isSiginin && (
          <input
            type="text"
            placeholder="Name"
            ref={displayName}
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="email address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full  bg-gray-700 rounded-lg"
        />
        {error && <h4 className="p-4 text-red-700 font-bold">{error}</h4>}
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleSubmit}
        >
          {isSiginin ? "Sign In" : "Sign Up"}
        </button>

        <p className="p-4 cursor-pointer" onClick={toggleSignin}>
          {isSiginin
            ? "New to Netflix? Sign Up Now"
            : "Already a User? Sign In Now"}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
