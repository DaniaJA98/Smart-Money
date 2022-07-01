import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from "../components/Navbar"
import { Container } from '@mui/material'
import Home from '../pages/Home'
import Operations from '../pages/Operations'
import '../index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Container fixed>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/operations" element={<Operations />} ></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}
