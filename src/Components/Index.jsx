// import './App.css'
import About from './About'
import Contact from './Contact'
// import Expert from './Expert'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
import ScrollTop from './ScrollTop'
import Services from './Services'
import Testimonial from './Testimonial'
import UpcomingServices from './UpcomingServices'
import { useEffect } from 'react'
import gsapFunc, { upcomingServices } from '../utils/gsap.js'
import Chooseus from './Chooseus'


function Index() {

  useEffect(() => {
    gsapFunc()
    upcomingServices()
  }, [])


  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Chooseus />
      {/* <Expert/> */}
      <Testimonial />
      <UpcomingServices />
      <Contact />
      <Footer />
      <ScrollTop hide={false} />
    </>
  )
}

export default Index
