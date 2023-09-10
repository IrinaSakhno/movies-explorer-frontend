import "./Portfolio.css";
import MainTitle from "../MainTitle/MainTitle";
import ProfilePhoto from "../../images/avatar.jpg";
import PortfolioProject from "../PortfolioProject/PortfolioProject";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <MainTitle title="Студент" />
      <div className="portfolio__about">
        <img
          src={ProfilePhoto}
          alt="фотография Ирины"
          className="portfolio__avatar"
        />
        <div className="portfolio__info">
          <h3 className="portfolio__title">Ирина</h3>
          <p className="portfolio__profession">Фронтенд-разработчик, 27 лет</p>
          <p className="portfolio__description">
            Я высоко ценю комфорт и удобство сервисов в профессиональной и в
            повседневной жизни, поэтому очень хочу быть причастной к их
            улучшению для других людей. Верю, что веб-разработка поможет мне
            реализовать себя в этом, поэтому я прилагаю максимум усилий для
            развития своих навыков и умений. В свободное время я решаю задачи на
            LeetCode, CodeWars, а также решаю алгоритмические задачи по хэндбуку
            Академии Яндекс.
          </p>
          <div className="portfolio__github link">
            <a
              href="https://github.com/IrinaSakhno/"
              className="portfolio__hyperlink"
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <h4 className="portfolio__subtitle">Портфолио</h4>

      <ul className="portfolio__links">
        {[
          {
            name: "Статичный сайт",
            link: "https://github.com/IrinaSakhno/how-to-learn",
          },
          {
            name: "Адаптивный сайт",
            link: "https://github.com/IrinaSakhno/russian-travel",
          },
          {
            name: "Одностраничное приложение",
            link: "https://github.com/IrinaSakhno/react-mesto-api-full-gha",
          },
        ].map((item, index) => (
          <PortfolioProject name={item.name} link={item.link} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Portfolio;
