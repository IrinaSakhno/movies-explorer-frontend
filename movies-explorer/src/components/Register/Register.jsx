import React from "react";
import "./Register.css";
import AuthHeader from "../AuthHeader/AuthHeader";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import AuthNavigation from "../AuthNavigation/AuthNavigation";

const Register = () => {
  return (
    <>
      <AuthHeader greeting="Добро пожаловать!" />
      <main className="register">
        <RegistrationForm button="Зарегистрироваться" />
        <AuthNavigation
          text="Уже зарегистрированы?"
          button="Войти"
          path="/signin"
        />
      </main>
    </>
  );
};

export default Register;
