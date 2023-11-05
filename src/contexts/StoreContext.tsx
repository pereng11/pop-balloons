import { PropsWithChildren } from "react";
import { CounterProvider } from "./CounterContext";

export const StoreContext = (props: PropsWithChildren) => {
  const { children } = props;

  return <CounterProvider>{children}</CounterProvider>;
};
