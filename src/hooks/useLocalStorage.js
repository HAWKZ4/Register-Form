import { useState, useEffect } from "react";

const getLocalValue = (key, initValue) => {
  // SSR Next.js
  if (typeof window === "undefined") return initValue;

  // If a value is already stored
  const localValue = JSON.parse(localStorage.getItem(key))
  if (localValue) return localValue;

  // Return result of a function
  if (initValue instanceof Function) return initValue();

  return initValue;
};

const useLocalStorage = (key, initValue) => {
  const [value, setValue] = useState(() => {
    return getLocalValue(key, initValue);
  });


  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
