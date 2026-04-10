import "./style.css";

export default function Stack(props) {
  const { children, gap = "medium" } = props;

  return <div className={`stack has-gap-${gap}`}>{children}</div>;
}
