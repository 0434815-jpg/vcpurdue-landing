import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Team from './pages/Team'
import Projects from './pages/Projects'
import Apply from './pages/Apply'
import Events from './pages/Events'
import VentureCapital from './pages/VentureCapital'
import Partners from './pages/Partners'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/events" element={<Events />} />
          <Route path="/venture-capital" element={<VentureCapital />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
