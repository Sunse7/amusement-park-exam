import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AttractionsPage from './pages/AttractionsPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/attractions' element={<AttractionsPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
