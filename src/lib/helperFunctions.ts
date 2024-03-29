import data from "../data.json";
import { TipObj } from "./types";

export const issues = ["Pour Time", "Pressure", "Crema", "Taste"];

const options1 = ["Select", "Too slow", "Too fast"];
const options2 = ["Select", "Too high", "Too low"];
const options3 = ["Select", "Non existent"];
const options4 = ["Select", "Bitter", "Sour"];

export function selectionOptions(option: string): Array<string> {
	if (option === "Pour Time") {
		return options1;
	}
	if (option === "Pressure") {
		return options2;
	}
	if (option === "Crema") {
		return options3;
	}
	if (option === "Taste") {
		return options4;
	} else return [];
}

let obj: TipObj[] = [];

export function findSolutionFromId(id: number): TipObj {
	const result = data.find((tip) => tip.id === id);
	if (result) {
		return result;
	} else {
		return {
			id: 0,
			tip: "No tip found",
			additionalInfo: "explanation coming soon!",
		};
	}
}

export function findSolutions(
	description: string,
	option: string
): Array<TipObj> {
	let output = obj;
	if (description === "Pour Time" && option === "Too fast") {
		output = [
			findSolutionFromId(1),
			findSolutionFromId(2),
			findSolutionFromId(3),
			findSolutionFromId(4),
		];
	} else if (description === "Pour Time" && option === "Too slow") {
		output = [
			findSolutionFromId(5),
			findSolutionFromId(6),
			findSolutionFromId(7),
			findSolutionFromId(8),
		];
	} else if (description === "Pressure" && option === "Too high") {
		output = [findSolutionFromId(6), findSolutionFromId(7)];
	} else if (description === "Pressure" && option === "Too low") {
		output = [findSolutionFromId(2), findSolutionFromId(3)];
	} else if (description === "Crema") {
		output = [
			findSolutionFromId(10),
			findSolutionFromId(11),
			findSolutionFromId(12),
		];
	} else if (description === "Taste" && option === "Bitter") {
		output = [findSolutionFromId(6), findSolutionFromId(5)];
	} else if (description === "Taste" && option === "Sour") {
		output = [findSolutionFromId(2), findSolutionFromId(1)];
	} else return [];

	return output;
}

export function findSolution(id: string): string {
	const explanation = data.find((tip) => tip.id.toString() === id)!;
	return explanation.additionalInfo;
}

export const generalTips = [
	"Pull time should be between 25-32 seconds.",
	"Tamp should be an even 30 lbs of pressure.",
	"Shot weight should be 2x the weight of your dry grinds.",
	"The hotter the water, the quicker it is to extract compounds such as oils, acids, and caffeine. Each of these substances has a different impact on the coffee’s flavor, and at a higher temperature, it’s tougher to control the rate of extraction.",
];
