import React, { useEffect, useState } from "react";
import AuthStack from "./AuthStack";
import StudentStack from "./StudentStack";
import TicketManStack from "./TicketManStack";
import { Auth, Hub } from "aws-amplify";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../redux/Reducers/user";

const root = () => {
  const { user } = useSelector((state) => state.user);

  const [grp, setGrp] = useState(null);

  const dispatch = useDispatch();

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });

      dispatch(
        Login({
          groups:
            authUser.signInUserSession.accessToken.payload["cognito:groups"],
          token: authUser.signInUserSession.refreshToken.token,
          user: authUser.attributes,
        })
      );
      setGrp(
        authUser.signInUserSession.accessToken.payload["cognito:groups"] || [
          "student",
        ]
      );
    } catch (e) {
      setGrp(null);
      dispatch(
        Login({
          groups: null,
          token: null,
          user: null,
        })
      );
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = (data) => {
      if (data.payload.event === "signIn" || data.payload.event === "signOut") {
        checkUser();
      }
    };

    Hub.listen("auth", listener);
    return () => Hub.remove("auth", listener);
  }, []);

  if (user === undefined) {
    return <Loader />;
  }
  if (user) {
    if (grp === null) {
      return <Loader />;
    }

    if (grp.includes("TicketChecker")) {
      return <TicketManStack />;
    }
    return <StudentStack />;
  } else {
    return <AuthStack />;
  }
};

export default root;
