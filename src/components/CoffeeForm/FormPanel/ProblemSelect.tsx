import { FormEvent } from "react";

import { selectionOptions, issues } from "../../../lib/helperFunctions";
import SelectMenu from "./SelectMenu";
import "./formPanel.css";

type ProblemSelectProps = {
	issue: string;
	setIssue: (issue: string) => void;
	setDescription: (description: string) => void;
	handleSubmit: (e: FormEvent) => void;
};

export default function ProblemSelect({
	issue,
	setDescription,
	setIssue,
	handleSubmit,
}: ProblemSelectProps) {
	const handleIssueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setIssue(e.target.value);
	};

	const handleDescriptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setDescription(e.target.value);
	};

	return (
		<div className="ProblemSelect">
			<form>
				<div className="ProblemSelect__form">
					<h3>My</h3>
					<SelectMenu options={issues} onChange={handleIssueChange} />
					<h3>is</h3>
					<SelectMenu
						options={selectionOptions(issue)}
						onChange={handleDescriptionChange}
					/>
				</div>
			</form>
			<button
				type="submit"
				className="ProblemSelect__button"
				onClick={handleSubmit}
			>
				What might be wrong?
			</button>
		</div>
	);
}
