import "./HeaderAuthorized.css";
import HeaderLogo from "../../images/c-logo.svg";
import AccountLogo from "../../images/account-logo.svg";
import BurgerMenu from "../../images/burger-menu.svg";

const Header = () => {
  return (
    <section className="header-authorized">
      <div className="header-authorized__container">
        <img src={HeaderLogo} alt="logo" className="header-authorized__logo" />
        <div className="header-authorized__menu">
          <ul className="header-authorized__links">
            <li className="header-authorized__link">
              <a
                href=" "
                className="header-authorized__hyperlink header-authorized__hyperlink_active link"
              >
                Фильмы
              </a>
            </li>
            <li className="header-authorized__link">
              <a href=" " className="header-authorized__hyperlink link">
                Сохранённые фильмы
              </a>
            </li>
          </ul>
          <div className="header-authorized__profile">
            <a
              href=" "
              className="header-authorized__hyperlink header-authorized__hyperlink_active link"
            >
              Аккаунт
            </a>
            <a href=" " className=" ">
              <img
                src={AccountLogo}
                alt="account"
                className="header-authorized__account-logo link"
              />
            </a>
          </div>
        </div>
        <a href=" " className="header-authorized__burger-menu">
          <img
            src={BurgerMenu}
            alt="meniu symbol"
            className="header-authorized__burger-logo link"
          />
        </a>
      </div>
    </section>
  );
};

export default Header;
