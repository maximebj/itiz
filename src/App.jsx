import Section from "./components/section";
import Header from "./components/header";
import { Columns, Column } from "./components/columns";
import Stack from "./components/stack";
import Text from "./components/text";

function App() {
  return (
    <>
      <Header />

      <Section type="neutral">
        <Stack gap="small" direction="vertical" className="stack-example">
          <div className="block">Texte</div>
          <div className="block">Texte</div>
          <Text size="large">Un paragraphe</Text>
          <Text>
            Un autre <strong>paragraphe</strong> avec du texte en gras
          </Text>
          <Text size="xxlarge">Titre</Text>
          <div className="center-block">
            <Text>Texte centré</Text>
          </div>

          <Text className="desktop-only">Je suis caché sur mobile</Text>

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
