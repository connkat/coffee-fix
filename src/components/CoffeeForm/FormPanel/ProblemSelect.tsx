import { FormEvent } from "react";

import { selectionOptions, issues } from "../../../lib/helperFunctions";
import SelectMenu from "./SelectMenu";
import "./formPanel.css";

type ProblemSelectProps = {
	issue: string;
	setIssue: (issue: string) => void;
	setDescription: (description: string) => void;
	handleSubmit: (e: FormEvent) => void;
	error?: string;
};

export default function ProblemSelect({
	issue,
	setDescription,
	setIssue,
	handleSubmit,
	error,
}: ProblemSelectProps) {
	const handleIssueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setIssue(e.target.value);
	};

	const handleDescriptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setDescription(e.target.value);
	};

	function updateIssueChange(e: React.ChangeEvent<HTMLSelectElement>) {
		setDescription("Select");
		handleIssueChange(e);
	}

	return (
		<div className="ProblemSelect">
			<form>
				<div className="ProblemSelect__form">
					<h3>My</h3>
					<SelectMenu options={issues} onChange={updateIssueChange} />
					<h3>is</h3>
					<SelectMenu
						options={selectionOptions(issue)}
						onChange={handleDescriptionChange}
					/>
				</div>
			</form>
			{!error || error === "" ? null : (
				<p className="ProblemSelect__error">{error}</p>
			)}
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
