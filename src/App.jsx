
import './App.css'
import Vehicle from './components/Vehicle/Vehicle'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import About from './components/about/About'
// import Value from './components/value/VAlue'
import Values from './components/value/Value'
import Downloads from './components/DownloadApp/Downloads'
import Footer from './Footer/Footer'

function App() {
 
  return (
    <>
  <Navbar/>
  <Hero/>
  <About/>
  <Vehicle/>
  <Values/>
  <Downloads/>
  <Footer/>
    </>
  )
}

export default App
