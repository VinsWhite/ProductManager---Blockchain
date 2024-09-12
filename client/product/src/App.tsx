import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavbarComp from './components/NavbarComp'
import AllProductComp from './components/AllProductComp'
import CreateProductComp from './components/CreateProductComp'
import FooterComp from './components/FooterComp'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<AllProductComp />} />
          <Route path="/create" element={<CreateProductComp />} />
        </Routes>
        <FooterComp />
      </BrowserRouter>
    </>
  )
}

export default App
