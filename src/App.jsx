import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhoWeAre from './components/WhoWeAre'
import Mission from './components/Mission'
import Values from './components/Values'
import OurWork from './components/OurWork'
import Team from './components/Team'
import Partners from './components/Partners'
import Events from './components/Events'
import JoinUs from './components/JoinUs'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <WhoWeAre />
        <Mission />
        <Values />
        <OurWork />
        <Team />
        <Partners />
        <Events />
        <JoinUs />
      </main>
      <Footer />
    </>
  )
}
