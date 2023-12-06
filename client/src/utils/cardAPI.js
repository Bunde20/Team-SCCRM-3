import axios from "axios";

const baseURL = ""

const getAllCards = () => {
  return axios.get(`/api/cards`);
};

const getOneCard = (cardId) => {
  return axios.get(`/api/cards/${cardId}`);
}

export default { getAllCards, getOneCard };
