import "./style.css";

export function Columns(props) {
  const { children, gap = "medium" } = props;

  return <div className={`columns has-gap-${gap}`}>{children}</div>;
}

export function Column(props) {
  const { children, size = 50 } = props;

  return (
    <div className="column" style={{ width: `${size}%` }}>
      {children}
    </div>
  );
}
