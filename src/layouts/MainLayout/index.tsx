import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { useTypedSelector } from "store";
import Header from "components/Header";
import Navbar from "components/Navbar";
import { IMainLayoutProps } from "./types";

import "./styles.scss";

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  const { pageTitle } = useTypedSelector((state) => state.common);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <div className="MainLayout">
        <Header />
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default MainLayout;
