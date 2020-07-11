import React from "react";
import { Route, Redirect } from "react-router-dom";

//==========================================================//
// It uses the same API as <Route />                        //
// It renders the Route and passes the props through        //
// It checks if user is auth; if so, render "component";    //
// if not, redirect to /login                               //
//===========================================================//

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = window.localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          return <Component {...props} />;
        } else {
          console.log("redirecting!");
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
