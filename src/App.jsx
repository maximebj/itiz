import Section from "./components/section";
import Header from "./components/header";
import { Columns, Column } from "./components/columns";
import Stack from "./components/stack";
import Text from "./components/text";
import Grid from "./components/grid";

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
            <Column size={30} className="is-first-on-mobile">
              <p>Colonne 3</p>
            </Column>
          </Columns>

          <div className="flex">
            <div className="flex-simple">Item 1</div>
            <div className="flex-double">Item 2</div>
            <div className="flex-simple">Item 3</div>
            <div className="flex-simple">Item 3</div>
          </div>

          <Grid>
            <Grid.Item className="is-double">Item 1</Grid.Item>
            <Grid.Item>Item 2</Grid.Item>
            <Grid.Item>Item 3</Grid.Item>
            <Grid.Item>Item 4</Grid.Item>
            <Grid.Item>Item 5</Grid.Item>
            <Grid.Item>Item 6</Grid.Item>
            <Grid.Item>Item 7</Grid.Item>
            <Grid.Item>Item 8</Grid.Item>
            <Grid.Item>Item 9</Grid.Item>
            <Grid.Item>Item 10</Grid.Item>
            <Grid.Item>Item 11</Grid.Item>
            <Grid.Item>Item 12</Grid.Item>
            <Grid.Item>Item 13</Grid.Item>
            <Grid.Item>Item 14</Grid.Item>
            <Grid.Item>Item 15</Grid.Item>
            <Grid.Item>Item 16</Grid.Item>
            <Grid.Item>Item 17</Grid.Item>
            <Grid.Item>Item 18</Grid.Item>
            <Grid.Item>Item 19</Grid.Item>
            <Grid.Item>Item 20</Grid.Item>
          </Grid>
        </Stack>
      </Section>
    </>
  );
}

export default App;
