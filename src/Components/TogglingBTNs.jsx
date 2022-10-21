import React, { useState } from "react";

const TogglingBTNs = () => {
  const [value, setValue] = useState("Value");
  const HandleToggle = (val) => {
    if (val === "Node") {
      setValue("Node");
    } else if (val === "React") {
      setValue("React");
    } else if (val === "MongoDB") {
      setValue("MongoDB");
    } else {
      setValue("Value");
    }
  };
  return (
    <div>
      <button onClick={() => HandleToggle("Value")}>Ok</button>
      <div>{value}</div>
      <button disabled={value === "Node"} onClick={() => HandleToggle("Node")}>
        Node
      </button>
      <button
        disabled={value === "React"}
        onClick={() => HandleToggle("React")}
      >
        React
      </button>
      <button
        disabled={value === "MongoDB"}
        onClick={() => HandleToggle("MongoDB")}
      >
        MongoDB
      </button>
    </div>
  );
};

export default TogglingBTNs;
