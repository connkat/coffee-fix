import { useState } from "react";
import "./App.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function App() {
  const [issue, setIssue] = useState("");
  const [description, setDescription] = useState("");

  const handleIssueChange = (event: SelectChangeEvent) => {
    setIssue(event.target.value as string);
  };

  const handleDescriptionChange = (event: SelectChangeEvent) => {
    setDescription(event.target.value as string);
  };

  const options1 = ["Too long", "Too short"];
  const options2 = ["Too high", "Too low"];
  const options3 = ["Non existent"];
  const options4 = ["Bitter", "Sour"];

  const selectionOptions = (option: string) => {
    if (option === "pourTime") {
      return options1;
    }
    if (option === "pressure") {
      return options2;
    }
    if (option === "crema") {
      return options3;
    }
    if (option === "taste") {
      return options4;
    } else return [];
  };

  return (
    <div className="App">
      <h1>Coffee Fix</h1>
      <form>
        <p>My</p>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select One</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={issue}
            label={issue}
            onChange={handleIssueChange}
          >
            <MenuItem value="pourTime">Pour Time</MenuItem>
            <MenuItem value="pressure">Pressure</MenuItem>
            <MenuItem value="crema">Crema</MenuItem>
            <MenuItem value="taste">Taste</MenuItem>
          </Select>
        </FormControl>
        <p>is</p>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select One</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={description}
            label={description}
            onChange={handleDescriptionChange}
          >
            {selectionOptions(issue).map((option) => (
              <MenuItem value="description">{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
    </div>
  );
}

export default App;
