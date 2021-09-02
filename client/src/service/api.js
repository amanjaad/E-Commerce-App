import axios from "axios";

const url = "http://localhost:8000";

export const authenticateSignup = async (user) => {
  try {
    return await axios.post(`${url}/signup`, user);
  } catch (error) {
    console.log("error while calling signup api", error);
  }
};

export const authenticateLogin = async (user) => {
  try {
    return await axios.post(`${url}/login`, user);
  } catch (error) {
    console.log("Error While Calling Login API", error);
  }
};

export const payUsingPaytm = async (data) => {
  try {
    let response = await axios.post(`${url}/payment`, data);
    return response.data;
  } catch (error) {
    console.log("Error whiling calling paytm Api", error);
  }
};
