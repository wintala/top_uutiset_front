import React from "react";
import "./news-displayer.css"
import hsLogo from "../logos/hs_logo.png"
import ilLogo from "../logos/il_logo.png"
import isLogo from "../logos/is_logo.png"
import mtvLogo from "../logos/mtv_logo.png"
import yleLogo from "../logos/yle_logo.png"
import alLogo from "../logos/al_logo.png"
import tsLogo from "../logos/ts_logo.png"

const Displayer = ({newsData, withImages, order, loading}) => {
  
  if (loading) {
    return(
      <div className="loading-wrap">
        <div>Haetaan uutisia</div>
        <div className="dot-loading">
          <div></div>
          <div></div>
          <div></div>
          <div></div> 
        </div>
      </div>
    )
  }

	const logos = {
		hs: {logo: hsLogo, size: "28px", top: "10px"},
		il: {logo: ilLogo, size: "30px", top: "10px"},
		mtv: {logo: mtvLogo, size: "32px", top: "5px"},
		yle: {logo: yleLogo, size: "48px", top: "0px"},
		is: {logo: isLogo, size: "48px", top: "0"},
    al: {logo: alLogo, size: "28px", top: "10px"},
    ts: {logo: tsLogo, size: "34px", top: "5px"}
	}

  const textStyle = (article) => ({fontSize: window.innerWidth > 600 ? article.title.length > 150 ? "16px": "18px" : article.title.length > 150 ? "14px" : "16px"})

  return(
    <div id="displayer" style={withImages ? null: {alignItems: "start"}}>
    {order.map(source => 
      <div className="source-wrap" key={source} style={withImages ? null : {height: "auto", paddingTop: "50px"}}>
				<img className="source-image" 
					src={logos[source].logo} 
					style={{height: logos[source].size, top: logos[source].top}} 
					alt={`${source} logo`}>
				</img>
        <ol className="news-list">
          {newsData[source].map(article => 
          <li className="article-wrap" key={article.title}>
            <a className="article" href={article.url}>
            {withImages ? 
						<div className="article-image" style={{backgroundImage: `url(${article.picture})`}}></div> : null}
            <div className="article-title" style={withImages ? textStyle(article) : null}>{console.log()||article.title}</div>
            </a>
          </li>
          )}
        </ol>
      </div>
    )}
    </div>
  )


}

export default Displayer;
