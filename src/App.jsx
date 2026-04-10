import Section from "./components/section";
import Header from "./components/header";
import { Columns, Column } from "./components/columns";

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

        <Columns gap="small">
          <Column size={50}>
            <p>Colonne 1</p>
          </Column>
          <Column size={20}>
            <p>Colonne 2</p>
          </Column>
          <Column size={30}>
            <p>Colonne 2</p>
          </Column>
        </Columns>
      </Section>
    </>
  );
}

export default App;
