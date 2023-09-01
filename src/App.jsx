import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './Pages/HomePage'
import HomeDetailsPage from './Pages/HomeDetailsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/HomeDetailsPage"} element={<HomeDetailsPage />} />
        <Route path={"*"} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
