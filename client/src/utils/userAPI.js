import axios from "axios";

const baseURL = "http://localhost:3000/api"

const getAllUsers = () => {
    return axios.get(`${baseURL}/users`);
}

const getOneUser = (userId) => {
    return axios.get(`${baseURL}/users/${userId}`);
}

const createNewUser = (username, email, password) => {
    return axios.post(`${baseURL}/users`, {
        username: username,
        email: email,
        password: password
    });
}

const addUserCard = (userId, cardId) => {
    return axios.put(`${baseURL}/users/${userId}/cards/${cardId}`)
}

const deleteUserCard = (userId, cardId) => {
    return axios.put(`${baseURL}/users/${userId}/cards/${cardId}`)
}

export default {getAllUsers, getOneUser, createNewUser, addUserCard, deleteUserCard }