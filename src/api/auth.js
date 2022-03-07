import axios from "axios";
export default {
  loginAdmin: ({ id }) => {
    console.log(id);
    return axios.post(
      `https://book-management0.herokuapp.com/api/auth/login-admin`,
      {
        id,
      },
      { withCredentials: true }
    );
  },
  loginUser: ({ id, password }) => {
    return axios.post(
      `https://book-management0.herokuapp.com/api/auth/login-user`,
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
    return axios.post(`https://book-management0.herokuapp.com/api/auth/logout`);
  },
  getState: () => {
    return axios.post(
      `https://book-management0.herokuapp.com/api/auth/get-state`,
      {
        withCredentials: true,
      }
    );
  },
};
