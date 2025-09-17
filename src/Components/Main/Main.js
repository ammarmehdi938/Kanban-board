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
        overflowY: "hidder",
        overflowX: "hidden",
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
