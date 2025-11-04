import React from "react";
import { useDraggable, useDroppable, DragOverlay } from "@dnd-kit/core";
import { Box } from "@mui/material";

export function Draggable({ id, children }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: id,
  });
  const style = {
    // transform: transform
    //   ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
    //   : undefined,
    opacity: isDragging ? 1 : 1,
    cursor: "grab",
    transition: "opacity 0.2s ease",
  };

  return (
    <Box ref={setNodeRef} {...listeners} {...attributes} style={style}>
      {children}
    </Box>
  );
}
export function Dropapble({ id, children }) {
  const { setNodeRef, isOver } = useDroppable({ id });

  const style = {
    backgroundColor: isOver ? "#1B2635" : undefined,
  };
  return (
    <Box ref={setNodeRef} style={style}>
      {children}
    </Box>
  );
}
