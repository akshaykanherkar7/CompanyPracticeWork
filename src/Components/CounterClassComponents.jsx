import React from "react";
class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.addCouter = this.addCouter.bind(this);
  }
  addCouter = (value) => {
    this.setState((prevcounter) => {
      return { counter: prevcounter.counter + value };
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={() => this.addCouter(1)}>Add</button>
        <button onClick={() => this.addCouter(-1)}>Reduce</button>
      </div>
    );
  }
}

export { CounterClass };
