import { fieldRules } from "contstants/inputRulesData";
import { InputProps } from "types";
import Input from "../Input";
import { useState, forwardRef } from "react";
import styles from "./PasswordInput.module.scss";

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ fieldName, register, rules, inputClassName }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
      <div className={styles.passwordContainer}>
        <Input
          type={showPassword ? "text" : "password"}
          inputClassName={inputClassName}
          placeholder="Password"
          fieldName={fieldName}
          register={register}
          rules={rules}
          {...register("password", fieldRules.password)}
        />

        <img
          src="/assets/icons/shared/hidden.svg"
          width="20"
          height="20"
          alt="hidden"
          onClick={() => setShowPassword(!showPassword)}
          className={styles.passwordIcon}
        />
      </div>
    );
  },
);

export default PasswordInput;
