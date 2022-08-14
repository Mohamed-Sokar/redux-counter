import { useDispatch, useSelector } from "react-redux";
import cssClass from "./Counter.module.css";

export const Counter = () => {
  let dispatch = useDispatch();
  let counter = useSelector((state) => state.counter);
  let isCounterVisible = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: "Increment" });
  };
  const dectementHandler = () => {
    dispatch({ type: "Decrement" });
  };
  const incrementByValueHandler = () => {
    dispatch({ type: "IncrementByValue", amount: 10 });
  };
  const changeVisibilityHandler = () => {
    dispatch({ type: "UpdateCounterVisibility" });
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
