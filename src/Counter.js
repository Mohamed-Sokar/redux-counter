import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./counter-slice";
import cssClass from "./Counter.module.css";

const Counter = () => {
  let dispatch = useDispatch();
  let counter = useSelector((state) => state.counterReducer.counter);
  let isCounterVisible = useSelector(
    (state) => state.counterReducer.showCounter
  );

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const dectementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const incrementByValueHandler = () => {
    dispatch(counterActions.incrementByValue(10));
  };
  const changeVisibilityHandler = () => {
    dispatch(counterActions.toggleVisibility());
  };

  return (
    <main className={cssClass.counter}>
      <h1>Redux Counter</h1>
      {isCounterVisible && <div className={cssClass.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementByValueHandler}>Increase by 10</button>
        <button onClick={dectementHandler}>Decrement</button>
      </div>
      <button onClick={changeVisibilityHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
