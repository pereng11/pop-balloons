import { useCounterContext } from "../../contexts/CounterContext";
import style from "./Counter.module.css";

export const Counter = () => {
  const { count, increase, decrease } = useCounterContext();

  const handleClickDecrease = () => {
    count > 2 && decrease();
  };

  return (
    <div>
      <div className={style.buttonBox}>
        <button
          className={`${style.button} ${style.decrease}`}
          onClick={handleClickDecrease}
        >
          -
        </button>
        <span>{count}</span>
        <button
          className={`${style.button} ${style.increase}`}
          onClick={increase}
        >
          +
        </button>
      </div>
    </div>
  );
};
