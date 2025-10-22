import { useDispatch, useSelector } from "react-redux";
// import { useSelector } from "react-redux";

import { increment, openTaskDrawer } from "../../Store/Actions/TodoActions";

const Increment = () => {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* <h1>Counter: {count}</h1> */}
      <button onClick={() => openTaskDrawer(null, dispatch)}>
        Increment{count}
      </button>
    </div>
  );
};

export default Increment;
