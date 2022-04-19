import React from "react";
import { useDispatch } from "react-redux";

import { decrement, increment } from "./redux/ducks/counter";

const Counter = ({ name }) => {
  const [votes, setVotes] = React.useState(0);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
    setVotes(votes + 1);
  };
  const handleDecrement = () => {
    dispatch(decrement());
    setVotes(votes - 1);
  };

  return (
    <div style={{ backgroundColor: "grey", margin: "10px" }}>
      <h2>{name}</h2>
      <h3>{`Votes: ${votes}`}</h3>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleIncrement}> Increment </button>
        <button onClick={handleDecrement}> Decrement </button>
      </div>
    </div>
  );
};

export default Counter;
