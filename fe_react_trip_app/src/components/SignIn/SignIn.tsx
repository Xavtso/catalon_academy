import { SignUpFormType } from "types";
import styles from "./SignIn.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { registerUser } from "actions/authActions";
import Button from "UI/Button";
import { fieldRules } from "contstants/inputRulesData";
import Input from "UI/Form/Input/Input";
import ErrorMessage from "UI/Form/ErrorMessage";
import Divider from "UI/Form/Divider";
import GoogleButton from "UI/GoogleButton/GoogleButton";
import { useNavigate } from "react-router-dom";
import { pathConstants } from "contstants/Router/pathConstants";
import PasswordInput from "UI/Form/PasswordInput";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormType>();

  const onSubmit: SubmitHandler<SignUpFormType> = async (data) => {
    console.log(data);
    await registerUser(data);
  };

  const navigateTo = useNavigate();

  return (
    <div className={styles.signCard}>
      <h5 className={styles.signTitle}>Welcome Back</h5>
      <GoogleButton />
      <Divider />

      <form onSubmit={handleSubmit(onSubmit)} className={styles.signIn}>
        <Input
          type="email"
          inputClassName={errors.email ? "inputErr" : "formInput"}
          placeholder="Email"
          fieldName="email"
          register={register}
          rules={fieldRules.email}
          {...register("email", fieldRules.email)}
        />
        <ErrorMessage fieldError={errors.email} />

        <PasswordInput
          inputClassName={errors.password ? "inputErr" : "formInput"}
          fieldName="password"
          register={register}
          rules={fieldRules.password}
          {...register("password", fieldRules.password)}
        />
        <ErrorMessage fieldError={errors.password} />

        <div className={styles.checkContainer}>
          <div>
            <input
              type="checkbox"
              name="keepLoggedIn"
              className={styles.checkInput}
            />
            <label>Keep me logged in</label>
          </div>
          <p>Forgot password ?</p>
        </div>

        <Button
          title="Sign In"
          fillType="filled"
          size="fullSize"
          onClick={handleSubmit(onSubmit)}
        />
      </form>
      <hr className={styles.rule} />
      <p className={styles.reference}>
        Don't have any account yet?
        <span onClick={() => navigateTo(pathConstants.SIGN_UP)}>Sign Up</span>
      </p>
    </div>
  );
}
