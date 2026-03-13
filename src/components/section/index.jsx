import "./style.css";

function Section(props) {
  const { children, type = "white" } = props;

  return (
    <div className={`section is-${type}`}>
      <div className="section__container">{children}</div>
    </div>
  );
}

export default Section;
