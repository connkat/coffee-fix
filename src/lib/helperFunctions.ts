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

export function findSolutions(
	description: string,
	option: string
	// temp: boolean
): Array<TipObj> {
	let output = obj;
	if (description === "Pour Time" && option === "Too fast") {
		return [
			{
				tip: "Not enough coffee",
				additionalInfo: "test",
			},
			{ tip: "Your grind is too coarse", additionalInfo: "" },
			{ tip: "Your tamp is too light", additionalInfo: "" },
			{ tip: "Your temperature is too hot", additionalInfo: "" },
		];
	} else if (description === "Pour Time" && option === "Too slow") {
		return [
			{ tip: "Too much coffee", additionalInfo: "" },
			{ tip: "Your grind is too fine", additionalInfo: "" },
			{ tip: "Your tamp is too hard", additionalInfo: "" },
			{
				tip: "You can temperature is too low",
				additionalInfo: "",
			},
		];
	} else if (description === "Pour Time" && option === "Too fast") {
		return [
			{ tip: "Not enough coffee", additionalInfo: "" },
			{ tip: "Your grind is too coarse", additionalInfo: "" },
			{ tip: "Your tamp is too light", additionalInfo: "" },
			{ tip: "Your temperature is too hot", additionalInfo: "" },
		];
	} else if (description === "Pour Time" && option === "Too slow") {
		output = [
			{ tip: "Too much coffee", additionalInfo: "" },
			{ tip: "Your grind is too fine", additionalInfo: "" },
			{ tip: "Your tamp is too hard", additionalInfo: "" },
			{ tip: "Your temperature is too low", additionalInfo: "" },
		];
	} else if (description === "Pressure" && option === "Too high") {
		output = [
			{ tip: "Your grind is too fine", additionalInfo: "" },
			{ tip: "Your tamp is too hard.", additionalInfo: "" },
		];
	} else if (description === "Pressure" && option === "Too low") {
		output = [
			{ tip: "Your grind is too coarse", additionalInfo: "" },
			{ tip: "Your tamp is too light", additionalInfo: "" },
		];
	} else if (description === "Crema") {
		output = [
			{
				tip: "Your grind is the wrong size",
				additionalInfo:
					"if your shot takes longer than 25 seconds to pull your grind is too fine. If it takes less than 20 seconds to pull, then the grinds are too coarse.",
				link: "https://www.roastycoffee.com/no-crema-on-espresso/",
			},
			{
				tip: "Your beans are old",
				additionalInfo:
					"Stale coffee beans have been exposed to oxygen, thus breaking down the oils that give high-quality coffee its flavor.",
				link: "https://www.businessinsider.com/why-coffee-gets-stale-when-sitting-out-oxygenation-2015-9?r=MX&IR=T",
			},
		];
	} else if (description === "Taste" && option === "Bitter") {
		output = [
			{ tip: "Your grind is too fine", additionalInfo: "" },
			{ tip: "You are using too much coffee", additionalInfo: "" },
		];
	} else if (description === "Taste" && option === "Sour") {
		output = [
			{ tip: "Your grind is too coarse", additionalInfo: "" },
			{ tip: "You are not using enough coffee", additionalInfo: "" },
		];
	} else return [];

	return output;
}
