import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Details from './components/details-page/Details';

import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="/details" element={<Details />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
