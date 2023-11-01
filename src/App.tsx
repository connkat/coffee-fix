import { useState } from "react";

import "./App.css";

{/* import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox"; */}
import CoffeeForm from "./components/CoffeeForm";

function App() {
	// const [temp, setTemp] = useState(false);

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
		</div>
	);
}

export default App;
