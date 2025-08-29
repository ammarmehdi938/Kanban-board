import MainHeader from "./MainHeader";
import AddTodoButton from "./AddTodoButton";
import TaskCard from "./TaskCard";
import Header from "./Header";

const Main = (props) => {
  const { data, updateTodo, setOpen } = props;

  return (
    <div style={{ backgroundColor: "#233044", width: '100%', height: '100vh', }}>
      <div style={{ marginLeft: '75px' }}>
        <Header setOpen={setOpen} />

        <MainHeader />

        <AddTodoButton data={data} updateTodo={updateTodo} />

        {data.length &&
          data.map((item, index) => {
            return <TaskCard data={data} item={item} updateTodo={updateTodo} />;
          })}
        <TaskCard />
      </div>
    </div>
  );
};

export default Main;
