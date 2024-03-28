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
        <label className={styles.hidden} htmlFor={fieldName}>{placeholder}</label>

        <input
          id={fieldName}
          className={styles[inputClassName]}
          type={type}
          placeholder={placeholder}
          {...register(fieldName)}
          ref={ref}
          // autoComplete='true'
        />
      </>
    );
  },
);

export default Input;
