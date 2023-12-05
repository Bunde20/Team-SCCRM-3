import React, { useEffect, useState } from "react";
import Card from "./Card";
import cardAPI from "../utils/cardAPI";
import userAPI from "../utils/userAPI";

export default function TradeOffer(props) {
  const [offeredCard, setOfferedCard] = useState({});
  const [seekingCard, setSeekingCard] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    cardAPI
      .getOneCard(props.offer.offeredCardId)
      .then((res) => setOfferedCard(res.data[0]));

    cardAPI
      .getOneCard(props.offer.seekingCardId)
      .then((res) => setSeekingCard(res.data[0]));

    userAPI.getOneUser(props.offer.userId).then((res) => setUser(res.data[0]));
  }, []);

  return (
    <>
      <section className="border rounded m-5 p-5 bg-light">
        <h2>{`${user.username} wants to trade!`}</h2>
        <div className="d-flex">
          <div>
            <h3 className="text-center">Offering</h3>
            <Card creature={offeredCard} />
          </div>
          <div>
            <h3 className="text-center">Seeking</h3>
            <Card creature={seekingCard} />
          </div>
        </div>
      </section>
    </>
  );
}
