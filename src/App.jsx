import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './Pages/HomePage'
import HomeDetailsPage from './Pages/HomeDetailsPage'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/HomeDetailsPage"} element={<HomeDetailsPage />} />
        <Route path={"*"} element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
