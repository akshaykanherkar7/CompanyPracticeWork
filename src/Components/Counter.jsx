import React, { useEffect, useRef, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const id = useRef();

  const debounce = (payload) => {
    if (id.current) {
      clearTimeout(id.current);
    }
    id.current = setTimeout(() => {
      setCount((s) => s + payload);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(id.current);
    };
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => debounce(-1)}>-</button>
      <button onClick={() => debounce(+1)}>+</button>
    </div>
  );
};

export default Counter;
