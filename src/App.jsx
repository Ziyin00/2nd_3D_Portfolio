import { BrowserRouter } from "react-router-dom"

import { About, Contact, Hero, Experience, Feedbacks, Navbar, Tech, Works, StarsCanvas } from "./components/components"
import { ToastContainer } from "react-toastify"
function App() {


  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center text-secondary">
          <ToastContainer theme="dark" />

          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">

          <Contact />
          <StarsCanvas />
        </div>


      </div>
    </BrowserRouter>
  )
}

export default App
