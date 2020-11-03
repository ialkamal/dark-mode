import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
  const [someValue, setSomeValue] = useLocalStorage("dark_mode", initialValue);
  console.log("useDarkMode", initialValue);

  return [someValue, setSomeValue];
};

export default useDarkMode;
