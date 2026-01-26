import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Gallery from "./components/Gallery"
import Benefits from "./components/Benefits/Benefits"
import About from "./components/About"
import Faqs from "./components/Faqs"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import PautasModal from "./components/PautasModal"
import ContactForm from "./components/ContactForm"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <Services />
      <Gallery />
      <About />
      <Faqs />
      <Testimonials />
      <PautasModal />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
