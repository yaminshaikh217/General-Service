// import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
// import Expert from './Components/Expert'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import ScrollTop from './Components/ScrollTop'
import Services from './Components/Services'
import Testimonial from './Components/Testimonial'
import UpcomingServices from './Components/UpcomingServices'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      {/* <Expert/> */}
      <Testimonial/>
      <UpcomingServices/>
      <Contact/>
      <Footer/>
      <ScrollTop/>
    </>
  )
}

export default App
