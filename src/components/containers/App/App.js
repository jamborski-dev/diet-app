// styles
import GlobalStyle from '../../../styles/GlobalStyles';

// context
import { FormContextProvider } from '../../../context/FormContextProvider';

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
import { H2 } from '../../elements/Headers'

function App() {
  return (
    <>
      <GlobalStyle />
      <MainGrid>
        <NavBar />
        <FormContextProvider>
          <Top>
            <Column count={3}>
              <H2>Nutritional Calculator</H2>
              <p>Once you provide all data, calculator will give you detailed information about your calorie goals.</p>
              <p>Than, you can choose from few suggested diet types, to see a full breakdown of marco nutrients and meals suggestions. Also, you can set your own macros procentages.</p>
              <Calories />
            </Column>
            <Column count={3}>
              <Form />
            </Column>
            <Column count={3}>
              <MacroResult />
            </Column>
          </Top>
          <Content>
            Content
          </Content>
        </FormContextProvider>
      </MainGrid>
    </>
  );
}

export default App;
