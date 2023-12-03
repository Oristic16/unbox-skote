import axios from "axios";

const API_URL = process.env.REACT_APP_API_CORS;

export const FetchAxiosPost = (url, data, token) => {
  const baseURL = API_URL + `${url}`;
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}`,
    },
  };

  return axios
    .post(baseURL, data, config)
    .then(response => {
      return response.data.insertedId;
    })
    .catch(error => {
      console.error("Error:", error);
      throw error;
    });
};

export const FetchAxiosPut = (url, data, token) => {
  const baseURL = API_URL + `${url}`;
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .put(baseURL, data, config)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
};

export const FetchAxiosGet = (url, token) => {
  const baseURL = API_URL + `${url}`;
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}`,
    },
  };

  return axios
    .get(baseURL, config)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error("Error:", error);
      throw error;
    });
};

export const FetchAxiosFile = (url, token, file) => {
  const baseURL = API_URL + `${url}`;
  const formData = new FormData();
  formData.append("file", file);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .post(baseURL, formData, config)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
};
