import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateProduct from './pages/createProduct';
import Login from './pages/login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CreateProduct/>} path="/"/>
        <Route element={<Login/>} path="/auth/login"/>
      </Routes>
  </BrowserRouter>
  )
}

export default App