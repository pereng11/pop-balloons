import { Link } from "react-router-dom";
import { Counter } from "../components/Counter/Counter";
import style from "./common.module.css";
import { URI } from "../consts/URI";

export const Index = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <h1 className={style.title}>Popping Balloons</h1>
      </header>
      <main className={style.main}>
        <Counter />
        <Link to={URI.BALLOONS}>시작</Link>
      </main>
    </div>
  );
};
