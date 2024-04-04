import axios from "axios";

export const loginAction = async (data) => {
  const response = await axios.post(
    "http://localhost:1337/api/auth/local",
    data
  );
  return response;
};

export const forgotPsswdAction = async (data) => {
  const response = await axios.post(
    "http://localhost:1337/api/auth/forgot-password",
    data
  );
  return response;
};
