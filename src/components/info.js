import React from "react";
import "./info.css"
import Banner from "./banner";

const Info = () => {

	return(
		<>
		<Banner 
			mainHeader={"INFO"}
			secondaryHeader={"Tietoja sivusta"} 
		/>
		<div id="info">
			Sivusto hakee uutisten otsikon, linkin sekä uutiskuvan osoitteen uutismedioiden verkkosivuilta.
			Tiedot haetaan sivujen API:sta tai tarvittaessa web scraping -tekniikoilla.
		</div>
		</>
	)
}

export default Info