import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCounterContext } from "../../contexts/CounterContext";
import style from "./Counter.module.css";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export const Counter = () => {
  const { count, increase, decrease } = useCounterContext();

  const handleClickDecrease = () => {
    count > 2 && decrease();
  };

  return (
    <div>
      <p className={style.guideText}>how many people?</p>
      <div className={style.buttonBox}>
        <button className={`${style.button}`} onClick={handleClickDecrease}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <span className={style.count}>{count}</span>
        <button className={`${style.button}`} onClick={increase}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};
