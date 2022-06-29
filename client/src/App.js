import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from "./components/Navbar"
import { Container } from '@mui/material'
import Home from './components/Home'
import Operations from './components/Operations'

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/operations" element={<Operations />} ></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}
