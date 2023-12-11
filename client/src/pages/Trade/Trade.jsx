import React, { useEffect, useState } from "react";
import tradeAPI from "../../utils/tradeAPI";
import userAPI from "../../utils/userAPI";
import TradeCarousel from "../../components/Marketplace/TradeCarousel";
import MarketplaceNav from "../../components/Marketplace/MarketplaceNav";
import BackButton from "../../components/Buttons/BackButton";
import "./Trade.css";

export default function Trade() {
  const [tradeOffers, setTradeOffers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    tradeAPI.getAllOffers().then((res) => setTradeOffers(res.data));
    userAPI.getOneUser(localStorage.getItem("currentUser")).then((res) => setCurrentUser(res.data[0]));
  }, []);

  return (
    <div className="col-12 marketplace-bg">
      <div className="col-12 mx-auto text-center">
        <BackButton text='Back to Home' />
      </div>
      <h1 className="text-center align-items-center justify-content-center homeTitle">Trade</h1>
      <MarketplaceNav />
      <div className="d-flex flex-wrap justify-content-center">
        <TradeCarousel tradeOffers={tradeOffers} currentUser={currentUser} />
      </div>
    </div>
  );
}
