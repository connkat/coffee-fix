const options1 = ["Too slow", "Too long"];
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

export function findSolution(description: string, option: string): string {
  if (description === "Pour Time" && option === "Too long") {
    return "Not enough coffee OR your grind is too coarse OR your tamp is too light.";
  }
  if (description === "Pour Time" && option === "Too slow") {
    return "Too much coffee OR your grind is too fine OR your tamp is too hard.";
  }
  if (description === "Pressure" && option === "Too high") {
    return "Your grind is too fine OR your tamp is too hard.";
  }
  if (description === "Pressure" && option === "Too low") {
    return "Your grind is too coarse OR your tamp is too light.";
  }
  if (description === "Crema") {
    return "Your grind is too coarse or your beans are old.";
  }
  if (description === "Taste" && option === "Bitter") {
    return "You've overextracted: either your grind is too fine or you are using too much coffee.";
  }
  if (description === "Taste" && option === "Sour") {
    return "You've underextracted: either your grind is too coarse or you are not using enough coffee.";
  } else return "Sorry, I don't have a solution for you";
}
