import { PropsWithChildren, createContext, useContext } from "react";
import { Counter, useCounter } from "../hooks/useCounter";

const CounterContext = createContext<Counter>({} as Counter);

export const CounterProvider = (props: PropsWithChildren) => {
  const counter = useCounter();
  return (
    <CounterContext.Provider value={counter}>
      {props.children}
    </CounterContext.Provider>
  );
};

export const useCounterContext = () => useContext(CounterContext);
