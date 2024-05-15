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

export const getAllProjects = async () => {
  const response = await axios.get(`${import.meta.env.VITE_STRAPI_URL}/projects`);
  return response;
}

export const getOneProject = async (id) => {
  const response = await axios.get(`${import.meta.env.VITE_STRAPI_URL}/projects/${id}`);
  return response;
}

export const getOneFloor = async (id) => {
  const response = await axios.get(`${import.meta.env.VITE_STRAPI_URL}/floors/${id}`);
  return response;
}

export const getOneUnit = async (id) => {
  const response = await axios.get(`${import.meta.env.VITE_STRAPI_URL}/units/${id}`);
  return response;
}

export const getOnePerson = async (id) => {
  const response = await axios.get(`${import.meta.env.VITE_STRAPI_URL}/persons/${id}`);
  return response;
}


export const updateOneProject = async (data, id) => {
  const response = await axios.put(`${import.meta.env.VITE_STRAPI_URL}/projects/${id}`, data);
  return response;
}

export const updateOneFloor = async (data, id) => {
  const response = await axios.put(`${import.meta.env.VITE_STRAPI_URL}/floors/${id}`, data);
  return response;
}

export const updateOneUnit = async (data, id) => {
  const response = await axios.put(`${import.meta.env.VITE_STRAPI_URL}/units/${id}`, data);
  return response;
}

export const updateOnePerson = async (data, id) => {
  const response = await axios.put(`${import.meta.env.VITE_STRAPI_URL}/persons/${id}`, data);
  return response;
}