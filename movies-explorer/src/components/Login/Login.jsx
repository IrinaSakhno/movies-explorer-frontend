import React from "react";
import "./Login.css";
import AuthHeader from "../AuthHeader/AuthHeader";
import LoginForm from "../LoginForm/LoginForm";
import AuthNavigation from "../AuthNavigation/AuthNavigation";

const Login = () => {
  return (
    <>
      <AuthHeader greeting="Рады видеть!" />
      <section className="login">
        <LoginForm button="Войти" />
        <AuthNavigation
          text="Ещё не зарегистрированы?"
          button="Регистрация"
          path="/signup"
        />
      </section>
    </>
  );
};

export default Login;
