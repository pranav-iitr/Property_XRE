import axios from "axios";

export const loginAction = async (data) => {
  const response = await axios.post(
    `${import.meta.env.VITE_STRAPI_URL}/users/login/`,
    data
  );
  return response;
};

export const forgotPsswdAction = async (data) => {
  const response = await axios.post(
    `${import.meta.env.VITE_STRAPI_URL}/users/forgot_password/`,
    data
  );
  return response;
};

export const verifyOtpAction = async (data) => {
  const response = await axios.post(
    `${import.meta.env.VITE_STRAPI_URL}/users/forgot_password/`,
    data
  );
  return response;
};


export const sendProjectInfo = async (data) => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  const headers = {
    Authorization: `Bearer ${auth.access_token}`,
  };
  const response = await axios.post(
    `${import.meta.env.VITE_STRAPI_URL}/properties/projects/`,
    data,{
      headers: headers
    }
    
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
  const auth = JSON.parse(localStorage.getItem("auth"));
  const headers = {
    Authorization: `Bearer ${auth.access_token}`,
  };
  const response = await axios.post(
    `${import.meta.env.VITE_STRAPI_URL}/properties/owners/`,
    data,{
      headers: headers
    }
  );
  return response;
}

export const getAllProjects = async (page=1,filters="") => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  const headers = {
    Authorization: `Bearer ${auth.access_token}`,
  };
  const response = await axios.get(`${import.meta.env.VITE_STRAPI_URL}/properties/list?page=${page}${filters}`,{
    headers: headers
  });
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

export const getPersons = async (page=1) => {
  const user = JSON.parse(localStorage.getItem("auth"));
  const headers = {
    Authorization: `Bearer ${user.access_token}`,
  };
  const response = await axios.get(`${import.meta.env.VITE_STRAPI_URL}/properties/owners/?page=${page}`,{
    headers: headers
  });
  return response;
};

export const deletePerson = async (id) => {
  const user = JSON.parse(localStorage.getItem("auth"));
  const headers = {
    Authorization: `Bearer ${user.access_token}`,
  };
  const response = await axios.delete(`${import.meta.env.VITE_STRAPI_URL}/properties/owners/${id}`,{
    headers: headers
  });
  return response;
};

export const updatePerson = async (id, data) => {
  const user = JSON.parse(localStorage.getItem("auth"));
  const headers = {
    Authorization: `Bearer ${user.access_token}`,
  };
  const response = await axios.put(`${import.meta.env.VITE_STRAPI_URL}/properties/owners/${id}/`, data,{
    headers: headers
  });
  return response;
};

export const getProjectChoices = async () => {
  const user = JSON.parse(localStorage.getItem("auth"));
  const headers = {
    Authorization: `Bearer ${user.access_token}`,
  };
  const response = await axios.get(`${import.meta.env.VITE_STRAPI_URL}/properties/projects/`,{
    headers: headers
  });
  return response;
}

export const getUnitChoices = async (id) => {
  const user = JSON.parse(localStorage.getItem("auth"));
  const headers = {
    Authorization: `Bearer ${user.access_token}`,
  };
  const response = await axios.get(`${import.meta.env.VITE_STRAPI_URL}/properties/unit/?property=${id}`,{
    headers: headers
  });
  return response;
}