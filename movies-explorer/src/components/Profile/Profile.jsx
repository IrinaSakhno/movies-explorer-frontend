import React from "react";
import { useContext, useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import HeaderAuthorized from "../HeaderAuthorized/HeaderAuthorized";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { NAME_REGEX, EMAIL_REGEX } from "../../constants/regex";

const Profile = ({ logOut, handleUserUpdate, isLoading }) => {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isSimilarValues, setIsSimilarValues] = useState(true);

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  // Form validation functions:
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest("form").checkValidity());
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

  const handleNameChange = (evt) => {
    handleChange(evt);
    const { name, value } = evt.target;
    if (name === "name" && evt.target.value.length < 2) {
      setIsValid(false);
      setErrors({ ...errors, name: "Имя должно иметь не менее 2 символов" });
    } else if (name === "name" && !NAME_REGEX.test(value)) {
      setIsValid(false);
      setErrors({
        ...errors,
        name: "Имя может содержать только латиницу, кириллицу, пробел или дефис.",
      });
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!isSimilarValues) {
      handleUserUpdate({
        name: name,
        email: email,
      });
      resetForm();
    }
    setIsDisabled(true);
  };

  useEffect(() => {
    let name = true;
    let email = true;
    if (values.name) {
      name = values.name === currentUser.name;
    }
    if (values.email) {
      email = values.email === currentUser.email;
    }
    setIsSimilarValues(name && email);
  }, [values.name, values.email]);

  useEffect(() => {
    if (!isLoading) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser, isLoading]);

  useEffect(() => {
    if (values.name) {
      setName(values.name);
    }
    if (values.email) {
      setEmail(values.email);
    }
  }, [values.name, values.email]);

  useEffect(() => {
    if (currentUser) {
      resetForm();
    }
  }, [currentUser, resetForm]);

  const handleEditButton = () => {
    setIsDisabled(!isDisabled);
  };

  const profileSubmitButtonClassName = `profile__submit-button links ${
    isDisabled ? "profile__submit-button_disabled" : ""
  } ${
    !isValid || isLoading || isSimilarValues
      ? "profile__submit-button_inactive"
      : ""
  }`;

  return (
    <>
      <HeaderAuthorized />
      <main className="profile">
        <section className="profile__container">
          <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
          <form className="profile__form" onSubmit={handleSubmit} noValidate>
            <div className="profile__form-container">
              <label className="profile__form-label">Имя</label>
              <input
                className={`profile__form-field ${
                  isDisabled || isLoading ? "profile__form-field_disabled" : ""
                }`}
                name="name"
                id="name-input"
                type="text"
                placeholder="Введите имя"
                minLength="2"
                maxLength="40"
                required
                value={`${values.name ? values.name : name}`}
                onChange={handleNameChange}
              />
            </div>
            {errors && (
              <span className="profile__input-error">{errors.name}</span>
            )}
            <div className="profile__form-container profile__form-container_last">
              <label className="profile__form-label">E-mail</label>
              <input
                className={`profile__form-field ${
                  isDisabled || isLoading ? "profile__form-field_disabled" : ""
                }`}
                name="email"
                id="email-input"
                type="email"
                placeholder="Введите email"
                minLength="2"
                maxLength="40"
                pattern="^\S+@\S+\.\S+$"
                required
                value={`${values.email ? values.email : email}`}
                onChange={handleEmailChange}
              />
            </div>
            {errors && (
              <span className="profile__input-error">{errors.email}</span>
            )}
            <button
              className={profileSubmitButtonClassName}
              type="submit"
              disabled={!isValid || isLoading || isSimilarValues ? true : false}
            >
              Сохранить изменения
            </button>
            <button
              type="button"
              onClick={handleEditButton}
              className="profile__submit-button link"
            >
              {isDisabled
                ? "Редактировать данные пользователя"
                : "Отменить редактирование"}
            </button>
          </form>
          <Link
            to="/"
            className="profile__signout-button link"
            onClick={logOut}
          >
            Выйти из аккаунта
          </Link>
        </section>
      </main>
    </>
  );
};

export default Profile;
