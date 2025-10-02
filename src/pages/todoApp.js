import SideBAR from "../Components/SideBar/SideBar";
import Main from "../Components/Main/Main";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { generateTasks, STATUS } from "../Components/SideBar/Utils";

const TodoApp = (props) => {
  const [todos, setTodos] = useState([]);
  const [open, setOpen] = useState(false);
  const [columns, setColumns] = useState(STATUS);
  // const [loader, setLoader] = useState(false);
  // useEffect(() => {
  //   fetchTasks();
  // }, []);

  // const fetchTasks = async () => {
  //   setLoader(true);
  //   const response = await generateTasks(1000);
  //   setTodos(response);
  //   setLoader(false);
  // };

  return (
    <Box display="flex">
      <SideBAR
        data={todos}
        updateTodo={setTodos}
        open={open}
        setOpen={setOpen}
      />

      {/* <MyLists /> */}
      {/* {loader ? (
        <div>Loading...</div>
      ) : ( */}
      <Main
        data={todos}
        updateTodo={setTodos}
        open={open}
        setOpen={setOpen}
        columns={columns}
        setColumns={setColumns}
      />
      {/* )} */}
      {/* <SideBar /> */}
    </Box>
  );
};

export default TodoApp;
