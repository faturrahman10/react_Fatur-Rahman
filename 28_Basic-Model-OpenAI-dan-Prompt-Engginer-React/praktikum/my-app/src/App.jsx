import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Chat from './pages/chat';
import FoodRecommendationPage from './pages/foodRecomendation';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Chat/>} path="/chat"/>
        <Route element={<FoodRecommendationPage/>} path="/food"/>
      </Routes>
  </BrowserRouter>
  )
}

export default App
