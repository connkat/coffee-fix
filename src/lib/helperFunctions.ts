const options1 = ["Too long", "Too short"];
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
};

export function findSolution(description: string, option: string): string {
  if (description === "Pour Time" && option === "Too long") {
    return "Its too long"
  }
  if (description === "Pour Time" && option === "Too short") {
    return "Its too short"
  }
  if (description === "Pressure" && option === "Too high") {
    return "Its too high"
  }
  if (description === "Pressure" && option === "Too low") {
    return "Its too low"
  }
  if (description === "Crema") {
    return "More pressure"
  }
  if (description === "Taste" && option === "Bitter") {
    return "She's bitter"
  } 
  if (description === "Taste" && option === "Sour") {
    return "She's sour"
  }else return "Sorry, I don't have a solution for you";
}