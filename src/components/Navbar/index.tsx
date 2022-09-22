import {
  FC, MouseEvent, ReactNode, useCallback, useMemo, useState,
} from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "store/users/actions";
import { PageTitle } from "store/users/types";
import classNames from "classnames";
import Container from "components/Container";
import { useTypedSelector } from "store";
import { randomKey } from "common";
import { dataLinks } from "./data";

import "./styles.scss";

const Navbar: FC = () => {
  const { pageTitle } = useTypedSelector((state) => state.common);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const dispatch = useDispatch<any>();

  const setCurrentPageTitle = useCallback<EventFunc<MouseEvent<HTMLButtonElement>>>((e) => {
    if (e.currentTarget.dataset.title) {
      dispatch(setPageTitle(e.currentTarget.dataset.title as PageTitle));
      setShowMenu(false);
    }
  }, [dispatch]);

  const openMenu = useCallback<EventFunc<MouseEvent>>(() => {
    if (window.innerWidth <= 767) {
      setShowMenu(true);
    }
  }, []);

  const links = useMemo<ReactNode>(
    () => dataLinks.map((elem) => {
      const linkClassName = classNames(
        "Navbar__link",
        {
          Navbar__link_active: elem.pageTitle === pageTitle,
        },
        {
          Navbar__link_show: elem.pageTitle === pageTitle && !showMenu,
        },
        {
          Navbar__link_hidden: !showMenu,
        },
      );

      return (
        <button
          key={randomKey()}
          className={linkClassName}
          data-title={elem.pageTitle}
          onClick={setCurrentPageTitle}
          // disabled={showMenu}
        >
          {elem.title}
        </button>
      );
    }),
    [pageTitle, showMenu, setCurrentPageTitle],
  );

  const linksBlockClassName = classNames("Navbar__links", {
    Navbar__links_active: showMenu,
  });

  return (
    <nav className="Navbar">
      <Container>
        <div className="Navbar__content">
          <div
            className={linksBlockClassName}
            onMouseUp={openMenu}
          >
            {links}
          </div>
          <button className="Navbar__button">ЗАПИСАТЬСЯ НА ПРИЕМ</button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
