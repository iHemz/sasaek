import { useState } from "react";

export function useTrueOrFalse() {
  const [isTrue, setIsTrue] = useState(false);

  const open = () => setIsTrue(true);
  const close = () => setIsTrue(false);
  const toggle = () => setIsTrue(!isTrue);

  const tools = { open, close, toggle };
  const returnedArr = [isTrue, tools] as const;

  return returnedArr;
}
