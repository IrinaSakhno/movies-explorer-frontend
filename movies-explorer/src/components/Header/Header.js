import "./Header.css";
import HeaderLogo from "../../images/c-logo.svg";
import HeaderLink from "../HeaderLink/HeaderLink";

const Header = () => {
  return (
    <section className="header">
      <div className="header__container">
        <img src={HeaderLogo} alt="logo" className="header__logo" />
        <ul className="header__links">
          {[
            {
              name: "Войти",
              link: "",
              style: "header-link__name header-link header-link_green link",
            },
            {
              name: "Регистрация",
              link: "",
              style: "header-link__name header-link link",
            },
          ].map((item) => (
            <HeaderLink name={item.name} link={item.link} style={item.style} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Header;
