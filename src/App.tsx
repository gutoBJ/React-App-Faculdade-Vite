import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JogarOffline from './pages/JogarOffline/JogarOffline'
import Dashboard from './pages/Dashboard/Dashboard'
import Navegacao from './components/Navegacao'
import Cadastro from './pages/Cadastro/Cadastro'
import Recuperar from './pages/Recuperar/Recuperar'
import Login from './pages/Login/Login'

export default function App() {

  return (
    <>
      <BrowserRouter>
          <Navegacao/>
          <Routes>

            <Route path="/" element={<Dashboard />} />

            <Route path="/jogaroffline" element={<JogarOffline />} />

            <Route path="/cadastro" element={<Cadastro />} />

            <Route path="/recuperarsenha" element={<Recuperar />} />

            <Route path="/login" element={<Login />} />

          </Routes>
      </BrowserRouter>
    </>
  )
}
