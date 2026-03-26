"use client";

import { useState } from "react";

import CoffeeForm from "../src/components/CoffeeForm/CoffeeForm";
import LandingPage from "../src/components/LandingPage/LandingPage";

export default function Page() {
	const [loading, setLoading] = useState(true);

	const hideMachine = () => {
		setLoading(false);
	};

	return (
		<div className="App">
			<div onClick={hideMachine}>
				{loading ? (
					<LandingPage />
				) : (
					<div className="FormBody">
						<CoffeeForm />
					</div>
				)}
			</div>
		</div>
	);
}
