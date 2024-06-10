import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import appStore from "../utils/appStore";
import { removeUser } from "../utils/userSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user);

  const handleSignout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error"); //need to make error page
      });
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b  from-black z-10 w-screen flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos
/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053
c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && (
        <div className="flex p-2">
          <div>
        
          <img
            src="https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg "
            className="w-12 h-12 "
          />
            <h4>{user.displayName}</h4>
            </div>
          
          <button className="font-bold text-white" onClick={handleSignout}>
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
