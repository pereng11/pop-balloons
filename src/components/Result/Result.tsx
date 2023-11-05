import { useEffect } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { defaultCanvasStyles, useConfetti } from "../../hooks/useConfetti";
import style from "./Result.module.css";
import { Link } from "react-router-dom";
import { URI } from "../../consts/URI";

export const Result = () => {
  const { fire, refConfetti } = useConfetti();

  useEffect(() => {
    fire();
    const intervalId = setInterval(fire, 2000);
    return () => clearInterval(intervalId);
  }, [fire]);

  return (
    <div className={style.container}>
      <ReactCanvasConfetti
        style={defaultCanvasStyles}
        refConfetti={refConfetti}
      />
      <p className={style.message}>YEAH!!!</p>
      <Link to={URI.INDEX} className={style.replay}>
        Replay
      </Link>
    </div>
  );
};
