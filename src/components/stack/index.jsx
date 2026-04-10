import "./style.css";

export default function Stack(props) {
  const {
    children,
    gap = "medium",
    direction = "vertical",
    className,
    style,
  } = props;

  return (
    <div
      className={`stack has-direction-${direction} has-gap-${gap} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
