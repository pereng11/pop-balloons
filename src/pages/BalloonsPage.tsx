import { useState } from "react";
import { Balloon } from "../components/Balloon/Balloon";
import { getRandomColor } from "../consts/Color";
import { useCounterContext } from "../contexts/CounterContext";
import { NumberUtil } from "../utils/Number";
import style from "./BalloonsPage.module.css";
import { Result } from "../components/Result/Result";
import { defaultCanvasStyles, useConfetti } from "../hooks/useConfetti";
import ReactCanvasConfetti from "react-canvas-confetti";

export const BalloonsPage = () => {
  const { count } = useCounterContext();
  const [balloonsCount, setBalloonsCount] = useState(
    NumberUtil.generateRandomNumber(count, 2)
  );
  const { fire, refConfetti } = useConfetti();

  const onBalloonPopped = () => {
    fire();
    balloonsCount > 0 && setBalloonsCount((prev) => prev - 1);
  };

  return (
    <div className={style.container}>
      <ReactCanvasConfetti
        style={defaultCanvasStyles}
        refConfetti={refConfetti}
      />
      {balloonsCount > 0 ? (
        <Balloon
          key={balloonsCount}
          color={getRandomColor()}
          onPopped={onBalloonPopped}
        />
      ) : (
        <Result />
      )}
    </div>
  );
};
