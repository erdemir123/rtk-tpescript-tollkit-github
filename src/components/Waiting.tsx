import React, { useEffect, useState } from "react";
export const useWaiting = (word: string) => {
  const [wait, setWait] = useState("");
  useEffect(() => {
    const handler = setTimeout(() => {
      setWait(word);
    }, 3000);
    return () => clearTimeout(handler);
  }, [word]);

  return wait;
};
