import './App.css';
import { ChakraBaseProvider } from '@chakra-ui/react';
import Weather from './components/Weather';
import { theme } from './themes/default.theme';

function App() {
  return (
      <ChakraBaseProvider theme={theme}>
          <Weather />
      </ChakraBaseProvider>
  );
}

export default App;
