import clsx from "clsx";

import css from "./Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return <div className={clsx(css.container, className)}></div>;
};
export default Container;
