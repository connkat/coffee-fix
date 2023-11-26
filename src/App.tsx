import { useState } from "react";

import "./App.css";
import CoffeeForm from "./components/CoffeeForm/CoffeeForm";
import LandingPage from "./components/LandingPage/LandingPage";
import TongueTip from "./components/TongueTip";

export default function App() {
	const [loading, setLoading] = useState(true);

	const hideMachine = () => {
		setLoading(false);
		console.log("this");
	};

	return (
		<div className="App">
			<div onClick={hideMachine}>
				{loading ? (
					<LandingPage />
				) : (
					<div className="FormBody">
						<CoffeeForm />
						<TongueTip />
					</div>
				)}
			</div>
		</div>
	);
}
