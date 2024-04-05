import axios from "axios";

export const loginAction = async (data) => {
  const response = await axios.post(
    `${import.meta.env.VITE_STRAPI_URL}/auth/local`,
    data
  );
  return response;
};

export const forgotPsswdAction = async (data) => {
  const response = await axios.post(
    `${import.meta.env.VITE_STRAPI_URL}/auth/forgot-password`,
    data
  );
  return response;
};


export const sendProjectInfo = async (data) => {
  const response = await axios.post(
    `${import.meta.env.VITE_STRAPI_URL}/projects`,
    data
  );
  return response;
}

export const sendFloorInfo = async (data) => {
  const response = await axios.post(
    `${import.meta.env.VITE_STRAPI_URL}/floors`,
    data
  );
  return response;
}

export const sendUnitInfo = async (data) => {
  const response = await axios.post(
    `${import.meta.env.VITE_STRAPI_URL}/units`,
    data
  );
  return response;
}

export const sendPersonInfo = async (data) => {
  const response = await axios.post(
    `${import.meta.env.VITE_STRAPI_URL}/persons`,
    data
  );
  return response;
}