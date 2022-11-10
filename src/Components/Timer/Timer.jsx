import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [value, setValue] = useState(0);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    let id = setInterval(() => {
      if (timer < 1) {
        clearInterval(id);
      } else {
        setTimer((prev) => prev - 1);
      }
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [timer]);

  const handleOnClick = () => {
    setTimer(value);
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
      setTimer(0);
    }
  };
  return (
    <div>
      <h1>Timer</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <div>{timer}</div>
      <button onClick={handleOnClick}>{toggle ? "Start" : "Reset"}</button>
    </div>
  );
};

export default Timer;
