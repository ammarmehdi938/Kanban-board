import { useEffect } from "react";

function User(props) {
  const { counter } = props;

  useEffect(() => {
    console.log("count is updated", counter);

    // return console.log("component is unmoted");
  }, []);

  return (
    <div>
      <h1>User Component counder {counter}</h1>
    </div>
  );

}

export default User;
