import { FC, ReactNode, useMemo } from "react";
import Container from "components/Container";
import logo from "assets/images/logo.png";
import classNames from "classnames";
import { randomKey } from "common";
import { ReactComponent as Eye } from "assets/icons/eye.svg";
import { ReactComponent as Basket } from "assets/icons/basket.svg";
import { ReactComponent as Whatsapp } from "assets/icons/whatsapp.svg";
import { dataHeaderItems } from "./data";

import "./styles.scss";

const Header: FC = () => {
  const headerItems = useMemo<ReactNode>(
    () => dataHeaderItems.map((elem, index) => {
      const itemTextClassName = classNames(
        "Header__text Header__text_width-lg-none",
        {
          Header__text_400: index !== 2,
        },
        {
          "Header__text_fs-17": index === 2,
        },
      );

      return (
        <a
          key={randomKey()}
          className="Header__item"
          href={elem.href}
        >
          <div className="Header__icon Header__icon_blue">{elem.icon}</div>
          <div className="Header__text-wrap">
            <p className={itemTextClassName}>{elem.text1}</p>
            <p className={itemTextClassName}>{elem.text2}</p>
          </div>
        </a>
      );
    }),
    [],
  );

  return (
    <header className="Header">
      <Container>
        <div className="Header__content">
          <div className="Header__logo-wrap">
            <img
              className="Header__logo"
              src={logo}
              alt="logo"
            />
          </div>

          <div className="Header__menu">
            <div className="Header__menu-header">
              <button className="Header__button">
                <div className="Header__icon">
                  <Eye />
                </div>
                <p className="Header__text Header__text_blue Header__text_uppercase Header__text_width-l-none">
                  Версия для слабовидящих
                </p>
              </button>
              <button className="Header__button Header__button_blue Header__button_w-260">
                <div className="Header__icon">
                  <Basket />
                </div>
                <p className="Header__text Header__text_white Header__text_uppercase Header__text_width-md-none">
                  Корзина (1 000р.)
                </p>
              </button>
            </div>

            <div className="Header__items">
              {headerItems}
              <a
                className="Header__link"
                href="https://api.whatsapp.com/send/?phone=83432685148"
              >
                <div className="Header__icon Header__icon_white">
                  <Whatsapp />
                </div>
                <p className="Header__text Header__text_white Header__text_width-lg-none">
                  Написать в WhatsApp
                </p>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
