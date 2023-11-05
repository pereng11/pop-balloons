import { useEffect, useState } from "react";
import { Balloon } from "../components/Balloon/Balloon";
import { getRandomColor } from "../consts/Color";
import { useCounterContext } from "../contexts/CounterContext";
import { NumberUtil } from "../utils/Number";

export const BalloonsPage = () => {
  const { count } = useCounterContext();
  const [balloonsCount, setBalloonsCount] = useState(
    NumberUtil.generateRandomNumber(count, 2)
  );

  useEffect(() => {
    console.log("counter", count);
    console.log("balloons", balloonsCount);
  });

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
      ) : null}
    </div>
  );
};
