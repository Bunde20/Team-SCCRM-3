import React, { useEffect, useState } from "react";
import Card from "./Card";
import cardAPI from "../utils/cardAPI";

export default function TradeOffer(props) {
  const [offeredCard, setOfferedCard] = useState({});
  const [seekingCard, setSeekingCard] = useState({});

  useEffect(() => {
    cardAPI
      .getOneCard(props.offer.offeredCardId)
      .then((res) => setOfferedCard(res.data[0]));

    cardAPI
      .getOneCard(props.offer.seekingCardId)
      .then((res) => setSeekingCard(res.data[0]));
  }, []);

  return (
    <section className="d-flex border m-5 p-5">
      <div>
        <h3>Offering</h3>
        <Card creature={offeredCard} />
      </div>
      <div>
        <h3>Seeking</h3>
        <Card creature={seekingCard} />
      </div>
    </section>
  );
}
