import "./Footer.css";
import FooterLink from "../FooterLink/FooterLink";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__bottom">
        <p className="footer__copyright">&copy; 2023</p>
        <ul className="footer__links">
          {[
            { name: "Яндекс.Практикум", link: "https://practicum.yandex.ru/" },
            { name: "Github", link: "https://github.com/IrinaSakhno/" },
          ].map((item, index) => (
            <FooterLink name={item.name} link={item.link} key={index} />
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
