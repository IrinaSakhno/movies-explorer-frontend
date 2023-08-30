import "./Techs.css";
import MainTitle from "../MainTitle/MainTitle";
import StackItem from "../StackItem/StackItem";

const Techs = () => {
  return (
    <section className="techs">
      <MainTitle title="Технологии" />
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__description">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__list">
        {["HTML", "CSS", "JS", "React", "Git", "Express.js", "mongo.DB"].map(
          (item) => (
            <StackItem title={item} />
          ),
        )}
      </ul>
    </section>
  );
};

export default Techs;
