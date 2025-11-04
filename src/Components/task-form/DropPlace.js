import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { Box } from "@mui/material";

const DropPlace = (props) => {
  const { id } = props;
  const { isOver, setNodeRef } = useDroppable({ id });
  console.log("id", id);
  const style = {
    width: 200,
    height: 200,
    backgroundColor: isOver ? "#19bb84" : "#233044",
    border: "2px dashed #19bb84",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  };
  return (
    <Box ref={setNodeRef} sx={style}>
      {isOver ? "Release to drop" : ""}
    </Box>
  );
};
export default DropPlace;
