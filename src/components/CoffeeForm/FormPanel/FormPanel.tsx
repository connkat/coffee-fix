import { FormEvent } from "react";

import Solution from "./Solution";
import ProblemSelect from "./ProblemSelect";

import { TipObj } from "../../../lib/types";

import "./formPanel.css";

type FormPanelProps = {
	issue: string;
	setIssue: (issue: string) => void;
	setDescription: (description: string) => void;
	handleSubmit: (e: FormEvent) => void;
	solutions: TipObj[];
	handleExplanation: (e: React.MouseEvent<HTMLElement>) => void;
};

export default function FormPanel({
	issue,
	setDescription,
	setIssue,
	handleSubmit,
	solutions,
	handleExplanation,
}: FormPanelProps) {
	return (
		<div className="FormPanel">
			<ProblemSelect
				issue={issue}
				setDescription={setDescription}
				setIssue={setIssue}
				handleSubmit={handleSubmit}
			/>
			{solutions[0]?.id !== 0 ? (
				<Solution solutions={solutions} handleExplanation={handleExplanation} />
			) : null}
		</div>
	);
}
