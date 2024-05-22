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
    `${import.meta.env.VITE_STRAPI_URL}/properties/projects/`,
    data
  );
  return response;
}

export const sendFloorInfo = async (data) => {
  const response = await axios.post(
    `${import.meta.env.VITE_STRAPI_URL}/properties/floors/`,
    data,
    
  );
  return response;
}

export const sendUnitInfo = async (data) => {
  const response = await axios.post(
    `${import.meta.env.VITE_STRAPI_URL}/properties/unit/`,
    data
  );
  return response;
}

export const sendPersonInfo = async (data) => {
  const response = await axios.post(
    `${import.meta.env.VITE_STRAPI_URL}/properties/owners/`,
    data
  );
  return response;
}

export const getAllProjects = async (page=1,filters="") => {
  const response = await axios.get(`${import.meta.env.VITE_STRAPI_URL}/properties/list?page=${page}${filters}`);
  return response;
}

export const getOneProject = async (id) => {
  const response = await axios.get(`${import.meta.env.VITE_STRAPI_URL}/properties/projects/${id}/`);
  return response;
}

export const getOneFloor = async (id) => {
  const response = await axios.get(`${import.meta.env.VITE_STRAPI_URL}/properties/floors/${id}/`);
  return response;
}

export const getOneUnit = async (id) => {
  const response = await axios.get(`${import.meta.env.VITE_STRAPI_URL}/properties/unit/${id}/`);
  return response;
}

export const getOnePerson = async (id) => {
  const response = await axios.get(`${import.meta.env.VITE_STRAPI_URL}/properties/persons/${id}/`);
  return response;
}


export const updateOneProject = async (data, id) => {
  const response = await axios.put(`${import.meta.env.VITE_STRAPI_URL}/properties/projects/${id}/`, data);
  return response;
}

export const updateOneFloor = async (data, id) => {
  const response = await axios.put(`${import.meta.env.VITE_STRAPI_URL}/properties/floors/${id}/`, data);
  return response;
}

export const updateOneUnit = async (data, id) => {
  const response = await axios.put(`${import.meta.env.VITE_STRAPI_URL}/properties/unit/${id}/`, data);
  return response;
}

export const updateOnePerson = async (data, id) => {
  const response = await axios.put(`${import.meta.env.VITE_STRAPI_URL}/properties/persons/${id}/`, data);
  return response;
}