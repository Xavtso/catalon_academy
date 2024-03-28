import { AppDispatch, SignUpFormType } from "types";
import styles from "./SignUp.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { registerUser } from "store/thunks";
import Button from "UI/Button";
import { fieldRules, optionsData } from "contstants/inputRulesData";
import Input from "UI/Form/Input/Input";
import SelectInput from "UI/Form/SignInputs/SelectInput/SelectInput";
import ErrorMessage from "UI/Form/ErrorMessage";
import Divider from "UI/Form/Divider";
import GoogleButton from "UI/GoogleButton/GoogleButton";
import { pathConstants } from "contstants/Router/pathConstants";
import { useNavigate } from "react-router-dom";
import PasswordInput from "UI/Form/PasswordInput";
import { useDispatch } from "react-redux";

export default function SignUp() {
  const dispatch = useDispatch<AppDispatch>();
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormType>();

  const onSubmit: SubmitHandler<SignUpFormType> =async (data) => {
    await dispatch(registerUser({ email: data.email, password: data.password }));
  };

  const navigateTo = useNavigate();

  return (
    <div className={styles.signCard}>
      <h5 className={styles.signTitle}>Registration</h5>
      <GoogleButton />
      <Divider />

      <form
        id="signForm"
        onSubmit={handleSubmit(onSubmit)}
        className={styles.signUp}
      >
        <Input
          type="text"
          inputClassName={errors.firstName ? "inputErr" : "formInput"}
          placeholder="First Name"
          fieldName="firstName"
          register={register}
          rules={fieldRules.firstName}
          {...register("firstName", fieldRules.firstName)}
        />
        <ErrorMessage fieldError={errors.firstName} />

        <Input
          type="text"
          inputClassName={errors.lastName ? "inputErr" : "formInput"}
          placeholder="Last Name"
          fieldName="lastName"
          register={register}
          rules={fieldRules.lastName}
          {...register("lastName", fieldRules.lastName)}
        />
        <ErrorMessage fieldError={errors.lastName} />

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

        <Input
          type="number"
          inputClassName={errors.age ? "inputErr" : "formInput"}
          placeholder="Age"
          fieldName="age"
          register={register}
          rules={fieldRules.age}
          {...register("age", fieldRules.age)}
        />
        <ErrorMessage fieldError={errors.age} />

        <Input
          type="tel"
          inputClassName={errors.phoneNumber ? "inputErr" : "formInput"}
          placeholder="Phone Number"
          fieldName="phoneNumber"
          register={register}
          rules={fieldRules.phoneNumber}
          {...register("phoneNumber", fieldRules.phoneNumber)}
        />
        <ErrorMessage fieldError={errors.phoneNumber} />

        <SelectInput
          inputClassName={errors.gender ? "selectErr" : "selectInput"}
          rules={fieldRules.gender}
          register={register}
          fieldName="gender"
          optionsData={optionsData}
          {...register("gender", fieldRules.gender)}
        />
        <ErrorMessage fieldError={errors.gender} />

        <div className={styles.policyContainer}>
          <Input
            type="checkbox"
            fieldName="privacy"
            inputClassName="checkInput"
            rules={fieldRules.privacy}
            register={register}
            {...register("privacy", fieldRules.privacy)}
          />
          <label htmlFor="privacy" className={styles.checkLabel}>
            {" "}
            I agree with Privacy Policy
          </label>
          <ErrorMessage fieldError={errors.privacy} />
        </div>

        <Button
          title="Sign Up"
          fillType="filled"
          size="fullSize"
          onClick={handleSubmit(onSubmit)}
        />
      </form>
      <hr className={styles.rule} />
      <p className={styles.reference}>
        Already have an account?
        <span onClick={() => navigateTo(pathConstants.SIGN_IN)}>Sign In</span>
      </p>
    </div>
  );
}
