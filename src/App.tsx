import { useState } from "react";

import "./App.css";
import CoffeeForm from "./components/CoffeeForm";
import LandingPage from "./components/LandingPage/LandingPage";

import tongueChart from "./images/tongue.jpeg";

function App() {
	const [tongue, setTongue] = useState(false);
	const [loading, setLoading] = useState(true);

	const hideMachine = () => {
		setLoading(false);
		console.log("this");
	};

	const onTongueClick = () => {
		setTongue(!tongue);
	};

	return (
		<div className="App">
			<div onClick={hideMachine}>
				{loading ? (
					<LandingPage />
				) : (
					<>
						<div className="FormBody">
							<CoffeeForm />
							<div className="tongue-tip" style={{ top: "75%" }}>
								Not sure how to tell the difference between bitter and sour
								taste? Check out{" "}
								<button onClick={onTongueClick}>this chart</button>!
							</div>
							<div className={tongue ? "tongue-chart" : "hidden"}>
								<button className="tongue-btn" onClick={onTongueClick}>
									X
								</button>
								<img
									src={tongueChart}
									alt="tongue chart"
									className="tongue-img"
								/>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default App;
