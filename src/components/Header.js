import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        nevigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        nevigate("/browse");
      } else {
        dispatch(removeUser());
        nevigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  }

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
        className="w-56"
      />
      {user && (
        <div className="flex p-2">
          <button className="bg-purple-500 px-3 m-auto py-2 rounded-md text-white" onClick={handleGptSearch}>{showGptSearch ? 'HomePage': 'GPTSearch'}</button>
          <img src={user?.photoURL} alt="userIcon" className="w-12 h-12 " />
          <button className="font-bold text-white" onClick={handleSignout}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
