import React from "react";

const Counter = (props) => {
  const { name } = props;

  const [votes, setVotes] = React.useState(0);

  const handleIncrement = () => {
    setVotes(votes + 1);
  };
  const handleDecrement = () => {
    setVotes(votes - 1);
  };

  return (
    <div style={{ backgroundColor: "grey", margin: "10px" }}>
      <h2> {name} </h2>
      <h3> {`Votes: ${votes}`} </h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleIncrement}> Increment </button>
        <button onClick={handleDecrement}> Decrement </button>
      </div>
    </div>
  );
};

export default Counter;
