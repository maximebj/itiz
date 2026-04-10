import Section from "./components/section";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />

      <Section type="neutral">
        <div className="block">Texte</div>
        <div className="block">Texte</div>
        <p>Un paragraphe</p>
        <p>
          Un autre <strong>paragraphe</strong> avec du texte en gras
        </p>
        <h1>Titre</h1>
        <div className="center-block">
          <p>Texte centré</p>
        </div>
      </Section>
    </>
  );
}

export default App;
