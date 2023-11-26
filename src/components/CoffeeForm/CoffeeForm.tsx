import { useState, FormEvent } from "react";

import CoffeeMug from "./CoffeeMug";
import ProblemSelect from "./ProblemSelect";
import TongueTip from "./TongueTip";

import { findSolutions } from "../../lib/helperFunctions";

import "./coffeeForm.css";
import Infotip from "./Infotip";

export default function CoffeeForm() {
	const [issue, setIssue] = useState("");
	const [description, setDescription] = useState("");
	const [solutions, setSolutions] = useState([
		{
			tip: "",
			additionalInfo: "",
		},
	]);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setSolutions(findSolutions(issue, description));
	};

	return (
		<div className="CoffeeForm">
			<div className="CoffeeForm__header">
				<h1>Coffee Fix: </h1>
				<h4>Find out how to fix each pull of espresso</h4>
			</div>
			<div className="CoffeeForm__body">
				<div className="CoffeeForm__left-panel">
					<CoffeeMug />
					<TongueTip />
				</div>
				<div className="CoffeeForm__centre-panel">
					<ProblemSelect
						issue={issue}
						setDescription={setDescription}
						setIssue={setIssue}
						handleSubmit={handleSubmit}
						solutions={solutions}
					/>
				</div>
				<div className="CoffeeForm__right-panel">
					<h2>Tips</h2>
					<Infotip explanations={solutions} />
				</div>
			</div>
		</div>
	);
}
