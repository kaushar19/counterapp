import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions/action";
//(Rule-6 Apply Store to Whole Application)
const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <div className="counterMain">
        <div className="counter">
          <div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => dispatch(decrement())}
            >
              DECREMENT
            </button>
          </div>
          <div>
            <h1> {count}</h1>
          </div>
          <div>
            <button
              className="btn btn-success btn-sm"
              onClick={() => dispatch(increment())}
            >
              INCREMENT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
