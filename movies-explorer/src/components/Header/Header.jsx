import { Link } from "react-router-dom";
import "./Header.css";
import HeaderLogo from "../../images/c-logo.svg";
import HeaderLink from "../HeaderLink/HeaderLink";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo-link">
          <img
            src={HeaderLogo}
            alt="логотип проекта"
            className="header__logo link"
          />
        </Link>
        <nav className="header__menu">
          <ul className="header__links">
            {[
              {
                name: "Войти",
                link: "/signin",
                style: "header__link-name header__link header__link_green link",
              },
              {
                name: "Регистрация",
                link: "/signup",
                style:
                  "header__link-name header__link header__link_registration link",
              },
            ].map((item, index) => (
              <HeaderLink
                name={item.name}
                link={item.link}
                style={item.style}
                key={index}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
