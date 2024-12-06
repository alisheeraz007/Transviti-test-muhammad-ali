import './App.css';

import Routes from './Routes/index'
import Layout from './layout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
