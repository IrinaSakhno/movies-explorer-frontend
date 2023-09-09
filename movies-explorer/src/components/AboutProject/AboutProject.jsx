import "./AboutProject.css";
import MainTitle from "../MainTitle/MainTitle";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

const AboutProject = () => {
  return (
    <section className="about-project">
      <div className="about-project__container">
        <MainTitle title="О проекте" />

        <ul class="about-project__steps">
          {[
            {
              name: "Дипломный проект включал 5 этапов",
              about:
                "Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.",
            },
            {
              name: "На выполнение диплома ушло 5 недель",
              about:
                "У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.",
            },
          ].map((item) => (
            <ProjectDetails name={item.name} about={item.about} />
          ))}
        </ul>

        <div className="about-project__plan">
          <div className="about-project__backend">
            <p className="about-project__time about-project__time_green">
              1 неделя
            </p>
            <p className="about-project__plan-step">Back-end</p>
          </div>
          <div className="about-project__frontend">
            <p className="about-project__time">4 недели</p>
            <p className="about-project__plan-step">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
