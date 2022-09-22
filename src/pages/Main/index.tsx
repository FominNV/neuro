import Section1 from "components/MainPageSections/Section1";
import MainLayout from "layouts/MainLayout";
import { FC } from "react";
import "./styles.scss";

const Main: FC = () => (
  <MainLayout>
    <div className="Main">
      <Section1 />
    </div>
  </MainLayout>
);

export default Main;
