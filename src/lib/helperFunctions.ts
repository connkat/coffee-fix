import { TipObj } from "./types";

export const issues = ["Pour Time", "Pressure", "Crema", "Taste"];

const options1 = ["Too slow", "Too fast"];
const options2 = ["Too high", "Too low"];
const options3 = ["Non existent"];
const options4 = ["Bitter", "Sour"];

const solutions = [
	{ id: 1, tip: "Not enough coffee", additionalInfo: "info" },
	{ id: 2, tip: "Your grind is too coarse", additionalInfo: "info" },
	{ id: 3, tip: "Your tamp is too light", additionalInfo: "info" },
	{ id: 4, tip: "Your temperature is too hot", additionalInfo: "info" },
	{ id: 5, tip: "Too much coffee", additionalInfo: "info" },
	{ id: 6, tip: "Your grind is too fine", additionalInfo: "info" },
	{ id: 7, tip: "Your tamp is too hard", additionalInfo: "info" },
	{
		id: 8,
		tip: "You can temperature is too low",
		additionalInfo: "info",
	},
	{ id: 9, tip: "Not enough coffee", additionalInfo: "info" },
	{ id: 10, tip: "Your grind is too coarse", additionalInfo: "info" },
	{ id: 11, tip: "Your tamp is too light", additionalInfo: "info" },
	{ id: 12, tip: "Your temperature is too hot", additionalInfo: "info" },
	{ id: 13, tip: "Too much coffee", additionalInfo: "info" },
	{ id: 14, tip: "Your grind is too fine", additionalInfo: "info" },
	{ id: 15, tip: "Your tamp is too hard", additionalInfo: "info" },
	{ id: 16, tip: "Your temperature is too low", additionalInfo: "info" },
	{ id: 17, tip: "Your grind is too fine", additionalInfo: "info" },
	{ id: 18, tip: "Your tamp is too hard.", additionalInfo: "info" },
	{ id: 19, tip: "Your grind is too coarse", additionalInfo: "info" },
	{ id: 20, tip: "Your tamp is too light", additionalInfo: "info" },
	{
		id: 21,
		tip: "Your grind is the wrong size",
		additionalInfo:
			"if your shot takes longer than 25 seconds to pull your grind is too fine. If it takes less than 20 seconds to pull, then the grinds are too coarse.",
		link: "https://www.roastycoffee.com/no-crema-on-espresso/",
	},
	{
		id: 22,
		tip: "Your beans are old",
		additionalInfo:
			"Stale coffee beans have been exposed to oxygen, thus breaking down the oils that give high-quality coffee its flavor.",
		link: "https://www.businessinsider.com/why-coffee-gets-stale-when-sitting-out-oxygenation-2015-9?r=MX&IR=T",
	},
	{ id: 23, tip: "Your grind is too fine", additionalInfo: "info" },
	{ id: 24, tip: "You are using too much coffee", additionalInfo: "info" },
	{ id: 25, tip: "Your grind is too coarse", additionalInfo: "info" },
	{
		id: 26,
		tip: "You are not using enough coffee",
		additionalInfo: "info",
	},
];

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

export function findSolutions(
	description: string,
	option: string
): Array<TipObj> {
	let output = obj;
	if (description === "Pour Time" && option === "Too fast") {
		return [
			{ id: 1, tip: "Not enough coffee", additionalInfo: "info" },
			{ id: 2, tip: "Your grind is too coarse", additionalInfo: "info" },
			{ id: 3, tip: "Your tamp is too light", additionalInfo: "info" },
			{ id: 4, tip: "Your temperature is too hot", additionalInfo: "info" },
		];
	} else if (description === "Pour Time" && option === "Too slow") {
		return [
			{ id: 5, tip: "Too much coffee", additionalInfo: "info" },
			{ id: 6, tip: "Your grind is too fine", additionalInfo: "info" },
			{ id: 7, tip: "Your tamp is too hard", additionalInfo: "info" },
			{
				id: 8,
				tip: "You can temperature is too low",
				additionalInfo: "info",
			},
		];
	} else if (description === "Pour Time" && option === "Too fast") {
		return [
			{ id: 9, tip: "Not enough coffee", additionalInfo: "info" },
			{ id: 10, tip: "Your grind is too coarse", additionalInfo: "info" },
			{ id: 11, tip: "Your tamp is too light", additionalInfo: "info" },
			{ id: 12, tip: "Your temperature is too hot", additionalInfo: "info" },
		];
	} else if (description === "Pour Time" && option === "Too slow") {
		output = [
			{ id: 13, tip: "Too much coffee", additionalInfo: "info" },
			{ id: 14, tip: "Your grind is too fine", additionalInfo: "info" },
			{ id: 15, tip: "Your tamp is too hard", additionalInfo: "info" },
			{ id: 16, tip: "Your temperature is too low", additionalInfo: "info" },
		];
	} else if (description === "Pressure" && option === "Too high") {
		output = [
			{ id: 17, tip: "Your grind is too fine", additionalInfo: "info" },
			{ id: 18, tip: "Your tamp is too hard.", additionalInfo: "info" },
		];
	} else if (description === "Pressure" && option === "Too low") {
		output = [
			{ id: 19, tip: "Your grind is too coarse", additionalInfo: "info" },
			{ id: 20, tip: "Your tamp is too light", additionalInfo: "info" },
		];
	} else if (description === "Crema") {
		output = [
			{
				id: 21,
				tip: "Your grind is the wrong size",
				additionalInfo:
					"if your shot takes longer than 25 seconds to pull your grind is too fine. If it takes less than 20 seconds to pull, then the grinds are too coarse.",
				link: "https://www.roastycoffee.com/no-crema-on-espresso/",
			},
			{
				id: 22,
				tip: "Your beans are old",
				additionalInfo:
					"Stale coffee beans have been exposed to oxygen, thus breaking down the oils that give high-quality coffee its flavor.",
				link: "https://www.businessinsider.com/why-coffee-gets-stale-when-sitting-out-oxygenation-2015-9?r=MX&IR=T",
			},
		];
	} else if (description === "Taste" && option === "Bitter") {
		output = [
			{ id: 23, tip: "Your grind is too fine", additionalInfo: "info" },
			{ id: 24, tip: "You are using too much coffee", additionalInfo: "info" },
		];
	} else if (description === "Taste" && option === "Sour") {
		output = [
			{ id: 25, tip: "Your grind is too coarse", additionalInfo: "info" },
			{
				id: 26,
				tip: "You are not using enough coffee",
				additionalInfo: "info",
			},
		];
	} else return [];

	return output;
}

export function findTip(id: string): string {
	const explanation = solutions.find((tip) => tip.id.toString() === id)!;
	return explanation.additionalInfo;
}
