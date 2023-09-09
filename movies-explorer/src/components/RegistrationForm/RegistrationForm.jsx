import React from "react";
import "./RegistrationForm.css";
import RegistrationField from "../RegistrationField/RegistrationField";

const RegistrationForm = ({ button }) => {
  return (
    <>
      <main className="registration-form">
        <div className="registration-form__container">
          <form className="registration-form__form" noValidate>
            <RegistrationField
              label="Имя"
              name="name"
              placeholder="Введите имя"
              type="text"
            />
            <RegistrationField
              label="E-mail"
              name="email"
              placeholder="Введите e-mail"
              type="email"
            />
            <RegistrationField
              label="Пароль"
              name="password"
              placeholder="Введите пароль"
              type="password"
            />
            <button
              type="submit"
              className="registration-form__submit-button link"
            >
              {button}
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default RegistrationForm;