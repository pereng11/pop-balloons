import { useEffect, useMemo } from "react";
import style from "./Result.module.css";
import { Link } from "react-router-dom";
import { URI } from "../../consts/URI";
import cheerAudioSrc from "./../../assets/audio/crowd-cheer.mp3";

export const Result = () => {
  const cheerAudio = useMemo(() => new Audio(cheerAudioSrc), []);

  useEffect(() => {
    cheerAudio.play();
    return () => {
      cheerAudio.pause();
      cheerAudio.currentTime = 0;
    };
  }, [cheerAudio]);

  return (
    <div className={style.container}>
      <p className={style.message}>You Lose</p>
      <Link to={URI.INDEX} className={style.replay}>
        Replay
      </Link>
    </div>
  );
};
