import Header from './components/Header'
import Hero from './components/Hero'
import Service from './components/Service'
import TrustedCompanies from './components/TrustedCompanies'
import './App.css'
import About from './components/About'
import WorkProcess from './components/WorkProcess'
import Faq from './components/Faq'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <TrustedCompanies/>
      <Service/>
      <About/>
      <WorkProcess/>
      <Faq/>
      <Contact/>
    </>
  )
}

export default App
