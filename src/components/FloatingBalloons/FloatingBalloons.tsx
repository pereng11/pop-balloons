import { HTMLAttributes } from "react";
import style from "./FloatingBalloons.module.css";

export const FloatingBalloons = ({
  className,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`${style.container} ${className}`}>
      <div className={style.balloon}></div>
      <div className={style.balloon}></div>
      <div className={style.balloon}></div>
      <div className={style.balloon}></div>
      <div className={style.balloon}></div>
    </div>
  );
};
