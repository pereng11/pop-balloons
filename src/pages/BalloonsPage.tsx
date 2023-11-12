import { useState, useRef } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPopImmediately, setIsPopImmediately] = useState(false);
  const timeoutIdRef = useRef<number>(0);

  const onPopBalloon = () => {
    fire();
    balloonsCount > 0 && setBalloonsCount((prev) => prev - 1);
  };

  const handleMouseDown = () => {
    timeoutIdRef.current = window.setTimeout(() => {
      setIsPopImmediately(true);
    }, 500);
  };

  const handleMouseUp = () => {
    clearTimeout(timeoutIdRef.current);
    setIsPopImmediately(false);
  };

  return (
    <div
      ref={containerRef}
      className={style.container}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <ReactCanvasConfetti
        style={defaultCanvasStyles}
        refConfetti={refConfetti}
      />
      {balloonsCount > 0 ? (
        <Balloon
          key={balloonsCount}
          color={getRandomColor()}
          onPopped={onPopBalloon}
          popImmediately={isPopImmediately}
        />
      ) : (
        <Result />
      )}
    </div>
  );
};
