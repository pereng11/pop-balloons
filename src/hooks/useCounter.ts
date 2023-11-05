import { useCallback, useEffect, useState } from "react";

export interface Counter {
  count: number;
  increase(): void;
  decrease(): void;
  reset(): void;
}

const defaultCount = 4;

export const useCounter = (props = defaultCount): Counter => {
  const [count, setCount] = useState(props);

  useEffect(() => {
    setCount(props);
  }, [props]);

  const increase = useCallback(() => setCount((prev) => prev + 1), []);
  const decrease = useCallback(() => setCount((prev) => prev - 1), []);
  const reset = useCallback(() => setCount(props), [props]);

  return {
    count,
    increase,
    decrease,
    reset,
  };
};
