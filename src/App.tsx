import { useState } from "react";

import "./App.css";

<<<<<<< Updated upstream
{/* import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox"; */}
=======
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
>>>>>>> Stashed changes
import CoffeeForm from "./components/CoffeeForm";

function App() {
	// const [temp, setTemp] = useState(false);
	const [tongue, setTongue] = useState(false);

	const onTongueClick = () => {
		setTongue(!tongue);
	};

	return (
		<div className="App">
			<h1>Coffee Fix</h1>
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
			{/* <div className="tongue-chart">
				Not sure how to tell the difference between bitter and sour taste? Check out <button onClick={onTongueClick}>this chart</button>!
				<img className="tongue-img" src={} alt="tongue chart" />
			</div> */}
		</div>
	);
}

export default App;
