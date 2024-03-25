import React, { useEffect } from "react";
import styles from "./SelectInput.module.scss";
import { InputProps } from "types";

const SelectInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ inputClassName, fieldName, register, rules, optionsData }: InputProps,ref) => {
    useEffect(() => {
      register(fieldName, rules);
    }, [register, fieldName, rules]);
    return (
      <>
        <select  className={styles[inputClassName]} {...register(fieldName)}>
          {optionsData?.map((option, index) => (
            <option  key={index} value={option.value}>
              {" "}
              {option.title}
            </option>
          ))}
        </select>
      </>
    );
  },
);

export default SelectInput;
