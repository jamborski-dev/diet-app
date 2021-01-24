// styles
import GlobalStyle from '../../../styles/GlobalStyles'

// context
import { FormContextProvider } from '../../../context/FormContextProvider'

// containers
import Form from '../Form/Form'
import Calories from '../Calories/Calories'
import NavBar from '../../sections/NavBar/NavBar'
import MacroResult from '../Macros/MacrosResult'

// sections
import Top from '../../sections/Top/Top'
import Content from '../../sections/Content/Content'

// elements
import { MainGrid } from '../../elements/MainGrid'
import { Column } from '../../elements/Column'
import { H2 } from '../../elements/Typography'
import { Section } from '../../elements/Section'
import { FlexBox } from '../../elements/FlexBox';

function App() {
  return (
    <>
      <GlobalStyle />
        <MainGrid>
          <Top>
            <NavBar />
            <FormContextProvider>
              <Section>
                <div>
                  <H2>Nutritional Calculator</H2>
                  <p>Once you provide all the data, calculator will give you detailed information about your calorie goals.</p>
                  <p>Than, you can choose from few suggested diet types, to see a full breakdown of marco nutrients and meals suggestions. Also, you can set your own macros procentages.</p>
                  <Form />
                </div>
                <FlexBox direction="column" justify="stretch">
                  <Calories />
                  <MacroResult />
                </FlexBox>
              </Section>
            </FormContextProvider>
          </Top>
          <Content>
            Content
          </Content>
        </MainGrid>
    </>
  );
}

export default App;
