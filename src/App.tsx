import { useState } from "react";

import "./App.css";
import CoffeeAnimation from "./components/CoffeeAnimation";
import CoffeeForm from "./components/CoffeeForm";
import TextAnimation from "./components/TextAnimation";

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
					<>
						<TextAnimation />
						<CoffeeAnimation />
						<div className="instructions">
							<h2>Pull your shot to begin</h2>
						</div>
					</>
				) : (
					<div>
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
						<div className="element">
							<div className="controls"></div>
							<CoffeeForm />
							<div>
								Not sure how to tell the difference between bitter and sour
								taste? Check out{" "}
								<button onClick={onTongueClick}>this chart</button>!
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
