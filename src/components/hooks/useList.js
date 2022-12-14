import { useState } from "react";

const UseList = (initialValues = []) => {
  const [value, setValue] = useState(initialValues);

  const push = (element) => {
    setValue((oldValue) => [...oldValue, element]);
  };

  const remove = (index) => {
    setValue((oldValue) => oldValue.filter((_, i) => i !== index));
  };

  const isEmpty = () => value.length === 0;
  return {
    value,
    setValue,
    push,
    remove,
    isEmpty,
  };
};

export default UseList;
