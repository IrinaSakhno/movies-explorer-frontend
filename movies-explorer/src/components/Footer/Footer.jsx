import "./Footer.css";
import FooterLink from "../FooterLink/FooterLink";

const Footer = () => {
  return (
    <section className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__bottom">
        <p className="footer__copyright">&copy; 2023</p>
        <ul className="footer__links">
          {[
            { name: "Яндекс.Практикум", link: "https://practicum.yandex.ru/" },
            { name: "Github", link: "https://github.com/IrinaSakhno/" },
          ].map((item) => (
            <FooterLink name={item.name} link={item.link} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Footer;