import { useState, FormEvent } from "react";

import FormPanel from "./FormPanel/FormPanel";
import InfoPanel from "./InfoPanel/InfoPanel";
import TipPanel from "./TipPanel/TipPanel";

import { findSolutions, findSolution } from "../../lib/helperFunctions";

import "./coffeeForm.css";

export default function CoffeeForm() {
	const [issue, setIssue] = useState("");
	const [description, setDescription] = useState("");
	const [solutions, setSolutions] = useState([
		{
			id: 0,
			tip: "",
			additionalInfo: "",
		},
	]);
	const [explanation, setExplanation] = useState("");

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setSolutions(findSolutions(issue, description));
	};

	const handleExplanation = (e: React.MouseEvent<HTMLElement>) => {
		const target = e.target as HTMLButtonElement;

		setExplanation(findSolution(target.value));
	};
	return (
		<div className="CoffeeForm">
			<div className="CoffeeForm__header">
				<h1>Coffee Fix: </h1>
				<h4>Find out how to fix each pull of espresso</h4>
			</div>
			<div className="CoffeeForm__body">
				<div className="CoffeeForm__left-panel">
					<InfoPanel />
				</div>
				<div className="CoffeeForm__centre-panel">
					<FormPanel
						issue={issue}
						setDescription={setDescription}
						setIssue={setIssue}
						handleSubmit={handleSubmit}
						solutions={solutions}
						handleExplanation={handleExplanation}
					/>
				</div>
				<div className="CoffeeForm__right-panel">
					<TipPanel explanation={explanation} />
				</div>
			</div>
		</div>
	);
}
