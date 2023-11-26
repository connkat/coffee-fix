import CoffeeMug from "./CoffeeMug";
import ProblemSelect from "./ProblemSelect";
import TongueTip from "./TongueTip";

import "./coffeeForm.css";

export default function CoffeeForm() {
	return (
		<div className="CoffeeForm">
			<div className="CoffeeForm__left-panel">
				<CoffeeMug />
				<TongueTip />
			</div>
			<div className="CoffeeForm__centre-panel">
				<ProblemSelect />
			</div>
			<div className="CoffeeForm__right-panel">Tips</div>
		</div>
	);
}
