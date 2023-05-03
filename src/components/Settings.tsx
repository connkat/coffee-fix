import { FormEvent, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function Settings() {
	const [time, setTime] = useState(false);
	const [temp, setTemp] = useState(false);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setTime(!time);
		setTemp(!temp);
	};

	return (
		<div className="Settings">
			<FormGroup>
				<div className="checkboxes">
					<FormControlLabel
						control={<Checkbox checked={temp} />}
						label="Temp Control"
						onClick={() => {
							setTemp(!temp);
						}}
					/>
					<FormControlLabel
						control={<Checkbox checked={time} />}
						label="Time Control"
						onClick={() => {
							setTime(!time);
						}}
					/>
				</div>
			</FormGroup>
		</div>
	);
}

export default Settings;
