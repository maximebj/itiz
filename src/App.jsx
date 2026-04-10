import Section from "./components/section";
import Header from "./components/header";
import { Columns, Column } from "./components/columns";
import Stack from "./components/stack";

function App() {
  return (
    <>
      <Header />

      <Section type="neutral">
        <Stack gap="small" direction="vertical" className="stack-example">
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

          <div className="flex">
            <div className="flex-simple">Item 1</div>
            <div className="flex-double">Item 2</div>
            <div className="flex-simple">Item 3</div>
            <div className="flex-simple">Item 3</div>
          </div>
        </Stack>
      </Section>
    </>
  );
}

export default App;
