import "./Promo.css";
import WebLogo from "../../images/web-logo.svg";

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__flex">
          <div className="promo__about">
            <h1 className="promo__title">
              Учебный проект студента факультета Веб&#8209;разработки.
            </h1>
            <p className="promo__description">
              Листайте ниже, чтобы узнать больше про этот проект и его
              создателя.
            </p>
          </div>
          <img
            src={WebLogo}
            alt="World made from words WEB"
            className="promo__logo"
          />
        </div>
        <a href="https://github.com/IrinaSakhno/" className="promo__button link">Узнать больше</a>
      </div>
    </section>
  );
};

export default Promo;
