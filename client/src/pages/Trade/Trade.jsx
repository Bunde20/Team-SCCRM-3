import React, { useEffect, useState } from "react";
import tradeAPI from "../../utils/tradeAPI";
import "./Trade.css";
import TradeOffer from "../../components/TradeOffer";
import MarketplaceNav from "../../components/MarketplaceNav";
import BackButton from "../../components/BackButton/BackButton";

export default function Trade(props) {
  const [tradeOffers, setTradeOffers] = useState([]);

  useEffect(() => {
    tradeAPI.getAllOffers().then((res) => setTradeOffers(res.data));
  }, []);

  return (
    <div className="col-12 marketplace-bg">
      <div className="col-12 mx-auto text-center">
        <BackButton />
      </div>
      <h1 className="text-center align-items-center justify-content-center homeTitle">
        Trade
      </h1>
      <MarketplaceNav />
      <div className="d-flex flex-wrap justify-content-center">
        {tradeOffers.map((offer, index) => (
          <TradeOffer offer={offer} key={index} />
        ))}
      </div>
    </div>
  );
}