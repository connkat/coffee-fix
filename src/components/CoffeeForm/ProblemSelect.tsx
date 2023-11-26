import { FormEvent, useState } from "react";

import Solution from "./Solution";

import { selectionOptions, issues } from "../../lib/helperFunctions";
import SelectMenu from "./SelectMenu";
import { TipObj } from "../../lib/types";

type ProblemSelectProps = {
	issue: string;
	setIssue: (issue: string) => void;
	setDescription: (description: string) => void;
	handleSubmit: (e: FormEvent) => void;
	solutions: TipObj[];
};

export default function ProblemSelect({
	issue,
	setDescription,
	setIssue,
	handleSubmit,
	solutions,
}: ProblemSelectProps) {
	const [error, setError] = useState(false);

	const handleIssueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setIssue(e.target.value);
	};

	const handleDescriptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setDescription(e.target.value);
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
			</div>
		</div>
	);
}
