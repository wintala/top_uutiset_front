import React, { useState } from "react";
import "./mainpage.css"
import Displayer from "./news-displayer";
import Banner from "./banner";
import OrderManager from "./orderManager";
import useLocalStorage from "../hooks/useLocalStorage";

const Mainpage = ({newsData, loading}) => {
  const [displayOrder, setDisplayOrder] = useLocalStorage("orderPreference", ["is", "yle", "il", "hs", "mtv", "al", "ts"], true)
  const [showOrderManager, setShoworderManager] = useState(false)
  const [showImages, setShowImages] = useState(true)


  return(
    <>
    <Banner 
      mainHeader={"TOP5 UUTISET"}
      secondaryHeader={"Suomen suurimpien uutismedioiden luetuimmat uutiset kootusti"} 
    />
    {showOrderManager ? 
    <>
      <OrderManager setDisplayOrder={setDisplayOrder} displayOrder={displayOrder}/>
      <button className="order-button" onClick={() => setShoworderManager(false)}>Valmis</button>
    </> :
      <button className="order-button" onClick={() => setShoworderManager(true)}>Hallitse järjestystä</button>
    }
    <button className="image-display-button" onClick={() => setShowImages(s => !s)}>
      {showImages ? "Piilota kuvat" : "Näytä kuvat"}
		</button>
    <Displayer newsData={newsData} withImages={showImages} order={displayOrder} loading={loading}/>
    </>
  )

}

export default Mainpage;
