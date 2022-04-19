import React from "react";
import { useSelector } from "react-redux";

import Counter from "./Counter";
import "./styles.css";

const voters = ["Brian Ivan Lutaaya", "Isaac Ssembatya", "Emmanuel Mukisa"];

export default function App() {
  const count = useSelector((state) => state.counter.count);

  return (
    <div className="App">
      <h1>Redux made easy</h1>
      <h2>Total votes: {count}</h2>

      {voters && voters.map((voter) => <Counter key={voter} name={voter} />)}
    </div>
  );
}
