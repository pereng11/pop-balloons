import { Link } from "react-router-dom";
import { Counter } from "../components/Counter/Counter";
import style from "./Index.module.css";
import { URI } from "../consts/URI";
import { FloatingBalloons } from "../components/FloatingBalloons/FloatingBalloons";

export const Index = () => {
  return (
    <div className={style.container}>
      <FloatingBalloons className={style.floatingBalloons} />
      <header className={style.header}>
        <h1 className={style.title}>Popping Balloons</h1>
      </header>
      <main className={style.main}>
        <Counter />
        <Link className={style.startLink} to={URI.BALLOONS}>
          START
        </Link>
      </main>
    </div>
  );
};
