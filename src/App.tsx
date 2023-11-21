import { useState } from "react";

import "./App.css";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import CoffeeForm from "./components/CoffeeForm";

import tongueChart from "./images/tongue.jpeg";

function App() {
	// const [temp, setTemp] = useState(false);
	const [tongue, setTongue] = useState(false);

	const onTongueClick = () => {
		setTongue(!tongue);
	};

	return (
		<div className="App">
			<h1>Coffee Fix</h1>
			<div className={tongue ? "tongue-chart" : "hidden"}>
				<button className="tongue-btn" onClick={onTongueClick}>
					X
				</button>
				<img src={tongueChart} alt="tongue chart" className="tongue-img" />
			</div>
			<div className="element">
				<div className="controls">
					{/* <h4>Can you control the:</h4>
				<FormGroup>
					<FormControlLabel
						className="checkbox"
						control={<Checkbox checked={temp} />}
						label="Temperature"
						onClick={() => {
							setTemp(!temp);
						}}
					/>
				</FormGroup> */}
				</div>
				<CoffeeForm />
				<div>
					Not sure how to tell the difference between bitter and sour taste?
					Check out <button onClick={onTongueClick}>this chart</button>!
				</div>
			</div>
		</div>
	);
}

export default App;
