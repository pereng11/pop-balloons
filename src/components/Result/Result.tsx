import { useEffect, useMemo } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { defaultCanvasStyles, useConfetti } from "../../hooks/useConfetti";
import style from "./Result.module.css";
import { Link } from "react-router-dom";
import { URI } from "../../consts/URI";
import cheerAudioSrc from "./../../assets/audio/crowd-cheer.mp3";

export const Result = () => {
  const { fire, refConfetti } = useConfetti();

  const cheerAudio = useMemo(() => new Audio(cheerAudioSrc), []);

  useEffect(() => {
    fire();
    cheerAudio.play();
    const intervalId = setInterval(fire, 2000);
    return () => clearInterval(intervalId);
  }, [fire, cheerAudio]);

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
