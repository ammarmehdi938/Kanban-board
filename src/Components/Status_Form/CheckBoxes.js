import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const CheckBoxes = ({ values, setFieldValue }) => {
  // const { newColumn, setNewColumn } = props;

  const handleCheckBox = (event) => {
    const { name, checked } = event.target;

    // setNewColumn({
    //   isInitial: name === "isInitial" ? checked : false,
    //   isFinal: name === "isFinal" ? checked : false,
    // });
  };
  // console.log(newColumn);

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={values.isInitial}
            // onChange={handleCheckBox}
            onChange={(e) => setFieldValue("isInitial", e.target.checked)}
            name="isInitial"
            // value={values.isInitial}
          />
        }
        label="Is Initial"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={values.isFinal}
            onChange={(e) => setFieldValue("isFinal", e.target.checked)}
            name="isFinal"
            // value={values}
          />
        }
        label="Is Final"
      />
    </FormGroup>
  );
};
export default CheckBoxes;
