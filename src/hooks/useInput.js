import { useState } from "react";

export const useInput = (initial) => {
  const [inputValue, setInputValue] = useState(initial);
  const handle = (e) => {
    setInputValue(e.target.value);
  };
  return [inputValue, setInputValue, handle];
};
