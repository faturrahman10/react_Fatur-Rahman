import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateProduct from './pages/CreateProduct';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CreateProduct/>} path="/"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
