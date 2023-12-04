import axios from "axios";

const baseURL = "http://localhost:3000/api";

const getAllOffers = () => {
  return axios.get(`${baseURL}/trade/offers`);
};

const getOneTradeOffer = (offerId) => {
  return axios.get(`${baseURL}/trade/offers/${offerId}`);
};

const createNewTradeOffer = (userId, offeredCardId, seekingCardId) => {
  return axios.post(`${baseURL}/trade/offers`, {
    userId: userId,
    offeredCardId: offeredCardId,
    seekingCardId: seekingCardId,
  });
};

const deleteOneTradeOffer = (offerId) => {
  return axios.delete(`${baseURL}/trade/offers/${offerId}`);
};

const completeTrade = (user1Id, card1Id, user2Id, card2Id) => {
  return axios.put(
    `${baseURL}/api/trade/${user1Id}/${card1Id}/${user2Id}/${card2Id}`
  );
};

export default {
  getAllOffers,
  getOneTradeOffer,
  createNewTradeOffer,
  deleteOneTradeOffer,
  completeTrade,
};
