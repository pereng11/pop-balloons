import { useEffect, useState } from "react";
import { Balloon } from "../components/Balloon/Balloon";
import { getRandomColor } from "../consts/Color";
import { useCounterContext } from "../contexts/CounterContext";
import { NumberUtil } from "../utils/Number";
import ReactCanvasConfetti from "react-canvas-confetti";
import { defaultCanvasStyles, useConfetti } from "../hooks/useConfetti";

export const BalloonsPage = () => {
  const { count } = useCounterContext();
  const [balloonsCount, setBalloonsCount] = useState(
    NumberUtil.generateRandomNumber(count, 2)
  );
  const { fire, refConfetti } = useConfetti();

  useEffect(() => {
    if (balloonsCount === 0) {
      const intervalId = setInterval(fire, 2000);
      return () => clearInterval(intervalId);
    }
  }, [balloonsCount, fire]);

  const onBalloonPopped = () => {
    balloonsCount > 0 && setBalloonsCount((prev) => prev - 1);
  };

  return (
    <div>
      {balloonsCount > 0 ? (
        <Balloon
          key={balloonsCount}
          color={getRandomColor()}
          onPopped={onBalloonPopped}
        />
      ) : (
        <>
          <ReactCanvasConfetti
            style={defaultCanvasStyles}
            refConfetti={refConfetti}
          />
        </>
      )}
    </div>
  );
};
