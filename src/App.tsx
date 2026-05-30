import Header from './components/Header'
import Hero from './components/Hero'
import Service from './components/Service'
import TrustedCompanies from './components/TrustedCompanies'
import './App.css'
import About from './components/About'
import WorkProcess from './components/WorkProcess'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
      <Footer/>
    </>
  )
}

export default App
