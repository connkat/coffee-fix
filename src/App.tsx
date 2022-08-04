import { FormEvent, useState } from "react";
import "./App.css";
import DropdownSelect from "./components/DropdownSelect";
import { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import { findSolution, selectionOptions } from "./lib/helperFunctions";

function App() {
  const [issue, setIssue] = useState("");
  const [description, setDescription] = useState("");
  const [solution, setSolution] = useState("");
  const [error, setError] = useState(false);

  const handleIssueChange = (e: SelectChangeEvent) => {
    setIssue(e.target.value);
  };

  const handleDescriptionChange = (e: SelectChangeEvent) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(!description)
    setSolution(findSolution(issue, description));
  };

  return (
    <div className="App">
      <h1>Coffee Fix</h1>
      <form>
        <p>My</p>
        <DropdownSelect
          value={issue}
          handleChange={handleIssueChange}
          options={["Pour Time", "Pressure", "Crema", "Taste"]}
          error={error}
        />
        <p>is</p>
        <DropdownSelect
          value={description}
          handleChange={handleDescriptionChange}
          options={selectionOptions(issue)}
          error={error}
        />
      </form>
      <Button
        type="submit"
        color="info"
        variant="outlined"
        onClick={handleSubmit}
      >
        What do I do?
      </Button>
      <p>{solution}</p>
    </div>
  );
}

export default App;
