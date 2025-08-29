
function Conditional(props) {
  const isGoal = true;
  const stricker = null;
  // if(isGoal  ){
  //     return 'Goal'
  // } else {
  //     return 'Not goal'
  // }
  return (
    <div>
      {isGoal ? "Goal" : stricker ? "stricker exist" : "Not goal"}

      {/* {}
      <h1>GoalIsMissed</h1> */}
    </div>
  );
}

export default Conditional;
