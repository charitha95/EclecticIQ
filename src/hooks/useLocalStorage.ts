import { useEffect, useState } from "react";
import { getStorageValue } from "../utils/localStorageHelper";

/**
 * Custom hook to save into the localStorage
 * @param key key of the localStorage value pair
 * @param defaultValue default value if given key doesn't exists
 * @returns tuple of the value and it's setter
 */
function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(getStorageValue(key) || defaultValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}

export default useLocalStorage;
