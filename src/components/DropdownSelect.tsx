import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type selectProps = {
  value: string,
  handleChange: (e: SelectChangeEvent) => void,
  options: string[]
}

function DropdownSelect(props: selectProps) {

  return (
    <div className="DropdownSelect">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select One</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.value}
            label={props.value}
            onChange={props.handleChange}
          >
            {props.options.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
    </div>
  );
}

export default DropdownSelect;
