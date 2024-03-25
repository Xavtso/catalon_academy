import React, { useEffect } from "react";
import styles from "./Input.module.scss";
import { InputProps } from "types";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder,
      inputClassName,
      type,
      fieldName,
      register,
      rules,
    }: InputProps,
    ref,
  ) => {
    useEffect(() => {
      register(fieldName, rules);
    }, [register, fieldName, rules]);
    return (
      <>
        <input
          
          className={styles[inputClassName]}
          type={type}
          placeholder={placeholder}
          {...register(fieldName)}
          ref={ref}
        />
      </>
    );
  },
);

export default Input;
