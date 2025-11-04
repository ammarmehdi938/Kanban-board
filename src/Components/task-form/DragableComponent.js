import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { Box } from "@mui/material";

const DragableComponent = (props) => {
  const { id } = props;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  console.log("id", id);

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    width: 120,
    height: 120,
    background: "#61dafb",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "grab",
  };

  return (
    <Box ref={setNodeRef} sx={style} {...listeners} {...attributes}>
      Drag Me
    </Box>
  );
};
export default DragableComponent;
