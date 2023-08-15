// Styles
import Style from "./Container.module.css";

type Props = {
  baseClassName?: string;
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({
  baseClassName,
  children,
}): React.ReactNode => (
  <div className={(Style.container, baseClassName)}>{children}</div>
);

export default Container;
