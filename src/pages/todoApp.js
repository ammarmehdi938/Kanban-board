import SideBAR from "../Components/SideBar/SideBar";
import Main from "../Components/Main/Main";
import { Box } from "@mui/material";
import { useState } from "react";

const TodoApp = (props) => {
  const [todos, setTodos] = useState([]);
  const [open, setOpen] = useState(false)



  return (
    <Box display="flex">

      <SideBAR data={todos} updateTodo={setTodos} open={open} setOpen={setOpen} />

      {/* <MyLists /> */}
      <Main data={todos} updateTodo={setTodos} open={open} setOpen={setOpen} />
      {/* <SideBar /> */}
    </Box>
  );
};

export default TodoApp;
