import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Chat from './pages/chat';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Chat/>} path="/chat"/>
      </Routes>
  </BrowserRouter>
  )
}

export default App
