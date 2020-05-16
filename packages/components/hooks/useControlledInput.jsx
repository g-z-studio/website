import { useState, useEffect } from "react";

export const useControlledInput = (callback, defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);
  const isFunction = (func) => typeof func === "function";

  useEffect(() => {
    isFunction(callback) && callback(value);
  }, [value, callback]);

  return [value, setValue];
};
