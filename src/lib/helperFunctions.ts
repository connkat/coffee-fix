import data from "../data.json";
import { TipObj } from "./types";

export const issues = ["Pour Time", "Pressure", "Crema", "Taste"];

const options1 = ["Too slow", "Too fast"];
const options2 = ["Too high", "Too low"];
const options3 = ["Non existent"];
const options4 = ["Bitter", "Sour"];

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
		output = [findSolutionFromId(17), findSolutionFromId(18)];
	} else if (description === "Pressure" && option === "Too low") {
		output = [findSolutionFromId(19), findSolutionFromId(20)];
	} else if (description === "Crema") {
		output = [findSolutionFromId(21), findSolutionFromId(22)];
	} else if (description === "Taste" && option === "Bitter") {
		output = [findSolutionFromId(23), findSolutionFromId(124)];
	} else if (description === "Taste" && option === "Sour") {
		output = [findSolutionFromId(25), findSolutionFromId(26)];
	} else return [];

	return output;
}

export function findTip(id: string): string {
	const explanation = data.find((tip) => tip.id.toString() === id)!;
	return explanation.additionalInfo;
}
