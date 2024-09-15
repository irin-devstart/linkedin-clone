import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { auth } from "./config/firebase";
import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./pages/Feed/Feed";
import Header from "./pages/Header/Header";
import Sidebar from "./pages/Sidebar/Sidebar";
import Login from "./pages/User/Login";
import Widgets from "./pages/Widgets/Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in

        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          {/* Sidebar */}
          <Sidebar />
          {/* Feed */}
          <Feed />

          {/* widgets */}
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
