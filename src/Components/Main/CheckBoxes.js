import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const CheckBoxes = (props) => {
  const { selected, setSelected, handleCheckBox } = props;

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={selected === "Is-Initialize"}
            onChange={handleCheckBox("Is-Initialize")}
          />
        }
        label="Is-Initialize"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={selected === "Is-Finalize"}
            onChange={handleCheckBox("Is-Finalize")}
          />
        }
        label="Is-Finalize"
      />
    </FormGroup>
  );
};

export default CheckBoxes;
