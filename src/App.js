import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Counter from "./Counter";
import { getUser } from "./redux/ducks/user";

import "./styles.css";

const voters = ["Brian Ivan Lutaaya", "Isaac Ssembatya", "Emmanuel Mukisa"];

export default function App() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.count);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className="App">
      {user && <h1>Hello, {user.firstName}</h1>}
      <h1>Redux made easy</h1>
      <h2>Total votes: {count}</h2>

      {voters && voters.map((voter) => <Counter key={voter} name={voter} />)}
    </div>
  );
}
