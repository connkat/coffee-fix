
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormHelperText } from '@mui/material';

type selectProps = {
  value: string;
  handleChange: (e: SelectChangeEvent) => void;
  options: string[];
  error: boolean;
};

function DropdownSelect(props: selectProps) {

  return (
    <div className="DropdownSelect">
      <FormControl error={props.error} style={{ width: "200px" }}>
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
        {props.error && <FormHelperText>Select a value</FormHelperText>}
      </FormControl>
    </div>
  );
}

export default DropdownSelect;
