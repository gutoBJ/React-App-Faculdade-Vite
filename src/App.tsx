import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JogarOffline from './pages/JogarOffline'
import Dashboard from './pages/Dashboard'
import Navegacao from './components/Navegacao'

export default function App() {

  return (
    <>
      <BrowserRouter>
          <Navegacao/>
          <Routes>

            <Route path="/" element={<Dashboard />} />

            <Route path="/jogaroffline" element={<JogarOffline />} />

          </Routes>
      </BrowserRouter>
    </>
  )
}
