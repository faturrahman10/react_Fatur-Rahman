import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateProduct from './pages/CreateProduct';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<CreateProduct />} path="/createProduct" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
