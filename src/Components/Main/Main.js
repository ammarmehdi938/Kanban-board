import MainHeader from "./MainHeader";
import AddTodoButton from "./AddTodoButton";
import TaskCard from "./TaskCard";
import Header from "./Header";
import Columns from "./Columns";
import { STATUS } from "../SideBar/Utils";

const Main = (props) => {
  const { data, updateTodo, setOpen } = props;

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
        backgroundColor: "#0D1117",
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.05) 4px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 4px, transparent 1px)
        `,
        backgroundSize: "60px 60px", // size of the grid cells
        color: "#fff", // optional: text color
      }}
    >
      <Header setOpen={setOpen} />

      <MainHeader />

      <AddTodoButton data={data} updateTodo={updateTodo} />

      <Columns columns={STATUS} data={data} updateTodo={updateTodo} />
    </div>
  );
};
export default Main;
