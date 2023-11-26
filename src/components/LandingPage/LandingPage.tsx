import CoffeeAnimation from "./CoffeeAnimation";
import TextAnimation from "./TextAnimation";

import "./landingPage.css";

function LandingPage() {
	return (
		<div className="LandingPage">
			<TextAnimation />
			<CoffeeAnimation />
			<div className="instructions">
				<h2>Pull your shot to begin</h2>
			</div>
		</div>
	);
}

export default LandingPage;
