import Home from './components/Home';
import Header from './components/header';
import Code from './components/Code';

import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>
      <Home/>
    </DataProvider>
  );
}

export default App;
