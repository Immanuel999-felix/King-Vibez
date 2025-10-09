import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Music from './pages/Music'
import Header from './components/Header'
import Footer from './components/Footer'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function App(){
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#070812] text-white flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/music' element={<Music api={API} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
