import "./style.css";

export function Canvas(props) {
  const { children } = props;

  return <div className="canvas">{children}</div>;
}

export function Main(props) {
  const { children } = props;

  return <main className="main">{children}</main>;
}

export function Footer(props) {
  const { children } = props;

  return <footer className="footer">{children}</footer>;
}

export function Sidebar(props) {
  const { children } = props;

  return <div className="sidebar">{children}</div>;
}

export function MainContent(props) {
  const { children } = props;

  return <div className="main-content">{children}</div>;
}
