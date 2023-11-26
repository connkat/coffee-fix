import { FormEvent, useState } from "react";

import Infotip from "./Infotip";
import Solution from "./Solution";

import {
	findSolutions,
	selectionOptions,
	issues,
} from "../../lib/helperFunctions";
import SelectMenu from "./SelectMenu";

export default function ProblemSelect() {
	const [issue, setIssue] = useState("");
	const [description, setDescription] = useState("");
	const [solutions, setSolutions] = useState([
		{
			tip: "",
			additionalInfo: "",
		},
	]);
	const [error, setError] = useState(false);

	const handleIssueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setIssue(e.target.value);
	};

	const handleDescriptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setDescription(e.target.value);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setError(!description);
		setSolutions(findSolutions(issue, description));
	};

	return (
		<div className="ProblemSelect">
			<form>
				<div className="form">
					<h3>My</h3>
					<SelectMenu options={issues} onChange={handleIssueChange} />
					<h3>is</h3>
					<SelectMenu
						options={selectionOptions(issue)}
						onChange={handleDescriptionChange}
					/>
				</div>
			</form>
			<button type="submit" color="info" onClick={handleSubmit}>
				What is wrong?
			</button>
			<div className="solution">
				<Solution solutions={solutions} />
				<Infotip explanations={solutions} />
			</div>
		</div>
	);
}
