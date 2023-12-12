import React, { useEffect, useState } from "react";

import cardAPI from "../../utils/cardAPI";
import userAPI from "../../utils/userAPI";
import Card from "../../components/Card";
import PurchaseBtn from "../../components/Marketplace/PurchaseBtn";
import BackButton from "../../components/Buttons/BackButton";
import MarketplaceNav from "../../components/Marketplace/MarketplaceNav";
import Timer from "../../components/Timer";
import "./Marketplace.css";

export default function Marketplace() {
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [userCoins, setUserCoins] = useState(0);
  const [timerReachedZero, setTimerReachedZero] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await cardAPI.getAllCards();
        const allCards = response.data;

        const shuffledCards = allCards.sort(() => Math.random() - 0.5);

        const selectedCards = shuffledCards.slice(0, 4);

        setCards(selectedCards);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();

    userAPI.getOneUser(localStorage.getItem("currentUser")).then((res) => {
      setCurrentUser(res.data[0]);
      setUserCoins(res.data[0].coins);
    });

    if (timerReachedZero) {
      // Reset the timerReachedZero
      setTimerReachedZero(false);

      // Fetch new cards after timer expires
      fetchCards();
    }
  }, [timerReachedZero]);

  return (
    <>
      <div className="col-12 marketplace-bg">
        <div className="col-12 mx-auto text-center">
          <BackButton text="Back to Home" />
        </div>
        <h1 className="text-center align-items-center justify-content-center homeTitle">
          Buy
        </h1>
        <MarketplaceNav />
        <h3 className="text-center paragraph-text text-white fs-1 timer-text">COINS: {userCoins}</h3>
        <div className="d-flex justify-content-center flex-row flex-wrap pb-4">
          {cards.map((creature, index) => (
            <div key={index}>
              <Card creature={creature} key={creature._id} />
              {userCoins >= creature.coinCost && (
                <PurchaseBtn
                  currentUser={currentUser}
                  creature={creature}
                  userCoins={userCoins}
                  setUserCoins={setUserCoins}
                  key={`PurchaseBtn_${creature._id}`}
                />
              )}
            </div>
          ))}
          <Timer setTimerReachedZero={setTimerReachedZero} />
        </div>
      </div>
    </>
  );
}
