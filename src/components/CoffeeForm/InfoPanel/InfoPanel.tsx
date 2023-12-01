import CoffeeMug from "./CoffeeMug";
import TongueTip from "./TongueTip";

import "./infoPanel.css";

export default function InfoPanel() {
	return (
		<div className="InfoPanel">
			<CoffeeMug />
			<TongueTip />
		</div>
	);
}
