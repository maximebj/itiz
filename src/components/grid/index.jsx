import "./style.css";

export default function Grid(props) {
  const { children } = props;

  return <div className="grid">{children}</div>;
}

export function GridItem(props) {
  const { children, className } = props;

  return <div className={`grid-item ${className}`}>{children}</div>;
}

Grid.Item = GridItem;
