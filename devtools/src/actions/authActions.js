import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

// Register user
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(
      res => history.push("/login")
      //  console.log(res.data)
    )
    .catch(
      err =>
        // this.setState({
        // errors:
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      // })
      // console.log(err.response.data.username)
    );
};

//login-get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      //save to localstorage
      const { token } = res.data;
      // set token to localstorage
      localStorage.setItem("jwtToken", token);
      //set token to auth header
      setAuthToken(token);
      //decode token to get uswer data

      const decoded = jwt_decode(token);
      // set current user

      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      // console.log(err.response)
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};


// log user out
export const logoutUser = () => dispatch => {
    // remove token from localstorage
    localStorage.removeItem('jwtToken');
    // remove the auth header
    setAuthToken(false);
    // set the current user to { } which will also set isAuthenticated to false
    dispatch(setCurrentUser({}))
}