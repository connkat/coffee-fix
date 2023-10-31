import { FormEvent, useState } from "react";
import "../App.css";
import { SelectChangeEvent } from "@mui/material/Select";
import DropdownSelect from "./DropdownSelect";
import Button from "@mui/material/Button";

import Infotip from "./Infotip";
import Modal from "./Modal";

import { findSolutions, selectionOptions } from "../lib/helperFunctions";

function CoffeeForm() {
	const [issue, setIssue] = useState("");
	const [description, setDescription] = useState("");
	const [solutions, setSolutions] = useState([
		{
			tip: "",
			additionalInfo: "",
		},
	]);
	const [error, setError] = useState(false);

	const handleIssueChange = (e: SelectChangeEvent) => {
		setIssue(e.target.value);
	};

	const handleDescriptionChange = (e: SelectChangeEvent) => {
		setDescription(e.target.value);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setError(!description);
		setSolutions(findSolutions(issue, description));
	};

	return (
		<div className="Form">
			<form>
				<div className="form">
					<h3>My</h3>
					<DropdownSelect
						value={issue}
						handleChange={handleIssueChange}
						options={["Pour Time", "Pressure", "Crema", "Taste"]}
						error={error}
					/>
					<h3>is</h3>
					<DropdownSelect
						value={description}
						handleChange={handleDescriptionChange}
						options={selectionOptions(issue)}
						error={error}
					/>
				</div>
			</form>
			<Button
				type="submit"
				color="info"
				variant="outlined"
				onClick={handleSubmit}
			>
				What is wrong?
			</Button>
			<div className="solution">
				<Modal tips={solutions} />
				{/* <Infotip tips={solutions} /> */}
			</div>
		</div>
	);
}

export default CoffeeForm;
