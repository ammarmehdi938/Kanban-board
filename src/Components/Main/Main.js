import MainHeader from "./MainHeader";
import AddTodoButton from "./AddTodoButton";

import Header from "./Header";
import Columns from "./Columns";
import { STATUS } from "../SideBar/Utils";

const Main = (props) => {
  const { data, updateTodo, setOpen, columns, setColumns } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0b1018ff",
        width: "100%",
        height: "100vh",
        overflowY: "hidden",
        overflowX: "hidden",
        minHeight: "100vh",
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.05) 4px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 4px, transparent 1px)
        `,
        backgroundSize: "60px 60px", // size of the grid cells
        color: "#fff", // optional: text color
      }}
    >
      <span
        style={{
          marginTop: "10px",
        }}
      >
        <Header setOpen={setOpen} />
      </span>

      <MainHeader />

      <AddTodoButton data={data} updateTodo={updateTodo} />

      <Columns
        data={data}
        updateTodo={updateTodo}
        columns={columns}
        setColumns={setColumns}
      />
    </div>
  );
};
export default Main;
