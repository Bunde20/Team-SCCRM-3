import React, { useState, useEffect } from "react";
import MarketplaceNav from "../../components/Marketplace/MarketplaceNav";
import BackButton from "../../components/Buttons/BackButton";
import Card from "../../components/Card";
import CreateOfferBtn from "../../components/Marketplace/CreateOffer/CreateOfferBtn";
import userAPI from "../../utils/userAPI";

export default function MyDeck() {
  const [userCards, setUserCards] = useState([]);
  const [userName, setUserName] = useState("");


  useEffect(() => {
    userAPI.getOneUser(localStorage.getItem("currentUser")).then((res) => {
      setUserCards(res.data[0].cards);
      setUserName(res.data[0].username);
    });
  }, []);

  return (
    <>
      <div className="col-12 marketplace-bg">
        <div className="col-12 mx-auto text-center">
          <BackButton text='Back to Home' />
        </div>
        <h1 className="text-center align-items-center justify-content-center homeTitle">
          {userName}'s Deck
        </h1>
        <MarketplaceNav />
        <div className="d-flex flex-wrap justify-content-center pb-4">
          {userCards.map((creature, index) => (
              <div key={index}>
                <Card key={`creature_${creature._id}`} creature={creature} />
                <CreateOfferBtn key={`offerBtn_${creature._id}`} offeredCreature={creature}/>
              </div>
          ))}
        </div>
      </div>
    </>
  );
}
