import './App.css'
import About from './Components/About'
import Expert from './Components/Expert'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import ScrollTop from './Components/ScrollTop'
import Services from './Components/Services'
import Testimonial from './Components/Testimonial'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Expert/>
      <Testimonial/>
      <Footer/>
      <ScrollTop/>
    </>
  )
}

export default App
