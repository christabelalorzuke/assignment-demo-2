import React from "react";

const Counter = ({ counter, onIncrement, onDecrement, onDelete }) => {
  const { value } = counter;

  return (
    <div>
      <div className="row">
        <div className="">
          <span style={{ fontSize: 24 }} className="badge m-2 badge-warning">
            { value === 0 ? "Zero" : value }
          </span>
        </div>
        <div className="">
          <button
            className="btn btn-secondary"
            onClick={() => onIncrement(counter)}
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            className="btn btn-info m-2"
            onClick={() => onDecrement(counter)}
            disabled={counter.value === 0 ? "disabled" : ""}
          >
            <i className="fa fa-minus-circle" />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => onDelete(counter.id)}
          >
            <i className="fa fa-trash-o" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
