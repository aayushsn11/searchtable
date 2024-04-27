export const filterValues = [5, 10];

export const debounce = (func, delay) => {
  let timeoutId;
  const debouncedFunction = function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
  debouncedFunction.cancel = () => clearTimeout(timeoutId); // Cancel debounce
  return debouncedFunction;
};

