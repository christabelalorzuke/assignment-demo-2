import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDelete, onDecrement, counters } =
      this.props;
    return (
      <div>
        <div className="row">
          <div className=''>
            <button
              className="btn btn-success m-2"
              onClick={onReset}
              disabled={counters.length === 0 ? "disabled" : ""}
            >
              <i className="fa fa-refresh" />
            </button>
          </div>
        </div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
