import useLocalStorage from "./useLocalStorage";

const useInput = (key, initValue) => {
  const [value, setValue] = useLocalStorage(key, initValue);

  const reset = () => setValue(initValue);

  const attributesObj = {
    value,
    onChange: (e) => setValue(e.target.value),
  };

  return [value, reset, attributesObj];
};

export default useInput;
