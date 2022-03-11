
import hsLogo from "../logos/hs_logo.png"
import ilLogo from "../logos/il_logo.png"
import isLogo from "../logos/is_logo.png"
import mtvLogo from "../logos/mtv_logo.png"
import yleLogo from "../logos/yle_logo.png"
import alLogo from "../logos/al_logo.png"
import tsLogo from "../logos/ts_logo.png"

import "./decoration-slider.css"

const Slider = ({indexData}) => {

	const logos = ["is", "yle", "il", "hs", "mtv", "al", "ts"]

	const logoAdjustments = {
		hs: {logo: hsLogo, size: "28px", top: "10px"},
		il: {logo: ilLogo, size: "30px", top: "10px"},
		mtv: {logo: mtvLogo, size: "32px", top: "5px"},
		yle: {logo: yleLogo, size: "48px", top: "0px"},
		is: {logo: isLogo, size: "48px", top: "0"},
    al: {logo: alLogo, size: "28px", top: "10px"},
    ts: {logo: tsLogo, size: "34px", top: "5px"}
	}

	return(
		<>
		<div className="decoration-slider">
			{logos.concat(logos).map((l, i) => 
			<div key={i}>
				<img style={{height: logoAdjustments[l].size}} src={logoAdjustments[l].logo} alt="logo"></img>
			</div>
			)}
		</div>
		<div className="index-slider">
			{indexData ? indexData.concat(indexData).map((d, i) => 
			<div key={i}>
				<span>
					{d.name + ":"}
				</span>
				<span style={{color: d.changePercent < 0 ? "rgb(255, 77, 94)" : "rgb(37, 250, 94)", fontWeight: "bold"}}>
					{d.changePercent.toFixed(2)  + "%"}
				</span>
			</div>
			) : null}
		</div>
		</>
	)
}

export default Slider