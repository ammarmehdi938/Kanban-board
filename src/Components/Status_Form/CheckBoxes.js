import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const CheckBoxes = ({ values, setFieldValue }) => {
  const handleChange = (field) => {
    if (field === "isInitial") {
      setFieldValue("isInitial", true);
      setFieldValue("isFinal", false);
    } else if (field === "isFinal") {
      setFieldValue("isInitial", false);
      setFieldValue("isFinal", true);
    }
  };
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={values.isInitial}
            onChange={() => handleChange("isInitial")}
            name="isInitial"
          />
        }
        label="Is Initial"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={values.isFinal}
            onChange={() => handleChange("isFinal")}
            name="isFinal"
          />
        }
        label="Is Final"
      />
    </FormGroup>
  );
};
export default CheckBoxes;
