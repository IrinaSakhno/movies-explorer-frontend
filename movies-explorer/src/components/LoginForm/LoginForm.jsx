import React from "react";
import { useState } from "react";
import "../RegistrationForm/RegistrationForm.css";
import "./LoginForm.css";
import RegistrationField from "../RegistrationField/RegistrationField";
import { EMAIL_REGEX } from "../../constants/regex";

const LoginForm = ({ button, onSubmit }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: evt.target.validationMessage });
    setIsValid(evt.target.closest("form").checkValidity());
  };

  const handleEmailChange = (evt) => {
    handleChange(evt);
    const { name, value } = evt.target;
    if (name === "email" && !EMAIL_REGEX.test(value)) {
      setIsValid(false);
      setErrors({
        ...errors,
        email: "Введите email в формате address@domain.com",
      });
    }
  };

  const handlePasswordChange = (evt) => {
    handleChange(evt);
    const { name } = evt.target;
    if (name === "password" && evt.target.value.length < 2) {
      setIsValid(false);
      setErrors({
        ...errors,
        password: "Пароль должен иметь не менее 2 символов",
      });
    }
  };

  const getErrorMessage = (status, defaultText) => {
    switch (status) {
      case 400:
        return "Вы ввели неправильный логин или пароль.";
      case 500:
        return "На сервере произошла ошибка.";
      default:
        return defaultText;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values.email, values.password).catch((err) => {
      const message = getErrorMessage(
        err.status,
        "Произошла ошибка при авторизации пользователя",
      );
      setResponseMessage(message);
      setIsValid(false);
    });
  };

  return (
    <>
      <section className="registration-form">
        <div className="registration-form__container">
          <form
            className="registration-form__form"
            name="login"
            onSubmit={handleSubmit}
            noValidate
          >
            <RegistrationField
              label="E-mail"
              name="email"
              placeholder="Введите e-mail"
              type="email"
              handleChange={handleEmailChange}
              values={values}
              errors={errors}
            />
            <RegistrationField
              label="Пароль"
              name="password"
              placeholder="Введите пароль"
              type="password"
              handleChange={handlePasswordChange}
              values={values}
            />
            <p className="registration-field__input-error">
              {!isValid && responseMessage}
            </p>
            <button
              type="submit"
              className={
                !isValid ? "registration-form__submit-button link registration-form__submit-button_disabled"
                : "registration-form__submit-button link"
              }
              disabled={!isValid}
            >
              {button}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
