import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(initialValue);
  useEffect(() => {
    try {
      const item = localStorage.getItem(key);
      item && setStoredValue(JSON.parse(item));
    } catch (error) {
      console.log(error);
    }
  }, [key]);
  const setValue = (value) => {
    try {
      const storingValue =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(storingValue);

      localStorage.setItem(key, JSON.stringify(storingValue));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
