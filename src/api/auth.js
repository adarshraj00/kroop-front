import axios from "axios";
export default {
  loginAdmin: ({ id }) => {
    console.log(id);
    return axios.post(
      `${process.env.BACKEND_URL}/api/auth/login-admin`,
      {
        id,
      },
      { withCredentials: true }
    );
  },
  loginUser: ({ id, password }) => {
    return axios.post(
      `${process.env.BACKEND_URL}/api/auth/login-user`,
      {
        id,
        password,
      },
      { withCredentials: true }
    );
  },
  registerUser: ({ id, password }) => {
    return axios.post(`/api/auth/register`, {
      id,
      password,
    });
  },
  logout: () => {
    return axios.post(`${process.env.BACKEND_URL}/api/auth/logout`);
  },
  getState: () => {
    return axios.post(`${process.env.BACKEND_URL}/api/auth/get-state`, {
      withCredentials: true,
    });
  },
};
