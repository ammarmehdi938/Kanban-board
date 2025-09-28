import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";

const AddTodoButton = (props) => {
  //   const { data, updateTodo } = props;
  //   const [isEditing, setIsEditing] = useState(false);
  //   const handleEditing = () => {
  //     setIsEditing(true);
  //   };
  //   const handleSave = (e) => {
  //     const inputValue = e.target.value;
  //     const newData = [
  //       ...data,
  //       {
  //         value: inputValue,
  //         id: Math.random().toString(16).slice(2),
  //         isDone: false,
  //       },
  //     ];
  //     updateTodo(newData);
  //   };
  //   return (
  //     <div>
  //       {isEditing ? (
  //         <TextField
  //           size="xl"
  //           autoFocus
  //           placeholder="Add Todo"
  //           inputProps={{ style: { color: "white" } }}
  //           style={{
  //             height: "80px",
  //             width: "500px",
  //             marginLeft: "100px",
  //             marginTop: "50px",
  //             backgroundColor: "#434343",
  //             border: "2x solid #434343",
  //             borderRadius: "10px",
  //             "&:hover": {
  //               backgroundColor: "#F7C767",
  //             },
  //           }}
  //           onKeyDown={(e) => {
  //             if (e.keyCode === 13) {
  //               handleSave(e);
  //             }
  //             if (e.keyCode === 27) {
  //               setIsEditing(false);
  //             }
  //           }}
  //         />
  //       ) : (
  //         <Button
  //           backgroundColor="#252525"
  //           variant="contained"
  //           sx={{
  //             width: "500px",
  //             height: "80px",
  //             marginTop: "50px",
  //             marginLeft: "100px",
  //             borderRadius: "10px",
  //             backgroundColor: "#434343",
  //           }}
  //           onClick={handleEditing}
  //         >
  //           Add ToDo
  //         </Button>
  //       )}
  //     </div>
  //   );
};
export default AddTodoButton;
