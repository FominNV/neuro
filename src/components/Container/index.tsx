import { FC } from "react";
import  { IContainerProps } from "./types";

import "./styles.scss";

const Container: FC<IContainerProps> = ({ children }) => <div className="Container">{children}</div>;

export default Container;
