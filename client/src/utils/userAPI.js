import axios from "axios";

const baseURL = "";

const getAllUsers = () => {
  return axios.get(`/api/users`);
};

const getOneUser = (userId) => {
  return axios.get(`/api/users/${userId}`);
};

const createNewUser = (username, email, password) => {
  return axios.post(`/api/users`, {
    username: username,
    email: email,
    password: password,
  });
};

const updateUserCoins = (userId, coins) => {
  return axios.put(`/api/users/${userId}`, {
    coins: coins,
  });
};

const updateUserTeam = (userId, teamArray) => {
  return axios.put(`/api/users/${userId}`, {
    team: teamArray,
  })
}

const addUserCard = (userId, cardId) => {
  return axios.put(`/api/users/${userId}/cards/${cardId}`);
};

const deleteUserCard = (userId, cardId) => {
  return axios.put(`/api/users/${userId}/cards/${cardId}`);
};

export default {
  getAllUsers,
  getOneUser,
  createNewUser,
  addUserCard,
  deleteUserCard,
  updateUserCoins,
  updateUserTeam
};
