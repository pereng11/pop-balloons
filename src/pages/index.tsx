import { Link } from "react-router-dom";
import { Counter } from "../components/Counter/Counter";
import style from "./common.module.css";
import { URI } from "../consts/URI";

export const Index = () => {
  return (
    <div>
      <header className={style.header}>
        <h1 className={style.title}>풍선 복불복</h1>
      </header>
      <main className={style.main}>
        <p>인원 수</p>
        <Counter />
        <Link to={URI.BALLOONS}>시작</Link>
      </main>
    </div>
  );
};
