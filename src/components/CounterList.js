import React from "react";
import Counter from "./Counter";
import "./CounterList.css"

const CounterList = ({ counters, onIncrement, onDecrement, onSetColor }) => {
  const list = counters.map((counter, i) => (
    <Counter
      key={i}
      index={i}
      {...counter}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onSetColor={onSetColor}
    />
  ));

  return <div className="CounterList">{list}</div>;
};

export default CounterList;
