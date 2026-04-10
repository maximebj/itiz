import "./style.css";

export default function Text(props) {
  const { children, variant = "primary", size = "medium", className } = props;

  return (
    <p className={`text is-${variant} is-${size} ${className}`}>{children}</p>
  );
}
