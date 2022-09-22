import { FC, ReactNode, useMemo } from "react";
import Container from "components/Container";
import clinic from "assets/images/clinic.png";
import { ReactComponent as Doctor } from "assets/icons/doctor.svg";
import { ReactComponent as Video } from "assets/icons/video.svg";
import { randomKey } from "common";
import { dataInfoItems } from "./data";

import "./styles.scss";

const Section1: FC = () => {
  const infoItems = useMemo<ReactNode>(
    () => dataInfoItems.map((elem) => (
      <div
        key={randomKey()}
        className="Section1__info-item"
      >
        <div className="Section1__icon Section1__icon_top">{elem.icon}</div>
        <p className="Section1__text Section1__text_fs-16 Section1__text_mb-4">
          {elem.text1}
        </p>
        <p className="Section1__text Section1__text_fs-16">{elem.text2}</p>
      </div>
    )),
    [],
  );

  return (
    <section className="Section1">
      <Container>
        <div className="Section1__content">
          <div className="Section1__image-wrap">
            <img
              className="Section1__image"
              src={clinic}
              alt="clinic"
            />

            <div className="Section1__image-filter" />

            <a
              href="https://www.youtube.com/watch?v=UqjJ6NkVt0w"
              className="Section1__link-video"
            >
              <p className="Section1__text Section1__text_text-align-c Section1__text_fs-16 Section1__text_width-sm-none">
                Посмотреть видео о клинике
                <br />
                <span className="Section1__text Section1__text_blue">
                  2 минуты
                </span>
              </p>

              <div className="Section1__icon">
                <Video />
              </div>
            </a>
          </div>

          <h1 className="Section1__text Section1__text_h1 Section1__text_z-5">
            Диагностика и лечение заболеваний нервной системы
          </h1>
          <p className="Section1__text Section1__text_mt-20 Section1__text_z-5">
            в профильной клинике на самом современном оборудовании
          </p>

          <div className="Section1__info-doctors">
            <div className="Section1__icon">
              <Doctor />
            </div>
            <p className="Section1__text Section1__text_bolder Section1__text_max-w-400">
              Врачи — кандидаты и доктора наук, практикующие хирурги высшей
              категории
            </p>
          </div>
        </div>
      </Container>
      <div className="Section1__footer">
        <Container>
          <div className="Section1__footer-content">{infoItems}</div>
        </Container>
      </div>
    </section>
  );
};

export default Section1;
