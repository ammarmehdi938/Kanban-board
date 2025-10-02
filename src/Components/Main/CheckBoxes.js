import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const CheckBoxes = (props) => {
  const { newColumn, setNewColumn } = props;

  const handleCheckBox = (event) => {
    const { name, checked } = event.target;

    setNewColumn({
      isInitial: name === "isInitial" ? checked : false,
      isFinal: name === "isFinal" ? checked : false,
    });
  };
  console.log(newColumn);

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={newColumn.isInitial}
            onChange={handleCheckBox}
            name="isInitial"
          />
        }
        label="Is Initial"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={newColumn.isFinal}
            onChange={handleCheckBox}
            name="isFinal"
          />
        }
        label="Is Final"
      />
    </FormGroup>
  );
};
export default CheckBoxes;
